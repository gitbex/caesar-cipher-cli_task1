const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs').argv;


const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;


const middleProcessInput5 = ( callback ) => {
    
const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const readStreamPlain = fs.createReadStream(pathInput);
readStreamPlain.on('error', err => process.stderr.write(chalk.inverse.red(err.message)));
    
    
    if( typeof passedNumber === 'number') { 
                 
        readStreamPlain.on('data', function(chunk) { 

            const readResult = chunk.toString();
               const codedResult = callback(readResult, passedNumber)
       
               process.stdout.write('\n' + 'This is output: ' + codedResult);

             })      
    }  
}
module.exports = middleProcessInput5;