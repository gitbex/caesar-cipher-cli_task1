const chalk = require('chalk');
const fs = require('fs');
const { encode } = require('punycode');
const yargs = require('yargs')


yargs.command({
    command: 'encode',
    describe: 'Encode the text',
    handler: function() {
        console.log('Encoding the text');
    }
});

yargs.command({
    command: 'decode',
    describe: 'Decode the text',
    builder: {
        title: {
            describe: 'Command '
        }
    },
    handler: function(argv) {
        console.log('Decoding the text', argv);
    }
})


// console.log(process.argv);
console.log(yargs.argv);


// if (yargs.ships > 3 && argv.distance < 53.5) {
//     console.log('Plunder more riffiwobbles!');
// } else {
//     console.log('Retreat from the xupptumblers!');
// }