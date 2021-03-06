const fs = require('fs');
const yargs = require('yargs').argv;
const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const readStreamPlain = fs.createReadStream(pathInput);
const writerStreamCoded = fs.createWriteStream(pathOutput, {flags:'a'})
writerStreamCoded.on('error', err => process.stderr.write(chalk.inverse.red(err.message)));
readStreamPlain.on('error', err => process.stderr.write(chalk.inverse.red(err.message)));

const procCoded = (callback, shift ) => {
    
  
        readStreamPlain.on('data', function(chunk) { 

            const readResult = chunk.toString();
               const codedResult = callback(readResult, shift)
       
                writerStreamCoded.write(codedResult, 'utf-8')

      })
}
  



module.exports = procCoded;
