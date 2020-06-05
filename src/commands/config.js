const config = {
  name: 'config',
  run: (client, msg) => {
    const settings = client.db.settings.ensure(
      msg.guild.id,
      client.db.defaultSettings,
    );

    msg.channel.send(JSON.stringify(settings));
  },
};

module.exports = config;
