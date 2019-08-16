"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class botinfo {
    constructor() {
        this._command = "botinfo";
    }
    help() {
        return "This command is absolutely useless. Why did Ryan The Foxan#0138 make this?";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var embed = new Discord.RichEmbed()
            .setTitle(`**Made by *IdioT Ryan#0138***`)
            .addField(`**Amount Of Servers in**`, `${client.guilds.size}`)
            .addField(`**Bot Created**`, `May 15, 2019`)
            .addField("**Language Used**", "TypeScript")
            .addField("**Library Used**", "Discord.js")
            .addField(`**Bot ID**`, `578319689764306945`)
            .addField(`**Status:**`, `Online`)
            .setThumbnail(`https://cdn.discordapp.com/avatars/578319689764306945/a76e69dedc09426a8c85bb412180b653.png`)
            .setColor(0x4a44a5);
        msgObject.channel.send(embed);
    }
}
exports.default = botinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90aW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9ib3RpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLE9BQU87SUFBNUI7UUFFcUIsYUFBUSxHQUFHLFNBQVMsQ0FBQTtJQTBCckMsQ0FBQztJQXZCRCxJQUFJO1FBRUEsT0FBTyw0RUFBNEUsQ0FBQztJQUN4RixDQUFDO0lBRUcsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTthQUNsQyxRQUFRLENBQUMsK0JBQStCLENBQUM7YUFDakQsUUFBUSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUM3RCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO2FBQzNDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7YUFDM0MsUUFBUSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQzthQUMxQyxRQUFRLENBQUMsWUFBWSxFQUFFLG9CQUFvQixDQUFDO2FBQzVDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ2pDLFlBQVksQ0FBQyw0RkFBNEYsQ0FBQzthQUMxRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBNUJMLDBCQTRCSyJ9