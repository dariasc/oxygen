import { Command } from 'discord-akairo';
import { Message, MessageEmbed, MessageAttachment } from 'discord.js';
import Long from 'long';

import connections from '../companion/connection';
import { IRequest, Empty } from '../companion/protobuf/bundle';
import settings from '../database';

class Map extends Command {
  constructor() {
    super('map', {
      aliases: ['map'],
      channel: 'guild',
    });
  }

  async exec(message: Message) {
    const config = settings.ensure(message.guild!.id);
    if (!config.server.token) return;

    const server = connections.get(message.guild!.id);
    if (!server) return;

    const getMap: IRequest = {
      playerId: Long.fromValue(config.auth.steamid),
      playerToken: config.server.token,
      getMap: Empty.create(),
    };
    const res = await server.request(getMap);

    if (res.map && res.map.jpgImage) {
      console.log(res.map);
      const img = new MessageAttachment(Buffer.from(res.map.jpgImage), 'map.jpg');
      const embed = new MessageEmbed()
        .setTitle('Game Map')
        .attachFiles([img])
        .setImage('attachment://map.jpg');
      embed.image!.height = 1500;
      embed.image!.width = 1500;
      message.channel.send(embed);
    }
  }
}

export default Map;
