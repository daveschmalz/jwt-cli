#!/usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
var jwt = require('jsonwebtoken');

const main = async () => {
    try {
      const options = yargs
      .usage(`Usage: jwt-decode -t <Token>\n
      Warning: This will not verify whether the signature is valid. You should not use this for untrusted messages. You most likely want to use jwt.verify instead.
      `)
      .option("t", { alias: "token", describe: "Token", type: "string", demandOption: true })     
      .argv;
           
      console.log(chalk.blue.bold(`Token: ${options.token}...`));     
      var decoded = jwt.decode(options.token, {complete: true});        
      console.log(chalk.green.bold(`Decoded: ${JSON.stringify(decoded, null, 4)}`));       
      
    } catch ( err ) {
      console.log( chalk.red( err ) );
    }
   };
   
   main();