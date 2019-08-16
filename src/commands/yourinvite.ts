import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class botlink implements IBotCommand {

    private readonly _command = "botlink"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20here%20you%20go.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
            msgObject.channel.send("https://discordapp.com/api/oauth2/authorize?client_id=578319689764306945&permissions=8&scope=bot");
        }
    }
