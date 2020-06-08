import { Message, Client } from 'discord.js';

export default interface Command {
  name: string;
  run(client: Client, msg: Message, args: string[]): Promise<void>;
}
