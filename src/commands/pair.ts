import { Client, Message, MessageEmbed } from 'discord.js';
import Command from '../struct/command';
import settings from '../database';
import NotificationListener from '../companion/notification';

export default class Pair implements Command {
  name = 'pair';

  async run(client: Client, msg: Message) {
    const authToken = settings.ensure(msg.guild!.id).authToken;
    if (!authToken) {
      msg.channel.send('You have not authenticated yet. Use `auth`');
      return;
    }

    const listener = new NotificationListener(authToken);
    const registration = await listener.register();
    if (!registration) {
      msg.channel.send('Could not register the notification listener');
      return;
    }

    const register = new MessageEmbed().setTitle(
      'Registered notification service',
    );
    msg.channel.send(register);

    await listener.pushToExpo();

    await listener.pushToFacepunch();

    const listening = new MessageEmbed().setTitle(
      'Listenening for `pair` requests',
    );
    msg.channel.send(listening);

    // TODO: Create interface for this type
    const server = await listener.listen();

    if (server.type != 'server') return;

    const config = settings.ensure(msg.guild!.id);
    config.playerToken = parseInt(server.playerToken);
    config.ip = server.ip;
    config.port = parseInt(server.port);
    settings.set(msg.guild!.id, config);

    const notification = new MessageEmbed()
      .setTitle(server.name)
      .setDescription(server.desc.replace(/\\n/g, '\n'))
      .setImage(server.img)
      .addField('Id', `\`${server.id}\``)
      .addField('Ip', `\`${server.ip}\``, true)
      .addField('Port', `\`${server.port}\``, true);

    msg.channel.send(notification);
  }
}
