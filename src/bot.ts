import { Client } from 'discord.js';
import Enmap from 'enmap';
import fs from 'fs';
import dotenv from 'dotenv';

import settings from './database';
import { connectAll } from './companion/connection';
import Command from './struct/command';

dotenv.config();
const client = new Client();

(async function () {
  await settings.defer;
  console.log(`[settings] loaded ${settings.count} configs`);
  connectAll();
})();

const commands = new Enmap<string, Command>();

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
  if (!client.user) return;

  console.log(`[login] as ${client.user.tag}!`);
});

client.on('guildDelete', (guild) => {
  settings.delete(guild.id);
});

client.on('message', (msg) => {
  if (msg.author.bot) return;
  if (!msg.guild) return;

  const conf = settings.ensure(msg.guild.id);

  if (!msg.content.startsWith(conf.prefix)) return;

  const args = msg.content.slice(conf.prefix.length).trim().split(/ +/g);

  const command = args.shift()!.toLowerCase();

  const cmd = commands.get(command);

  if (!cmd) return;

  cmd.run(client, msg, args);
});

client.login(process.env.TOKEN);
