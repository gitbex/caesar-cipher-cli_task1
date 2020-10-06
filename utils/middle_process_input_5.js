const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs').argv;


const encode = require('./coder');
const decode = require('./decoder')
const path = require('path')
// const procCoded = require('./streamFile');

const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;


const { error } = require('console');



const middleProcessInput5 = ( callback ) => {
    
    const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const readStreamPlain = fs.createReadStream(pathInput);
// const writerStreamCoded = fs.createWriteStream(pathOutput)
// writerStreamCoded.on('error', err => process.stderr.write(err.message));
readStreamPlain.on('error', err => process.stderr.write(err.message));
    
    
    
    if( typeof passedNumber === 'number') { 
                 
        readStreamPlain.on('data', function(chunk) { 

            const readResult = chunk.toString();
               const codedResult = callback(readResult, passedNumber)
       
               process.stdout.write('\n' + 'this is output: ' + codedResult);

             })
       
    }  
}
module.exports = middleProcessInput5;