const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
	message.channel.send("Bacod!")
}

exports.conf = {
    aliases: ['hai'],
    cooldown: "5"
}

exports.help = {
    name: "hai",
    description: "Bercanda... 😅",
    usage: "hai"
}