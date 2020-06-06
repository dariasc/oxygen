import Command from '../struct/command';

export default class Ping implements Command {
  name = 'ping';

  async run(client, msg) {
    msg.channel.send('Pong!');
  }
}
