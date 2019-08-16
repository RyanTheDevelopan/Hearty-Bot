import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "goodbye"


    help (): string {

        return "Make me wish you farewell";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //What gets sent. (Oh no, it's short as hell)
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Bye%2C%20see%20you%20soon!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
        }
    }