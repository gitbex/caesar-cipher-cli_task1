const chalk = require('chalk');
const yargs = require('yargs').argv;

const passedNumber = yargs.shift !== undefined ? yargs.shift : yargs.s;



const middleProcess6 = ( callback ) => {
    
const pathInput = yargs.i !== undefined ? yargs.i : yargs.input;
const pathOutput = yargs.o !== undefined ? yargs.o : yargs.output
const procCoded = require('./streamFile');
    
    if( typeof passedNumber === 'number') { 
      
          if((pathInput !== '') && 
          (pathOutput !== '')) {
          procCoded(callback, passedNumber);
          } 
          else {
            console.log(chalk.inverse.red('Please provide correct file names and path'));
          }
}
}
module.exports = middleProcess6;