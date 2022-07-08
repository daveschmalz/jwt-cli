#!/usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
var jwt = require('jsonwebtoken');

const main = async () => {
    try {
      const options = yargs
      .usage("Usage: jwt-verify -t <Token> -s <Secret>")
      .option("t", { alias: "token", describe: "Token", type: "string", demandOption: true })  
      .option("s", { alias: "secret", describe: "Secret", type: "string", demandOption: true })   
      .argv;               

      var decoded = jwt.verify(options.token, options.secret);
        
      console.log(chalk.green.bold(`Decoded: ${JSON.stringify(decoded, null, 4)}`));                   
      
    } catch ( err ) {
      console.log( chalk.red( err ) );
    }
   };
   
   main();