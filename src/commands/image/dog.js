const Discord = require("discord.js");
const superagent = require("snekfetch");

exports.run = async (client, message, args) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    message.delete()
    let dogembed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("🐕 Dog")
    .setImage(body.url);

    message.channel.send(dogembed);
}

exports.conf = {
    aliases: ['🐕'],
    cooldown: ""
}

exports.help = {
    name: "dog",
    description: "Menampilkan Dog secara acak",
    usage: "dog"
}
