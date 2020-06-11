import { AkairoClient, CommandHandler } from 'discord-akairo';
import dotenv from 'dotenv';

import settings from './database';
import { connectAll } from './companion/connection';

dotenv.config();

class OxygenClient extends AkairoClient {
  commandHandler: CommandHandler;

  constructor() {
    super({}, {});

    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: '>', // or ['?', '!']
    });
    this.commandHandler.loadAll();

    settings.defer.then(() => {
      console.log(`[settings] loaded ${settings.count} configs`);
      connectAll();
    });
  }
}

const client = new OxygenClient();
client.login(process.env.DISCORD_TOKEN);

export default client;
