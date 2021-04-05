const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
        setInterval(() => {
          targetGuild = client.guilds.cache.get('294422759172472833')
          if(targetGuild) {
              client.user.setPresence({ game: { name: targetGuild.memberCount + ' people in this server, beware', type: 'WATCHING' }, status: 'online'  })
                    .then(console.log)
                    .catch(console.error);
          }
    }, 1000 * 60 * 5);

});

client.on('message', message => {
    if (message.content === 'samlekom') {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        channel.send(exampleEmbed);
      }
});

client.on('message', msg => {
        if(msg.content == '?phoenix') {
                const embed = new Discord.MessageEmbed()
                .setColor('#3D6C29')
                .setTitle('Careful now..')
                .setImage('https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png')
                msg.channel.send(embed);
        }
});
// Login token
client.login(process.env.BOT_TOKEN);
