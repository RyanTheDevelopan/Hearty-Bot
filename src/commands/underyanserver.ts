import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class underyanserver implements IBotCommand {

    private readonly _command = "underyanserver"


    help (): string {

        return "The invite link to the UndeRyan server.";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            msgObject.delete(0);
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/532701026042511362/582253044427915264/1.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/532701026042511362/582253262665809930/2.gif");
            msgObject.channel.send("https://discord.gg/Csmp2EH");
        }
    }
