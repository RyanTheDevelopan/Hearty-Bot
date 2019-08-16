import * as Discord from "discord.js";
import { IBotCommand } from '../api';

export default class say implements IBotCommand {

    private readonly _command = "say"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            
        }
    }
