import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class invite implements IBotCommand {

    private readonly _command = "invite"


    help (): string {

        return "The invite to my and the other bot's server";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //invite. INVITE. INVITE!!!!!!!!
            msgObject.delete(0);
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20here%20you%20go.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
            msgObject.channel.send("https://discord.gg/XC4u5E6");
        }
    }
