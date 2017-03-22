const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () =>{
console.log('Somnus has awoken');
});

client.on('message', message =>{
    if(message.content === '!Test'){
        message.reply('Somnus is Fully Operational' + ' ' + message.author.username);
    }
})


client.login('Mjg2NTg0NjkzNzUzNzc0MDgz.C5i2WA.TLXRyrgczINkOdV90_19zVKG_-Y');
