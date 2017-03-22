const discord = require('discord.js');
const bot = new discord.Client();

const prefix = "[]";

bot.on('ready', () => {
    console.log('Somnus has awoken');
});

bot.on('message', message => {
    
    if(!message.content.startsWith(prefix)) {
        
        if(message.content.includes("cut")){
            if(message.content.includes("myself")){
                message.delete(100);
               message.channel.fetchMessages({limit :3}).then(messages => message.channel.bulkDelete(messages));
                message.channel.sendMessage( " not recognized as a command!").then((message => message.delete(500)));
            }
    }

    }; // Makes sure the bot doesn't react to irrelavent stuff
    if (message.author.bot) return; // Make sure the bot doesn't talk to itself like a loon.
    
   
    if(message.content.startsWith(prefix + "test")){ 
        message.reply("Somnus is Fully Operational."); //To see if it is on.
    }     
});


bot.login('Mjg2NTg0NjkzNzUzNzc0MDgz.C5i2WA.TLXRyrgczINkOdV90_19zVKG_-Y');