import WebSocket from 'ws';
import Long from 'long';
import fetch, { Headers } from 'node-fetch';

import { Request, Message, IRequest, Empty } from './protobuf/bundle';
import settings, { Config } from '../database';

let manifest: { publishedTime: string | number | Date };

const connections = new Map<string, Connection>();
export default connections;

export function connectAll() {
  fetchManifest().then(() => {
    settings.forEach((config, id) => {
      if (!config.server.token) {
        return;
      }

      console.log(`setting up connection for ${id}`);
      const connection = new Connection(config, id);
      connections.set(id, connection);
    });
    console.log(`[connections] connected ${connections.size} guilds to their servers`);
  });
}

class Connection {
  ws: WebSocket;
  config: Config;
  guildId: string;

  constructor(config: Config, guildId: string) {
    this.config = config;
    this.guildId = guildId;
    const publishedTime = new Date(manifest.publishedTime).valueOf();

    this.ws = new WebSocket(
      `wss://companion-rust.facepunch.com/game/${this.config.server.ip}/${this.config.server.port}?v=${publishedTime}`,
    );

    this.ws.on('message', (message) => {
      const response = Message.decode(Buffer.from(message));
      console.log(response);
    });

    this.ws.on('open', () => {
      const login: IRequest = {
        seq: 1,
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

  request(req: IRequest) {
    if (!this.ws) {
      return;
    }

    const data = Request.encode(req).finish();
    this.ws.send(Buffer.from(data));
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
