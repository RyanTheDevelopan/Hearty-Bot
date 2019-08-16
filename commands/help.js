"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "A useful command";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
            .setColor(0x1d76a7);
        msgObject.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQWdDbEMsQ0FBQztJQTdCRCxJQUFJO1FBRUEsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQyxRQUFRLENBQUMsVUFBVSxFQUFFLHVCQUF1QixDQUFDO2FBQzdDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsc0NBQXNDLENBQUM7YUFDOUQsUUFBUSxDQUFDLGVBQWUsRUFBRSwwSEFBMEgsQ0FBQzthQUNySixRQUFRLENBQUMsYUFBYSxFQUFFLDRCQUE0QixDQUFDO2FBQ3JELFFBQVEsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7YUFDdkMsUUFBUSxDQUFDLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQzthQUN0RCxRQUFRLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQzthQUN0QyxRQUFRLENBQUMsVUFBVSxFQUFFLDBCQUEwQixDQUFDO2FBQ2hELFFBQVEsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7YUFDbkQsUUFBUSxDQUFDLDJCQUEyQixDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDcEMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsaUVBQWlFLENBQUM7YUFDNUUsUUFBUSxDQUFDLDJTQUEyUyxDQUFDO2FBQ3JULFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFsQ0wsdUJBa0NLIn0=