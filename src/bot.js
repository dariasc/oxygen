const discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
require('dotenv').config();

const client = new discord.Client();

client.db = require('./database');

client.commands = new Enmap();

fs.readdir('./src/commands/', (err, files) => {
  if (err) return console.error(err);

  return files.forEach((file) => {
    if (!file.endsWith('.js')) return;

    const props = require(`./commands/${file}`);
    const commandName = file.split('.')[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildDelete', (guild) => {
  client.db.settings.delete(guild.id);
});

client.on('message', (msg) => {
  if (msg.author.bot) return;

  const conf = client.db.settings.ensure(
    msg.guild.id,
    client.db.defaultSettings,
  );

  if (!msg.content.startsWith(conf.prefix)) return;

  const args = msg.content.slice(conf.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, msg, args);
});

client.login(process.env.TOKEN);
