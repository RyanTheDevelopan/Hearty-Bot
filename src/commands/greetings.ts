import * as Discord from "discord.js";
import { IBotCommand } from '../api';
 

export default class greetings implements IBotCommand {

    private readonly _command = "greetings"


    help (): string {

        return "A useful command";
    }

        isThisCommand(command: string): boolean {
            return command === this._command;
        }
        runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
            
            //Lets us know it all went well! *Insert thumbs up here*
            var greetings = [
                "https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20hello%20there!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png",
                "https://demirramon.com/gen/undertale_text_box.png?text=oh%2C%20hey%20there%2C%20kiddo.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FPXmUvwH.png&charcolor=white&font=sans&asterisk=true&mode=regular.png",
                `https://demirramon.com/gen/undertale_text_box.png?text=Hi%20there%2C%20${msgObject.member.toString()}.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FCCeYe7H.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`,
                "https://demirramon.com/gen/undertale_text_box.png?text=Oh%2C%20hello%20there%2C%20don%27t%20mind%20me%2C%20just%20getting%20back%20to%20Tubba.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSnEs3zB.png&charcolor=white&font=earthbound&asterisk=true&mode=regular.png"
            ];
            if (args[1]) msgObject.channel.send(greetings[Math.floor(Math.random() * greetings.length)]); 
            else msgObject.channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=color%3Dyellow%20Hearty%235202%20color%3Dwhite%20isn%27t%20available%20right%20now.%20Sorry%20for%20the%20inconvenience.&box=undertale&boxcolor=white&charcolor=white&font=determination&asterisk=true&mode=regular.png");
        }
    }