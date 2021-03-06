const chalk = require('chalk');

const middleProcessNull = require('./utils/middle_process_null')
const middleProcessOutput5 = require('./utils/middle_process_output_5');
const middleProcessInput5 = require('./utils/middle_process_input_5');
const middleProcess6 = require('./utils/middle_process_6')
const yargs = require('yargs').argv;
const encode = require('./utils/coder');
const decode = require('./utils/decoder')

//! Version one
if(Object.keys(yargs).length == 4){
  
  if (yargs.action || yargs.a === 'encode') {
    middleProcessNull(encode)
    
  } else if (yargs.action || yargs.a === 'decode') {
    middleProcessNull(decode)
  } else {
    console.error(chalk.inverse.red('Please provide correct command'));
  }
} //! end;


//! Version two
if(Object.keys(yargs).length == 5 ){
  
  if (yargs.action || yargs.a === 'encode') {             
    
    if(yargs.o || yargs.output) {
      middleProcessOutput5(encode)
    } else
    if(yargs.i || yargs.input){
      middleProcessInput5(encode)
    } else { console.error(chalk.inverse.red('pls provide correct command'));}
    
  } else 
    if (yargs.action || yargs.a === 'decode') {
      
      if(yargs.o || yargs.output) {
        middleProcessOutput5(decode)
      } else
      if(yargs.i || yargs.input){
        middleProcessInput5(decode)
      } else { console.error(chalk.inverse.red('pls provide correct path')); }
     
  } else {
    console.error(chalk.inverse.red('Please provide correct command'));
  }
} //! end;


//! Version three
 if(Object.keys(yargs).length == 6) {

  if (yargs.action || yargs.a === 'encode') {
    middleProcess6(encode)
    
  } else if (yargs.action || yargs.a === 'decode') {
    middleProcess6(decode)
  } else {
    console.error(chalk.inverse.red('Please provide correct command'));
  }
} //! end;

  if(Object.keys(yargs).length < 4) {
    console.error(chalk.inverse.red('Please provide correct command'));
  }