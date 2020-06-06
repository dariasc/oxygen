import { Client, Message, MessageEmbed} from 'discord.js';
import Command from '../struct/command';
import settings from '../database';

const positive = ':white_check_mark:';
const negative = ':no_entry_sign:';

export default class Status implements Command {
  name = 'status';

  async run(client: Client, msg: Message) {
    if (!msg.guild) return;

    const config = settings.get(msg.guild.id);

    const authToken = !config.authToken ? negative : positive;
    const playerToken = !config.playerToken ? negative : positive;

    const embed = new MessageEmbed()
      .setTitle('Status')
      .addField('Authentication Token', authToken)
      .addField('Player Token', playerToken);

    msg.channel.send(embed);
  }
}
