
bot.on("guildMemberAdd", member => {
    let guild = member.guild;
    let count = guild.memberCount;
    let total = member.guild.channels.get('Voice_Channel_ID');
    let userc = member.guild.channels.get('Voice_Channel_ID');
    let botc = member.guild.channels.get('Voice_Channel_ID');
    total.setName(`Total Member : ${count}`);
    userc.setName(`Total User : ${guild.members.filter(m => !m.user.bot).size}`);
    botc.setName(`Total Bot : ${guild.members.filter(m => m.user.bot).size}`);
});
 
