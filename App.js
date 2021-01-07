#!/usr/bin/env node

var chalk = require('chalk'),
figlet = require('figlet'),
log = require('log-update');
setInterval(() =>{
figlet('happy independence day'.toUpperCase(), (err, data) => {
var frames = [chalk.red(data),chalk.green(data),chalk.blue(data),chalk.magenta(data)]
if (err) throw err
log(`\n ${frames[Math.floor(Math.random() * frames.length)] } \n`)
});
},100);