import Command from '../struct/command';

import { MessageEmbed } from 'discord.js';
import Enmap from 'enmap';
import fetch from 'node-fetch';
import { createServer } from 'http';

let discordClient;

export default class Auth implements Command {
  name = 'auth';
  executing = new Enmap();

  constructor() {
    createServer((req, res) => {
      const requestUrl = new URL(req.url, `http://${req.headers.host}`);
      this.handleToken(requestUrl.searchParams, requestUrl.pathname);
  
      res.writeHead(302, {
        // TODO: Decide where we redirect. This screen shows an ugly alert after a while.
        Location: 'http://companion-rust.facepunch.com/app',
      });
      res.end();
    }).listen(3000);
    console.log('[webserver] auth service started on port 3000');
  }

  async run(client, msg) {
    // TODO: Change this up
    if (!discordClient) {
      discordClient = client;
    }
    if (!msg.member.hasPermission('MANAGE_GUILD')) {
      msg.reply('Insufficient permissions :/');
    }

    this.executing.set(msg.guild.id, {
      channel: msg.channel.id,
    });

    const embed = new MessageEmbed()
      .setTitle('Authentication')
      .setURL(
        `https://companion-rust.facepunch.com/login?returnUrl=http://localhost:3000/${msg.guild.id}/`,
      )
      .setDescription(
        `To authenticate with the companion app servers we need an authentication token. 
        To get the token go to this website and login with steam, this will automatically link your token with the bot.`,
      )
      .setColor('#00FFFF');
    msg.channel.send(embed);
  }

  async handleToken(searchParams, pathName) {
    const token = searchParams.get('token');
    const steamid = searchParams.get('steamId');
    const guild = pathName.replace(/\//g, '');

    const settings = discordClient.db.settings.get(guild);
    settings.authToken = token;
    discordClient.db.settings.set(guild, settings);

    const steam = new URL(
      'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/',
    );
    const params = {
      key: process.env.STEAM_KEY,
      steamids: steamid,
    };
    Object.keys(params).forEach((key) =>
      steam.searchParams.append(key, params[key]),
    );

    const steamAccount = await fetch(steam, {})
      .then((res) => res.json())
      .then((res) => res.response.players[0]);

    const channelId = this.executing.get(guild).channel;
    const channel = discordClient.channels.cache.get(channelId);

    const steamData = new MessageEmbed()
      .setTitle(steamAccount.personaname)
      .addField('Steam ID', `\`${steamAccount.steamid}\``)
      .setColor('#000000');
    channel.send(steamData);

    const verification = new MessageEmbed()
      .setTitle('Token Verification Complete')
      .setDescription(
        'You may now pair a supported Rust server using the `pair` command',
      )
      .setColor('#33CC33');
    channel.send(verification);
  }
}
