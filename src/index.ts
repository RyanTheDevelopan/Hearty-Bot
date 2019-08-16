require('dotenv').config(); 
import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from './api';
import { MessageChannel } from "worker_threads";
import * as ytdl from "ytdl-core";
import { url } from "inspector";


const client: Discord.Client = new Discord.Client();
const mentionHook = new Discord.WebhookClient("580142964077101076", "lB5TGJ2lpz4_uaxNQ0CymanISEV8SqZ7Zu0dSBRKAHoB3oSpeUP8dpLPfUoYKnG4iHHi"); 




let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

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
    channel.sendFile("https://demirramon.com/gen/undertale_text_box.png?text=Hello%20there%2C%20welcome%20to%20color%3Dblue%20IT%20color%3Dred%20Ryan%27s%20color%3Dyellow%20Bots%20color%3Dwhite%20text%3Djoin%20.%20Hope%20you%20have%20a%20nice%20time%20here!&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2FSEwdTjs.png&charcolor=white&font=determination&asterisk=true&mode=regular.png");
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
    const channel = member.guild.channels.find(ch => ch.name === 'joins-leaves')
    if (!channel) return;
    channel.send(`${member}`);
    channel.sendFile(`https://demirramon.com/gen/undertale_text_box.png?text=Goodbye%20fellow%20member.%20I%20hope%20you%20had%20a%20nice%20time%20here.&box=undertale&boxcolor=white&character=custom&url=https%3A%2F%2Fi.imgur.com%2Fn1b2i5u.png&charcolor=white&font=determination&asterisk=true&mode=regular.png`);
});





client.on("message", msg => {
    if (msg.author.bot) { return; }

    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg); 
})


async function handleCommand(msg: Discord.Message){

    //Split the string into the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);
    
    //Loop through all of our loaded commands
    for(const commandClass of commands){
        
        //Attempt to execute code but ready in case of a possible error
        try{
            
            //Check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){
                
                //Go to the next iterarion of the loop if this isn't the correct command
                continue;
            }
            
            //Pause esecution whilst we run the command's code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){

            //If there is an error, then log the exception
            console.log(exception);
        }
    }

}

function loadCommands(commandsPath: string) {
    //Exit if there are no commands
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) {return;}

    //Loop through all of the commands in our config file
    for(const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(process.env.DISCORD_TOKEN);
