const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('Logged in');
    client.user.setPresence({
        status: 'online',  //You can show online, idle....
        activity: {
            name: '?meme',  //The message shown
            type: 'PLAYING' //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.on('message', message => {
    if (message.content === '?meme') {
    message.channel.send('**Available insider meme command:**\n?phoenix');
      }
});

client.on('message', msg => {
        if(msg.content == '?phoenix') {
        msg.channel.send("Careful now..", {files: ["https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png"]});
        }
});
// Login token
client.login(process.env.BOT_TOKEN);
