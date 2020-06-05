const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

client.on('connectFailed', (error) => {
  console.log(`Connect Error: ${error.toString()}`);
});

client.on('connect', (connection) => {
  console.log('Companion Client Connected');
  connection.on('error', (error) => {
    console.log(`Connection Error: ${error.toString()}`);
  });
  connection.on('close', () => {
    console.log('echo-protocol Connection Closed');
  });
  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(`Received: '${message.utf8Data}'`);
    }
  });

  const data = 'CEsQlvP85pCAgIgBGMHe1Z/8/////wFCAA==';
  const buff = Buffer.from(data, 'base64');
  connection.sendBytes(buff);
});

client.connect('wss://companion-rust.facepunch.com/game/190.22.67.223/28017');
