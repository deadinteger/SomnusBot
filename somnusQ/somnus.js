const discord = require('discord.js');
const client = new discord.Client();

function commandIs(str,arg){
    return msg.content.toLowerCase.startsWith("%" + str);
}

client.on('ready', () =>{
console.log('Somnus has awoken');
});

client.on('message', message =>{
    if(message.content === 'test', message){
        message.reply('Somnus is Fully Operational');
    }
})


client.login('Mjg2NTg0NjkzNzUzNzc0MDgz.C5i2WA.TLXRyrgczINkOdV90_19zVKG_-Y');
