import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class testCommand implements IBotCommand {

    private readonly _command = "testCommand"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Congrats%2C%20I%20work!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fh5JTumC.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
        }
    }
