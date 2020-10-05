const Eris = require('eris')
const settings = require('./botsettings.json')
const bot = new Eris(settings.token)

bot.on('ready', () => {
    console.log('ready')
})

bot.on('messageCreate', msg => {
    if(msg.content === '!ping'){
        bot.createMessage(msg.channel.id, 'Pog')
    } else if(msg.content === '!pong'){
        bot.createMessage(msg.channel.id, 'Pogger')
    }
})

bot.connect();