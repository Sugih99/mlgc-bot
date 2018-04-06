const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'samlekom') {
    	message.reply('Komsalam mamanx');
  	}
client.on('message', message => {
    if (message.content === 'lord') {
    	message.reply('Praise the @Lord !');
  	}
});

// Status
bot.user.setGame('Fadal.3gp')
// Login token
client.login(process.env.BOT_TOKEN);
