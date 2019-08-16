"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("580142964077101076", "lB5TGJ2lpz4_uaxNQ0CymanISEV8SqZ7Zu0dSBRKAHoB3oSpeUP8dpLPfUoYKnG4iHHi");
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log("Ready for anything!");
    client.user.setActivity(`UR!Hearty | UndeRyan Bot | In ${client.guilds.size} servers`);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity(`with friends`);
        client.user.setStatus("dnd");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity('a playthrough of Undertale', { type: 'WATCHING' });
        client.user.setStatus("idle");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity(`Mysterytale Online | As Ralsei`);
        client.user.setStatus("online");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity('Deltarune', { type: 'STREAMING' });
        client.user.setStatus("dnd");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity('the OST!', { type: 'LISTENING' });
        client.user.setStatus("idle");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity('to bedtime music', { type: 'LISTENING' });
        client.user.setStatus("dnd");
    }, 1 * 1.8e+6);
});
client.on("presenceUpdate", function () {
    var interval = setInterval(function () {
        client.user.setActivity(`UR!Hearty | UndeRyan Bot | In ${client.guilds.size} servers`);
        client.user.setStatus("online");
    }, 1 * 1.8e+6);
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'hey-hey-hey');
    if (!channel)
        return;
    channel.send(`${member}
    https://cdn.discordapp.com/attachments/532701026042511362/578701363932954625/undertale_text_box.gif`);
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel)
        return;
    channel.send(`${member}
    https://cdn.discordapp.com/attachments/532701026042511362/578701363932954625/undertale_text_box.gif`);
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'general-chatter');
    if (!channel)
        return;
    channel.sendMessage(`${member}
    https://cdn.discordapp.com/attachments/532701026042511362/578701363932954625/undertale_text_box.gif`);
});
client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'goodbye');
    if (!channel)
        return;
    channel.sendMessage(`${member}
    https://cdn.discordapp.com/attachments/532701026042511362/578708320693518341/undertale_text_box.gif`);
});
client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'general-chatter');
    if (!channel)
        return;
    channel.sendMessage(`${member}
    https://cdn.discordapp.com/attachments/532701026042511362/578708320693518341/undertale_text_box.gif`);
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config.commands || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
client.login(process.env.DISCORD_TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQixzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBT3ZDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztBQUs1SSxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN4QixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7SUFDeEIsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFFO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMs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