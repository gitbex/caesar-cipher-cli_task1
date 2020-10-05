const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs').argv;
const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const readStreamPlain = fs.createReadStream(pathInput);
const writerStreamCoded = fs.createWriteStream(pathOutput)
writerStreamCoded.on('error', err => process.stderr.write(err.message));
readStreamPlain.on('error', err => process.stderr.write(err.message));

const encode = require('./coder');
const decode = require('./decoder')
const path = require('path')
// const procCoded = require('./streamFile');

const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;


const { error } = require('console');



const middleProcess = ( callback ) => {
    
    
    if( typeof passedNumber === 'number') { console.log('test');
        if (Object.keys(yargs).length == 4) {
        process.stdin.on('data', (data) => {
          let result = callback(data.toString(), passedNumber )
            process.stdout.write('\n' + 'this is output: ' + result);
            
        })
        } else if (Object.keys(yargs).length == 6) { console.log('test1');
        const procCoded = require('./streamFile');
          if((pathInput !== '') && 
          (pathOutput !== '')) {
          procCoded(callback, passedNumber);
          } 
          else {
            console.log('Please provide correct file names and path');
          }
          
         
        } 
        // else if (Object.keys(yargs).length == 5 && pathOutput ) {

        //     process.stdin.on('data', (data) => {
        //         let result = callback(data.toString(), passedNumber )
        //         //   process.stdout.write('\n' + 'this is output: ' + result);
        //           writerStreamCoded.write(result,'UTF8')
        //       })
        // }
        else {
          console.log('Please provide correct file names');
        }
        
      } else {
          console.log('Please provide correct number');
      }
    
}

module.exports = middleProcess;