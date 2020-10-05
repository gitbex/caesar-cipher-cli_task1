const fs = require('fs');
const yargs = require('yargs').argv;
const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const readStreamPlain = fs.createReadStream(pathInput);
const writerStreamCoded = fs.createWriteStream(pathOutput)
writerStreamCoded.on('error', err => process.stderr.write(err.message));
readStreamPlain.on('error', err => process.stderr.write(err.message));

const procCoded = (callback, shift ) => {
    
  
        readStreamPlain.on('data', function(chunk) { 

            const readResult = chunk.toString();
               const codedResult = callback(readResult, shift)
       
                writerStreamCoded.write(codedResult,'UTF8')

             })
     
    


   
    
}





  
  
  



module.exports = procCoded;
