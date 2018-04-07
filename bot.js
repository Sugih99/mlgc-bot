const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('samlekom')
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'samlekom') {
    	message.reply('Komsalam');
  	}
});

// Login token
client.login(process.env.BOT_TOKEN);
