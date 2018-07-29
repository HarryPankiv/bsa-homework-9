module.exports = function reqTypes(message) {
    const commands = [
        [/@bot What is the weather/, 'weather'],        
        [/@bot Convert/, 'currency'],
        [/@bot Show quote/, 'quote'],
        [/@bot Save/, 'note'],
        [/@bot Show/, 'note'],
        [/@bot Delete/, 'note'],
        [/^@bot +.+\? [^A-Za-z0-9]+/, 'question'],
        [/@bot /, 'random']
    ];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0].test(message)) {
            return commands[i][1];
        }
    }
}