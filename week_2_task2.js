const http = require('http');

const host = "localhost";
const port = 8000;
const requestListner = function(req, res) {
    res.statusCode = 403;
    res.write('Failed to load resource: the server responded with a status of 403 (Forbidden)'); //write a response to the client
    res.end(); //end the response
};
const server = http.createServer(requestListner);

server.listen(port, () => {
    //console.log("Server is Running");
    console.log(`Server running at http://${host}:${port}/`);
});
