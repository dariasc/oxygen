import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

import settings from '../database';

class Config extends Command {
  constructor() {
    super('config', {
      aliases: ['config', 'conf'],
      channel: 'guild',
    });
  }

  exec(message: Message) {
    const config = settings.ensure(message.guild!.id);

    const json = JSON.stringify(config, null, 2);
    message.channel.send(`\`\`\`javascript\n ${json} \`\`\``);
  }
}

export default Config;
