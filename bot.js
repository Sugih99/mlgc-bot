const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('Logged in');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activity: {
            name: "?meme",  //The message shown
            type: "STREAMING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.on('message', message => {
    if (message.content === '?meme') {
    message.channel.send('**Available insider meme command:**\n**?phoenix** - Cosplay phoenix\n**?revive** - Cosplay sage\n**?kaori** - Cosplay mayat mokad');
      }
});

client.on('message', msg => {
        if(msg.content == '?phoenix') {
        msg.channel.send("Careful now..", {files: ["https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png"]});
        }
        if(msg.content == '?revive') {
        msg.channel.send("YOUR DUDI IS NOT OVAH", {files: ["https://media.discordapp.net/attachments/294422759172472833/827175958737846312/wimllykung.png"]});
        }
        if(msg.content == '?kaori') {
        msg.channel.send("kyaaa booedi-kung >////<", {files: ["https://media.discordapp.net/attachments/294422759172472833/524440748863651860/IMG_20181218_111727.jpg"]});
        }    
});

client.on('message', mesage => {
  // If the message is "how to embed"
  if (mesage.content === '!embed') {
    const embed = new MessageEmbed()
      .setTitle('A slick little embed')
      .setColor(0xff0000)
      .setDescription('Hello, this is a slick embed!');
    mesage.channel.send(embed);
  }
});
// Login token
client.login(process.env.BOT_TOKEN);
