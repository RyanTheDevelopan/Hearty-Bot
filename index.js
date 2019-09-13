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
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'hey-hey-hey');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.sendFile("https://www.demirramon.com/gen/undertale_text_box.gif?text=Hello%20there%2C%20welcome%20to%20color%3Dpink%20WD%20Heartan%27s%20Bots%20color%3Dwhite%20text%3Djoin%20.%20Hope%20you%20have%20a%20good%20time%20here!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=earthbound&asterisk=true&mode=regular&animate=true.png");
});



client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return; 
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Hello%20there%2C%20welcome%20to%20Unde%20color%3Dred%20text%3Djoin%20Ryan%20color%3Dwhite%20text%3Djoin%20%3A%20color%3Dyellow%20The%20Official%20Server%20color%3Dwhite%20text%3Djoin%20!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=We%20hope%20you%20have%20a%20color%3Dyellow%20good%20time%20color%3Dwhite%20here.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2F9AOq5AR.png&charcolor=white&font=sans&asterisk=true&mode=regular.png");
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'six-feet-under');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return; 
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Hello%20there%2C%20welcome%20to%20the%20color%3Dyellow%20Undertale%20ASK%2FRP%20Server%20color%3Dwhite%20text%3Djoin%20!%20Enjoy%20your%20stay!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'hello-and-goodbye');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return; 
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Hello%20there%2C%20welcome%20to%20the%20color%3Dyellow%20Undertale%20ASK%2FRP%20Server%20color%3Dwhite%20text%3Djoin%20!%20Enjoy%20your%20stay!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'joins-leaves');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return; 
    // Send the message, mentioning the member
    channel.send(`${member}`);
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Hello%20there%2C%20welcome%20to%20color%3Dred%20Game%20City%20color%3Dwhite%20text%3Djoin%20!%20Have%20a%20nice%20time%20here!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
});



client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'goodbye')
    if (!channel) return;
    channel.send(`${member}`);
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Goodbye%20fellow%20member.%20I%20wish%20you%20good%20luck%20on%20the%20surface.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fn1b2i5u.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
});


client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'goodbye-underground')
    if (!channel) return;
    channel.send(`${member}`);
    channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=Goodbye%20fellow%20member.%20I%20wish%20you%20good%20luck%20on%20the%20surface.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fn1b2i5u.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`);
});

client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'hello-and-goodbye')
    if (!channel) return;
    channel.send(`${member}`);
    channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=Goodbye%20fellow%20member.%20I%20wish%20you%20good%20luck%20on%20the%20surface.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fn1b2i5u.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`);
});
 
client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.name === 'joins-leaves')
    if (!channel) return;
    channel.send(`${member}`);
    channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=Goodbye%20fellow%20member.%20I%20hope%20you%20had%20a%20nice%20time%20here.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fn1b2i5u.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQixzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBT3ZDLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEVBQUUsc0VBQXNFLENBQUMsQ0FBQztBQUs1SSxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQ0FBaUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDO0FBQzNGLENBQUMsQ0FBQyxDQUFDO0FBS0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsRUFBRTtJQUVqQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDO0lBRTVFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTztJQUVyQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxQixPQUFPLENBQUMsUUFBUSxDQUFDLDJYQUEyWCxDQUFDLENBQUM7QUFDbFosQ0FBQyxDQUFDLENBQUM7QUFJSCxNQUFNLENB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