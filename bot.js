const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot is online');

    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'with ducks',
            type: 'PLAYING',
            url: 'https://discord.com'
        }
    });
});

client.on('message', message => {
    if (message.content === 'samlekom') {
    	message.reply('komsalam anjaymabar');
  	}
});

// Login token
client.login(process.env.BOT_TOKEN);
