const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({
        status: "online", 
        game: {
            name: "Point Blank",  
            type: "PLAYING"
        }
    });
});

client.on('message', message => {
    if (message.content === 'samlekom') {
    	message.reply('komsalam');
  	}
});

// Login token
client.login(process.env.BOT_TOKEN);
