const http = require('http');
const os = require('os');

const host = "localhost";
const port = 8000;

const username = os.userInfo().username;
const homeDirectory = os.homedir();
const platform = os.platform();
const totalmem = os.totalmem();
const freeMemory = os.freemem();
const percentage = (freeMemory / totalmem) * 100;

const obj = {
    username : username,
    homeDirectory : homeDirectory,
    platform : platform,
    totalmem : ((totalmem / 1024)/1024)/1024,
    freeMemory : ((freeMemory / 1024)/1024)/1024,
    percentage : percentage
};

const requestListner = function(req, res) {
    if(req.url === '/pcinfo') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj));
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
};
const server = http.createServer(requestListner);

server.listen(port, () => {
    //console.log("Server is Running");
    console.log(`Server running at http://${host}:${port}/`);
});
