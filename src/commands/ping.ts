import { Client, Message } from 'discord.js';
import Command from '../struct/command';

export default class Ping implements Command {
  name = 'ping';

  async run(client: Client, msg: Message) {
    msg.channel.send('Pong!');
  }
}
