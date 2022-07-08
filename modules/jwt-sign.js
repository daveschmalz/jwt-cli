#!/usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
var jwt = require('jsonwebtoken');

const main = async () => {
    try {
      const options = yargs
      .usage('Usage: jwt-sign -p <Payload> -s <Secret>')
      .option("p", { alias: "payload", describe: "Payload", type: "string", demandOption: true })     
      .option("s", { alias: "secret", describe: "Secret", type: "string", demandOption: true })   
      .argv;    
      
      var token = jwt.sign(options.payload, options.secret);
        
      console.log(chalk.green.bold(`Token: ${token}`));                   
      
    } catch ( err ) {
      console.log( chalk.red( err ) );
    }
   };
   
   main();