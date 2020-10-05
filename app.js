const chalk = require('chalk');

const middleProcess = require('./utils/middle_process')
const yargs = require('yargs').argv;
const encode = require('./utils/coder');
const decode = require('./utils/decoder')


if (yargs.action || yargs.a === 'encode') {
  middleProcess(encode)
  
} else if (yargs.action || yargs.a === 'decode') {
  middleProcess(decode)
}
else {
    console.log('Please provide correct command');
}
  



