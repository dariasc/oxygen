import Command from '../struct/command';

export default class Config implements Command {
  name = 'config';

  async run(client, msg) {
    const settings = client.db.settings.ensure(
      msg.guild.id,
      client.db.defaultSettings,
    );

    msg.channel.send(JSON.stringify(settings));
  }
};
