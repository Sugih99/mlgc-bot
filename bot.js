const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log('Logged in');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activity: {
            name: "?meme",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

client.on('message', message => {
    if (message.content === '?meme') {
    message.channel.send('**Available insider meme command:**\n**?phoenix** - Cosplay phoenix\n**?revive** - Cosplay sage\n**?kaori** - Cosplay mayat mokad\n**?brim** - Cosplay jendral Brimstone\n**?jujutsu** - Itadori Yuji cosplay');
      }
});

client.on('message', msg => {
        if(msg.content == '?legacy1') {
        msg.channel.send("Careful now..", {files: ["https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png"]});
        }
        if(msg.content == '?legacy2') {
        msg.channel.send("YOUR DUDI IS NOT OVAH", {files: ["https://media.discordapp.net/attachments/294422759172472833/827175958737846312/wimllykung.png"]});
        }
        if(msg.content == '?legacy3') {
        msg.channel.send("kyaaa booedi-kung >////<", {files: ["https://media.discordapp.net/attachments/294422759172472833/524440748863651860/IMG_20181218_111727.jpg"]});
        }    
});

client.on('message', mesage => {
  if (mesage.content === '?phoenix') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Phoenix Cosplay')
	.setDescription('JOKES OVAH, YOUR DAD')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addField('Cosplayer', 'Hengky', true)
	.setImage('https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
  if (mesage.content === '?revive') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Sage Cosplay')
	.setDescription('YOU WILL NOT KILL MY ALAY')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addField('Cosplayer', 'Willy', true)
	.setImage('https://media.discordapp.net/attachments/294422759172472833/827175958737846312/wimllykung.png')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
  if (mesage.content === '?kaori') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Kaori Cosplay')
	.setDescription('kyaaa booedi-kung >////<')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addField('Cosplayer', 'Tito', true)
	.setImage('https://media.discordapp.net/attachments/294422759172472833/524440748863651860/IMG_20181218_111727.jpg')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
  if (mesage.content === '?brim') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Brimstone Cosplay')
	.setDescription('they think ihwan londog')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addField('Cosplayer', 'Arya', true)
	.setImage('https://cdn.discordapp.com/attachments/294456349868425217/829273865736945704/londog.jpg')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
  if (mesage.content === '?jujutsu') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Yuji Itadori Cosplay')
	.setDescription('Jujutsu Kaisen')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addField('Cosplayer', 'Dimas', true)
	.setImage('https://cdn.discordapp.com/attachments/294456349868425217/829306148682465390/itadori.jpg')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
});
// Login token
client.login(process.env.BOT_TOKEN);
