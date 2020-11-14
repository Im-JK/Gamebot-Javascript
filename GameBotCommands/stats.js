const fs = require('fs')
const stats = JSON.parse(fs.readFileSync('stats.json'));
const { MessageEmbed } = require("discord.js");
module.exports = {
    name:"stats",
    description:"gets the stats of the user",
    execute(statistics, args, prefix) {
        const user = statistics.mentions.users.first() || statistics.author;
        if (!stats[user.id]) {
            if (user != statistics.author) {
                statistics.channel.send("That player hasn't created a character");
            } else {
                statistics.channel.send("Please create a character first with `"+prefix+"create`");
            }
        } else {
            //Displays users stats
            statistics.channel.send(new MessageEmbed().setTitle("**"+user.username+"'s Character**").setDescription("Name : "+stats[user.id].username+"\nAttack Damage : "+stats[user.id].attackdmg+"\nMax Health : "+stats[user.id].maxhealth+"\nCurrent Health : "+stats[user.id].health+"\nCoins : "+stats[user.id].coins).setColor("BLUE"));
        }
    }
}