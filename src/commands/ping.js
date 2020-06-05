const ping = {
  name: 'ping',
  run: (client, msg) => {
    msg.channel.send('Pong!');
  },
};

module.exports = ping;
