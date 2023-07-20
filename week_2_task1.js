const http = require('http');

const host = "localhost";
const port = 8000;
const requestListner = function(req, res) {
    res.end(`Hello, world! This is Ujas!`);
};
const server = http.createServer(requestListner);

server.listen(port, () => {
    //console.log("Server is Running");
    console.log(`Server running at http://${host}:${port}/`);
});
