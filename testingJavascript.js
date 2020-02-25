const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what do you think of node.js?', (answer) =>
{
    console.log(`think about your situation here: ${answer}`);
    rl.close();
});

