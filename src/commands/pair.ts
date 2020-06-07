import { Client, Message, MessageEmbed } from 'discord.js';
import Command from '../struct/command';
import settings from '../database';
import NotificationListener from '../companion/notification';
import { NotificationContent } from 'push-receiver';

export default class Pair implements Command {
  name = 'pair';

  async run(client: Client, msg: Message) {
    let authToken = settings.ensure(msg.guild!.id).authToken;
    if (!authToken) {
      const error = new MessageEmbed()
        .setTitle('Error while setting up the notification listener');

      msg.channel.send('You have not authenticated yet. Use `auth`');
      return;
    }

    const listener = new NotificationListener(authToken);
    const registration = await listener.register()
    if (!registration) {
      msg.channel.send('Could not register the notification listener');
      return;
    }

    const register = new MessageEmbed()
      .setTitle('Registered Notification Service');
    msg.channel.send(register);

    await listener.pushToExpo();

    await listener.pushToFacepunch();

    const listening = new MessageEmbed()
      .setTitle('Listenening for `pair` requests');
    msg.channel.send(listening);

    listener.listen((notification: NotificationContent) => {
      msg.channel.send(notification);
    })
  }
}
