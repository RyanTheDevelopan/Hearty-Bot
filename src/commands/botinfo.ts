import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class botinfo implements IBotCommand {

    private readonly _command = "botinfo"


    help (): string {

        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var embed = new Discord.RichEmbed()
            .setTitle(`**Made by *IdioT Ryan#0138***`)
    .addField(`**Amount Of Servers in**`, `${client.guilds.size}`)
    .addField(`**Bot Created**`, `May 15, 2019`)
    .addField("**Language Used**", "TypeScript")
    .addField("**Library Used**", "Discord.js")
    .addField(`**Bot ID**`, `578319689764306945`) 
    .addField(`**Status:**`, `Online`) 
    .setThumbnail(`https://cdn.discordapp.com/avatars/578319689764306945/a76e69dedc09426a8c85bb412180b653.png`)     
    .setColor(0x4a44a5)
    msgObject.channel.send(embed);
        }
    }
