import Long from 'long';
import { client as WebSocketClient } from 'websocket';
import { Request, Empty } from './protobuf/request';
import settings from '../database';

let config;
const socket = new WebSocketClient();

socket.on('connect', (connection) => {
  console.log('Companion Client Connected');
  connection.on('error', (error) => {
    console.log(`Connection Error: ${error.toString()}`);
  });
  connection.on('close', () => {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', (message) => {
    console.log(`Received: '${message.binaryData}'`);
  });

  const data = Request.encode({seq: 1, playerId: Long.fromValue('76561198176221590'), playerToken: config.playerToken, getInfo: new Empty() }).finish();
  connection.sendBytes(Buffer.from(data));
});

export default function init() {
  config = settings.random();
  socket.connect(`wss://companion-rust.facepunch.com/game/${config.ip}/${config.port}`);
}
