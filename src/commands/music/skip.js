const { RichEmbed } = require('discord.js');

async function skip (client, msg, args){
	try{
		const queue = client.queue.get(msg.guild.id);
		if(!queue) return msg.channel.send('There is no queue to skip');
		if(!msg.member.voiceChannel) return msg.channel.send('You must be on the voice channel');
		queue.connection.dispatcher.end();
		return msg.channel.send('⏩ Skipping current songs');
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

this.conf = {
	aliases: ['s'],
	cooldown: 1
}

this.help = {
	name: 'skip',
	description: 'skip antrian lagu',
	usage: 'skip'
}

this.run = skip;
