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
  if (mesage.content === '?secret') {
    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Phoenix Cosplay')
	//.setURL('https://discord.js.org/')
	//.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('JOKES OVAH, YOUR DAD')
	.setThumbnail('https://cdn.discordapp.com/attachments/451387123086393345/775336937749217280/MLGC2.gif')
	.addFields(
		{ name: 'Cosplayer', value: 'Hengky' },
		/*{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)*/
	.setImage('https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png')
	.setTimestamp()
	.setFooter('Made by GriN#8590', 'https://cdn.discordapp.com/attachments/428190130390695936/828960606841339915/MLGC_Comunnity.jpg');
    mesage.channel.send(embed);
  }
});
// Login token
client.login(process.env.BOT_TOKEN);
