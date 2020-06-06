import { Client, Message } from 'discord.js';
import Command from '../struct/command';
import settings from '../database';

export default class Config implements Command {
  name = 'config';

  async run(client: Client, msg: Message) {
    if (!msg.guild) return;

    const config = settings.ensure(msg.guild.id);

    msg.channel.send(JSON.stringify(config));
  }
};
