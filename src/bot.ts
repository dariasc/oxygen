import { Client, Collection } from 'discord.js';
import Command from './struct/command';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const client = new Client();

client.db = require('./database');

let commands = new Collection<string, Command>();

fs.readdir('./src/commands/', (err, files) => {
  if (err) return console.error(err);

  return files.forEach((file) => {
    if (!file.endsWith('.ts')) return;

    const commandClass = require(`./commands/${file}`).default;
    const command = new commandClass() as Command;

    console.log(`[commandLoader] loading ${command.name}`);
    commands.set(command.name, command);
  });
});

client.on('ready', () => {
  console.log(`[login] as ${client.user.tag}!`);
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

  const cmd = commands.get(command);

  if (!cmd) return;

  cmd.run(client, msg, args);
});

client.login(process.env.TOKEN);
