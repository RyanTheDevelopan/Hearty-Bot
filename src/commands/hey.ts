import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class hey implements IBotCommand {

    private readonly _command = "hey"


    help (): string {

        return "Make me greet you";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/575372279249109001/579388085939470338/undertale_text_box.gif");
        }
    }