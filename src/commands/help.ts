import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class help implements IBotCommand {

    private readonly _command = "help"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Embed magic!
            var embed = new Discord.RichEmbed()
            .addField("**help**", "Displays this message")
            .addField("**invite**", "The invite to the Ryan's Bots server")
            .addField("**greetings**", `Self-explanatory, even though it's recommended to add something like "Hey Hey Hey" after the command name (with a space)`)
            .addField("**goodbye**", "Makes me wish you farewell")
            .addField("**8ball**", "Use the 8ball.")
            .addField("**botinfo**", "Info about this bot account")
            .addField("**diceroll**", "Roll a die")
            .addField("**kick**", "Kick a fellow bad member")
            .addField("**ban**", "Ban a fellow terrible member")
            .setTitle("**Hearty's Command List**")
            .setAuthor(`${msgObject.author.tag}`)
            .setThumbnail(`${msgObject.author.avatarURL}`)
            .setFooter("Thanks to Demirramon for his great UT/DR/AU Text Box Generator.")
            .setImage("https://demirramon.com/gen/undertale_text_box.png?text=Welcome%20to%20the%20color%3Dyellow%20Command%20List%20color%3Dwhite%20text%3Djoin%20.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FQYJgxpG.png&charcolor=white&font=determination&asterisk=true&mode=regular.png")
            .setColor(0x1d76a7)
            msgObject.channel.send(embed);
        }
    }
