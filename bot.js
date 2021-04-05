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
        message.reply('komsalam');
      }
});

client.on('message', message => {
        if(message.content == '?phoenix') {
                const embed = new Discord.MessageEmbed()
                .setColor('#3D6C29')
                .setTitle('Careful now..')
                .setImage('https://media.discordapp.net/attachments/294422759172472833/827183156859109406/hengky2.png')
                message.channel.send(embed);
        }
});
// Login token
client.login(process.env.BOT_TOKEN);
