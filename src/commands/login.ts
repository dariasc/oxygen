import { Command } from 'discord-akairo';
import { Message, MessageEmbed, TextChannel } from 'discord.js';
import fetch from 'node-fetch';
import { createServer } from 'http';

import settings from '../database';
import client from '../bot';

const loginUrl = 'https://companion-rust.facepunch.com/login';
const executing = new Map<string, string>();

class Login extends Command {
  constructor() {
    super('login', {
      aliases: ['login', 'auth'],
      channel: 'guild',
      userPermissions: 'MANAGE_GUILD',
    });

    createServer((req, res) => {
      const requestUrl = new URL(req.url!, `http://${req.headers.host}`);
      this.handleToken(requestUrl.searchParams, requestUrl.pathname);

      res.writeHead(302, {
        // @todo Decide where we redirect. This screen shows an ugly alert after a while.
        Location: 'http://companion-rust.facepunch.com/app',
      });
      res.end();
    }).listen(3000);
    console.log('[webserver] auth service started on port 3000');
  }

  exec(message: Message) {
    executing.set(message.guild!.id, message.channel.id);

    const embed = new MessageEmbed()
      .setTitle('Authentication')
      .setURL(`${loginUrl}?returnUrl=http://localhost:3000/${message.guild!.id}/`)
      .setDescription(
        `To authenticate with the companion app servers we need an authentication token. 
        To get the token go to this website and login with steam, this will automatically link your token with the bot.`,
      )
      .setColor('#00FFFF');
    message.channel.send(embed);
  }

  async handleToken(searchParams: URLSearchParams, pathName: string) {
    const token = searchParams.get('token');
    const steamid = searchParams.get('steamId');
    const guild = pathName.replace(/\//g, '');

    if (!token || !steamid) {
      console.log('[handleToken] invalid steamid or token');
      return;
    }

    const config = settings.ensure(guild);
    config.auth.token = token;
    config.auth.steamid = steamid;
    settings.set(guild, config);

    const steam = new URL('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/');

    steam.searchParams.append('key', process.env.STEAM_API_KEY!);
    steam.searchParams.append('steamids', steamid);

    const steamAccount = await fetch(steam, {})
      .then((res) => res.json())
      .then((res) => res.response.players[0]);

    const channelId = executing.get(guild);
    if (!channelId) {
      console.log('[handleToken] invalid channelId found');
      return;
    }
    const channel = client.channels.cache.get(channelId) as TextChannel;
    if (!channel) return;

    const steamData = new MessageEmbed()
      .setTitle(steamAccount.personaname)
      .addField('Steam ID', `\`${steamAccount.steamid}\``)
      .setColor('#000000');
    channel.send(steamData);

    const verification = new MessageEmbed()
      .setTitle('Token Verification Complete')
      .setDescription('You may now pair a supported Rust server using the `pair` command')
      .setColor('#33CC33');
    channel.send(verification);
  }
}

export default Login;
