import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class rouxlsinvite implements IBotCommand {

    private readonly _command = "rouxls'sinvite"


    help (): string {

        return "The invite to my and the other bot's server";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //invite. INVITE. INVITE!!!!!!!!
            msgObject.delete(0);
            msgObject.channel.send(`**INVITE LINK**:
https://discord.gg/XC4u5E6`);
        }
    }
