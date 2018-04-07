const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!')
    bot.user.setGame('samlekom');
});

client.on('message', message => {
    if (message.content === 'samlekom') {
    	message.reply('Komsalam');
  	}
});

// Login token
client.login(process.env.BOT_TOKEN);
