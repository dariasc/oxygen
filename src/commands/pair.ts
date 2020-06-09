import { Client, Message, MessageEmbed } from 'discord.js';
import Command from '../struct/command';
import settings from '../database';
import NotificationListener from '../companion/notification';

export default class Pair implements Command {
  name = 'pair';

  async run(client: Client, msg: Message) {
    const authToken = settings.ensure(msg.guild!.id).auth.token;
    if (!authToken) {
      msg.channel.send('You have not authenticated yet. Use `auth`');
      return;
    }

    const register = new MessageEmbed().setTitle('Setting up notification listener');
    msg.channel.send(register);

    const listener = new NotificationListener(authToken);
    const registration = await listener.register();
    if (!registration) {
      msg.channel.send('Could not register the notification listener');
      return;
    }

    const listening = new MessageEmbed().setTitle('Listenening for `pair` requests');
    msg.channel.send(listening);

    const server = await listener.listen();

    if (server.type != 'server') return;

    const config = settings.ensure(msg.guild!.id);
    config.server.token = parseInt(server.playerToken);
    config.server.ip = server.ip;
    config.server.port = parseInt(server.port);
    settings.set(msg.guild!.id, config);

    const notification = new MessageEmbed()
      .setTitle(server.name)
      .setDescription(server.desc.replace(/\\n/g, '\n'))
      .setImage(server.img)
      .addField('ID', `\`${server.id}\``)
      .addField('IP', `\`${server.ip}\``, true)
      .addField('Port', `\`${server.port}\``, true);

    msg.channel.send(notification);
  }
}
