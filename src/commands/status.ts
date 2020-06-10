import { Client, Message } from 'discord.js';
import Long from 'long';

import Command from '../struct/command';
import connections from '../companion/connection';
import { IRequest, Empty } from '../companion/protobuf/bundle';
import settings from '../database';

export default class Status implements Command {
  name = 'status';

  async run(client: Client, msg: Message) {
    if (!msg.guild) return;

    const config = settings.ensure(msg.guild.id);
    if (!config.server.token) return;

    const connection = connections.get(msg.guild.id);
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
