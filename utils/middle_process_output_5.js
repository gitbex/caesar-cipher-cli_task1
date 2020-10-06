const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs').argv;


const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;


const middleProcessOutput5 = ( callback ) => {
    
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const writerStreamCoded = fs.createWriteStream(pathOutput)
writerStreamCoded.on('error', err => process.stderr.write(err.message));
   
    
    
    if( typeof passedNumber === 'number') { 
                 

            process.stdin.on('data', (data) => {
                let result = callback(data.toString(), passedNumber )
                  writerStreamCoded.write(result,'UTF8')
              })
       
    }  
}
module.exports = middleProcessOutput5;