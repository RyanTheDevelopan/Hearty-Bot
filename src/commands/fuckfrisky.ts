import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class fuckfrisky implements IBotCommand {

    private readonly _command = "fuckfrisky"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Fuck Frisky. FRISKY CAN OWO HER SELF AND THROWO HERSELF OWOUT A WINDOWO. Fuckin' furries.
            msgObject.delete(0);
            msgObject.channel.sendFile(`@everyone
https://cdn.discordapp.com/attachments/579108937320759314/579120916206714890/undertale_box_stack.png`);
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579123478062694431/2.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579125553248993295/3.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579132543677497404/4.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579136990906286104/5.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579140853658943497/6.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579142456835309569/7.png");
            msgObject.channel.sendFile("https://cdn.discordapp.com/attachments/579108937320759314/579143882210803732/Friskys_like_you_SHOULD_BE_BURNING_IN_HELL.png");
        }
    }
