const fs = require('fs')
const stats = JSON.parse(fs.readFileSync('stats.json'));
module.exports = {
    name:"create",
    description:"create a character",
    execute(create, args, prefix) {
        const user = create.author;
        if (!stats[user.id]) {
            stats[user.id] = {
                //setting up base stats for characters
                username : user.username,
                attackdmg : 2,
                health : 10,
                maxhealth : 10,
                coins : 10,
            }
            fs.writeFileSync('stats.json', JSON.stringify(stats));
            create.channel.send(`${user} has successfully created their character!`);
        } else {
            create.channel.send(`You have already made a character, ${stats[user.id].name}`);
        }
    }
}