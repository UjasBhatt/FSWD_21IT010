/* const http = require('http');
const os = require('os');
const chalk = require('chalk'); */
import os from "os";
import chalk from "chalk";
import upper from "upper-case"
import http from "http";

const host = "localhost";
const port = 8000;

const username = os.userInfo().username;
const homeDirectory = os.homedir();
const platform = os.platform();
const totalmem = os.totalmem();
const freeMemory = os.freemem();
const percentage = (freeMemory / totalmem) * 100;

/* const obj = {
    username : username,
    homeDirectory : homeDirectory,
    platform : platform,
    totalmem : ((totalmem / 1024)/1024)/1024,
    freeMemory : ((freeMemory / 1024)/1024)/1024,
    percentage : percentage
}; */

const requestListner = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/HTML'});
      console.log(chalk.green('Ujas'));
      res.end();
};
const server = http.createServer(requestListner);

server.listen(port, () => {
    //console.log("Server is Running");
    console.log(chalk.green('ujas'));
    console.log(upper('ujas'));
    console.log(`Server running at http://${host}:${port}/`);
});
