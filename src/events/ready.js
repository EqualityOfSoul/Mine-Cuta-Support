var moment = require('moment-timezone');

module.exports = client => {
  console.log(`${client.user.username} Ready to playing with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  function randStatus() {
    let status = [
      `Say $,help || $,invite || $,support`, `Mention Me @(Mine Cuta Support)`,
      `Discord.io//MineCuta`,
      `Total Server : 800 Server`,
      `In Development `,
      `$,invite untuk invite Mine Cuta ke servermu`,
      `$,support untuk Support Bot`,
      `Created by : Mine Cuta Youtube#9297`,	
      `Pukul ${moment().tz("Asia/Makassar").format('LT')} WITA`,
      `Pukul ${moment().tz("Asia/Jakarta").format('LT')} WIB`,
      `Pukul ${moment().tz("Asia/Jayapura").format('LT')} WIT`];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: 'WATCHING' });
  };
setInterval(randStatus, 9000);
  console.log(`${client.user.username} sukses online!`);
  
  client.setInterval(() => {
  	for(const guild of client.guilds.array()){
	  	const channel = guild.channels.filter(x => x.name === 'bot-spam').first();
	  	if(!channel) continue;
		client.commands.get('cat').getCat(channel, 'Hourly Cat present');
  	}
  }, 3.6e+6);
}
