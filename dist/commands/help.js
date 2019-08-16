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
        msgObject.delete(0);
        var embed = new Discord.RichEmbed()
            .addField("help", "Displays this message")
            .addField("invite", "The invite to the Ryan's Bots server")
            .addField("hey", "Makes me greet you")
            .addField("goodbye", "Makes me wish you farewell")
            .addField("8ball", "Use the 8ball.")
            .addField("diceroll", "Roll a die")
            .addField("kick", "Kick a fellow bad member")
            .addField("ban", "Ban a fellow terrible member")
            .setTitle("Hearty's Command List")
            .setAuthor(`${msgObject.author.username}`)
            .setThumbnail(`${msgObject.author.avatarURL}`)
            .setFooter("Thanks to Demirramon for his great UT/DR/AU! Text Box Generator.")
            .setImage("https://cdn.discordapp.com/attachments/532701026042511362/578693104270311425/undertale_text_box.png")
            .setColor(0x1d76a7);
        msgObject.channel.send(embed);
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQWdDbEMsQ0FBQztJQTdCRCxJQUFJO1FBRUEsT0FBTyxrQkFBa0IsQ0FBQztJQUM5QixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2FBQ2xDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUM7YUFDekMsUUFBUSxDQUFDLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQzthQUMxRCxRQUFRLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDO2FBQ3JDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsNEJBQTRCLENBQUM7YUFDakQsUUFBUSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQzthQUNuQyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQzthQUNsQyxRQUFRLENBQUMsTUFBTSxFQUFFLDBCQUEwQixDQUFDO2FBQzVDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsOEJBQThCLENBQUM7YUFDL0MsUUFBUSxDQUFDLHVCQUF1QixDQUFDO2FBQ2pDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekMsWUFBWSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsa0VBQWtFLENBQUM7YUFDN0UsUUFBUSxDQUFDLHFHQUFxRyxDQUFDO2FBQy9HLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFsQ0wsdUJBa0NLIn0=