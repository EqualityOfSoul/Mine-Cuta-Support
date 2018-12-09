const { RichEmbed: SharifEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new SharifEmbed()
      .setColor("RANDOM")
      .setAuthor("Support Bot Mine Cuta Support")
      .setDescription("**[Klik Disini](https://discord.gg/cRB4xN4)**")




       .setFooter(`Requested By : ${message.author.username}`);
      
     message.channel.send(embed);
     
}

exports.conf = {
  aliases: ['supportbot'],
  cooldown: "5"

}

exports.help = {
  name: "support",
  description: 'Untuk Support Bot ~Mine Cuta Support~',
  usage: 'support'

}
