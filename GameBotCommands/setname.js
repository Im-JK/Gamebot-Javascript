const fs = require('fs')
const stats = JSON.parse(fs.readFileSync('stats.json'));
module.exports = {
    name:"setname",
    description:"set the character name",
    execute(setname, args, prefix) {
        const user = setname.author;
        if (!stats[user.id]) {
            //tests if the user hasnt created a character
            setname.channel.send("Please create a character first with `"+prefix+"create`");
        } else {
            stats[user.id].username = args.join(' ');
            fs.writeFileSync('stats.json', JSON.stringify(stats));
        }
    }
}