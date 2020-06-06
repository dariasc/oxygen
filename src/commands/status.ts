import Discord from 'discord.js';
import Command from '../struct/command';

const positive = ':white_check_mark:';
const negative = ':no_entry_sign:';

export default class Status implements Command {
  name = 'status';

  async run(client, msg) {
    const settings = client.db.settings.get(msg.guild.id);

    const authToken = !settings.authToken ? negative : positive;
    const playerToken = !settings.playerToken ? negative : positive;

    const embed = new Discord.MessageEmbed()
      .setTitle('Status')
      .addField('Authentication Token', authToken)
      .addField('Player Token', playerToken);

    msg.channel.send(embed);
  }
}
