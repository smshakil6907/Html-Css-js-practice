const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('tut66.html');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.end(fileContent);
});

server.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80");
    // port change hote pare jemon 8000 (http://127.0.0.1:8000/)
});