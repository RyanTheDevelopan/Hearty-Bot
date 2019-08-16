import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class diceroll implements IBotCommand {

    private readonly _command = "diceroll"


    help (): string {

        return "Roll a die!";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Ssh, Hearty's reading.
            var roll = Math.floor(Math.random() * 6) + 1;
            msgObject.reply(`https://demirramon.com/gen/undertale_box_stack.png?box1=text%3DCongrats%252C%2520you%2520rolled%2520a...%250A...%250A...%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FQYJgxpG.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&box2=text%3D...%250A...%250A...%3Bbox%3Dundertale%3Bboxcolor%3Dwhite%3Bcharacter%3Dcustom%3Burl%3Dhttps%253A%252F%252Fi.imgur.com%252FI6lrWjc.png%3Bcharcolor%3Dwhite%3Bfont%3Ddetermination%3Basterisk%3Dtrue%3Bmode%3Dregular%26amp%3Bsmall%3Dtrue%26amp%3Bborder%3Dtrue&columns=1.png`);
            msgObject.channel.send(`..${roll}!`);
        }
    }
