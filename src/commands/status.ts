import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import Long from 'long';

import connections from '../companion/connection';
import { IRequest, Empty } from '../companion/protobuf/bundle';
import settings from '../database';

class Status extends Command {
  constructor() {
    super('status', {
      aliases: ['status'],
      channel: 'guild',
    });
  }

  async exec(message: Message) {
    const config = settings.ensure(message.guild!.id);
    if (!config.server.token) return;

    const server = connections.get(message.guild!.id);
    if (!server) return;

    const getInfo: IRequest = {
      playerId: Long.fromValue(config.auth.steamid),
      playerToken: config.server.token,
      getInfo: Empty.create(),
    };
    const res = await server.request(getInfo);
    message.channel.send(`\`\`\`json\n ${JSON.stringify(res, null, 2)}\`\`\``);
  }
}

export default Status;
