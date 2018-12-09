const { RichEmbed: SharifEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new SharifEmbed()
      .setColor("RANDOM")
      .setAuthor("Ingin Menginvite Mine Cuta Support Ke Server Mu?")
      .setDescription("**[Klik Disini](https://discordapp.com/api/oauth2/authorize?client_id=513174081051557899&permissions=8&scope=bot)**")
      .setAuthor("Support Bot Mine Cuta Support")
      .setDescription("**[Klik Disini untuk Support Bot](https://discord.gg/nbVNMHb**")
      .setFooter(`Requested By : ${message.author.username}`);
      
     message.channel.send(embed);
     
}

exports.conf = {
  aliases: ['invitebot'],
  cooldown: "5"

}

exports.help = {
  name: "invite",
  description: 'Untuk Menginvite ~~Mine Cuta Support~~ Ke Server Mu',
  usage: 'invite'

}
