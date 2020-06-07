import Long from 'long';
import { client as WebSocketClient } from 'websocket';
import { Request, Response, Empty } from './protobuf/request';
import settings from '../database';

let config;
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

    const response = Response.decode(message.binaryData)
    console.log(response);
  });

  const data = Request.encode({seq: 1, playerId: Long.fromValue('76561198176221590'), playerToken: config.playerToken, getInfo: new Empty() }).finish();
  connection.sendBytes(Buffer.from(data));
});

export default function init() {
  config = settings.random();
  /* 
    This v param was implemented recently by facepunch as to prevent old clients from connecting
    Gotta find a good way to keep that up to date...
  */
  socket.connect(`wss://companion-rust.facepunch.com/game/${config.ip}/${config.port}?v=1591561780296`);
}
