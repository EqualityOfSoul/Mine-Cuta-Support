const { RichEmbed, version } = require('discord.js');

function statsBuilder (client, msg, args){
	try{
		const uptime = parseDur(client.uptime);
		const embed = new RichEmbed()
		.setColor('BROWN')
		.setThumbnail(client.user.displayAvatarURL)
		.setTitle('My statistic')
		.setDescription(`\`\`\`asciidoc
Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
Uptime     :: ${uptime}
WS Ping    :: ${client.ping.toFixed(2)}ms
Users      :: ${client.users.size.toLocaleString()}
Servers    :: ${client.guilds.size.toLocaleString()}
Channels   :: ${client.channels.size.toLocaleString()}
Discord.js :: v${version}
Node       :: ${process.version}\`\`\``);
		return msg.channel.send(embed);
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}

function parseDur (ms){
	let seconds = ms / 1000;
	let days = parseInt(seconds / 86400);
	seconds = seconds % 86400;
	let hours = parseInt(seconds / 3600);
	seconds = seconds % 3600;
	let minutes = parseInt(seconds / 60);
	seconds = parseInt(seconds % 60);
	let fin = [];
	if(days) fin.push(`${days}d`);
	if(hours) fin.push(`${hours}h`);
	if(minutes) fin.push(`${minutes}m`);
	fin.push(`${seconds}s`);
	return fin.join(' ');
}
this.conf = {
	aliases: [],
	cooldown: 0
}

this.help = {
	name: 'stats',
	description: 'Menunjukkan statistik bot',
	usage: 'stats'
}

this.run = statsBuilder;