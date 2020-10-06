const chalk = require('chalk');
const yargs = require('yargs').argv;

const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;

const middleProcessNull = ( callback ) => {
    
    
    if( typeof passedNumber === 'number') {
        process.stdin.on('data', (data) => {
          let result = callback(data.toString(), passedNumber )
            process.stdout.write('\n' + 'this is output: ' + result);
            
        })
    }
}
module.exports = middleProcessNull;