import Long from 'long';
import { client as WebSocketClient } from 'websocket';
import { Request, Message, Empty } from './protobuf/bundle';
import fetch, { Headers } from 'node-fetch';
import settings, { Config } from '../database';

let config: Config;
const socket = new WebSocketClient();

socket.on('connect', (connection) => {
  connection.on('error', (error) => {
    console.log(`Connection Error: ${error.toString()}`);
  });
  connection.on('close', () => {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', (message) => {
    if (!message.binaryData) return;

    const response = Message.decode(message.binaryData);
    console.log(response);
  });

  const data = Request.encode({
    seq: 1,
    playerId: Long.fromValue('76561198176221590'),
    playerToken: config.server.token,
    getInfo: Empty.create(),
  }).finish();
  connection.sendBytes(Buffer.from(data));
});

export default async function init() {
  config = settings.random();

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

  const res = await fetch('https://exp.host/@facepunch/RustCompanion?cache=false', requestOptions)
    .then((res) => res.json())
    .catch((error) => console.log('error', error));
  const manifest = JSON.parse(res.manifestString);
  const publishedTime = new Date(manifest.publishedTime);

  socket.connect(
    `wss://companion-rust.facepunch.com/game/${config.server.ip}/${
      config.server.port
    }?v=${publishedTime.valueOf()}`,
  );
}
