import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';

import settings from '../database';
import NotificationListener from '../companion/notification';

class Pair extends Command {
  name = 'pair';
  constructor() {
    super('pair', {
      aliases: ['pair'],
    });
  }

  async exec(message: Message) {
    const authToken = settings.ensure(message.guild!.id).auth.token;
    if (!authToken) {
      message.channel.send('You have not authenticated yet. Use `auth`');
      return;
    }

    const register = new MessageEmbed().setTitle('Setting up notification listener');
    message.channel.send(register);

    const listener = new NotificationListener(authToken);
    const registration = await listener.register();
    if (!registration) {
      message.channel.send('Could not register the notification listener');
      return;
    }

    const listening = new MessageEmbed().setTitle('Listenening for `pair` requests');
    message.channel.send(listening);

    const server = await listener.listen();

    if (server.type != 'server') return;

    const config = settings.ensure(message.guild!.id);
    config.server.token = parseInt(server.playerToken);
    config.server.ip = server.ip;
    config.server.port = parseInt(server.port);
    settings.set(message.guild!.id, config);

    const notification = new MessageEmbed()
      .setTitle(server.name)
      .setDescription(server.desc.replace(/\\n/g, '\n'))
      .setImage(server.img)
      .addField('ID', `\`${server.id}\``)
      .addField('IP', `\`${server.ip}\``, true)
      .addField('Port', `\`${server.port}\``, true);

    message.channel.send(notification);
  }
}

export default Pair;
