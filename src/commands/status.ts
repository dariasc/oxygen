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

  exec(message: Message) {
    const config = settings.ensure(message.guild!.id);

    const connection = connections.get(message.guild!.id);
    if (!connection) return;

    const getInfo: IRequest = {
      seq: 50,
      playerId: Long.fromValue(config.auth.steamid),
      playerToken: config.server.token,
      getInfo: Empty.create(),
    };
    connection.request(getInfo);
  }
}

export default Status;
