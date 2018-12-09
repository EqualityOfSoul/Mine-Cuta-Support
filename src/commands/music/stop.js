const { RichEmbed } = require('discord.js');

async function stop (client, msg, args){
	try{
		const queue = client.queue.get(msg.guild.id);
		if(!queue) return msg.channel.send('Tidak dapat berhenti karena antrian kosong');
		if(!msg.member.voiceChannel) return msg.channel.send('Kamu harus masuk voice channel untuk menghentikan antrian');
		queue.songs = [];
		queue.connection.dispatcher.end();
		return msg.channel.send('Leave Voice Channel');
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

this.conf = {
	aliases: ['dc, leave'],
	cooldown: 1
}

this.help = {
	name: 'leave',
	description: 'Leave Voice Channel',
	usage: 'leave'
}

this.run = stop;
