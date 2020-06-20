import WebSocket from 'ws';
import Long from 'long';
import fetch, { Headers } from 'node-fetch';

import { Request, Message, IRequest, IResponse, Empty } from './protobuf/bundle';
import settings, { Config } from '../database';

let manifest: { publishedTime: string | number | Date };

const connections = new Map<string, Server>();
export default connections;

export function connectAll() {
  fetchManifest().then(() => {
    settings.forEach((config, id) => {
      if (!config.server.token) {
        return;
      }

      const connection = new Server(config, id);
      connections.set(id, connection);
    });
    console.log(`[connections] connected ${connections.size} guilds to their servers`);
  });
}

class Server {
  ws: WebSocket;
  config: Config;
  guildId: string;
  sequence = 1;
  promises = new Map<number, (res: IResponse) => void>();

  constructor(config: Config, guildId: string) {
    this.config = config;
    this.guildId = guildId;
    const publishedTime = new Date(manifest.publishedTime).valueOf();

    /* @todo we could connect directly to the target server so we dont go through facepunch's proxy
       this would mean we wouldn't have to fetch the manifest for the latest published time. Have to look into this */
    this.ws = new WebSocket(
      `wss://companion-rust.facepunch.com/game/${this.config.server.ip}/${this.config.server.port}?v=${publishedTime}`,
    );

    this.ws.on('message', (data) => {
      const message = Message.decode(Buffer.from(data));
      if (message.response) {
        if (this.promises.has(message.response.seq)) {
          const resolve = this.promises.get(message.response.seq)!;
          resolve(message.response);
        }
      }
    });

    this.ws.on('open', () => {
      const login: IRequest = {
        playerId: Long.fromValue(config.auth.steamid),
        playerToken: config.server.token,
        getInfo: Empty.create(),
      };
      this.request(login);
    });

    this.ws.on('close', (code, reason) => {
      console.log(`[websocket close] ${code}:${reason}`);
    });

    this.ws.on('error', (err) => {
      console.log(`[websocket error] ${err}`);
    });
  }

  request(req: IRequest): Promise<IResponse> {
    return new Promise((resolve, reject) => {
      if (!this.ws) {
        return reject('Websocket to server not initialized');
      }

      const seq = this.seq();
      req.seq = seq;

      const data = Request.encode(req).finish();
      this.ws.send(Buffer.from(data));

      this.promises.set(seq, resolve);
    });
  }

  seq(): number {
    this.sequence += 1;
    return this.sequence;
  }
}

async function fetchManifest() {
  const expoHeaders = new Headers();
  expoHeaders.append('Exponent-SDK-Version', '37.0.0');
  expoHeaders.append('Exponent-Platform', 'android');
  expoHeaders.append('Accept', 'application/expo+json,application/json');
  expoHeaders.append('Expo-Release-Channel', 'default');
  expoHeaders.append('Expo-Api-Version', '1');
  expoHeaders.append('Expo-Client-Environment', 'STANDALONE');
  expoHeaders.append('Exponent-Accept-Signature', 'true');
  expoHeaders.append('Expo-JSON-Error', 'true');

  const requestOptions = {
    method: 'GET',
    headers: expoHeaders,
  };

  manifest = await fetch('https://exp.host/@facepunch/RustCompanion?cache=false', requestOptions)
    .then((res) => res.json())
    .then((json) => JSON.parse(json.manifestString))
    .catch((error) => console.log('error', error));
}
