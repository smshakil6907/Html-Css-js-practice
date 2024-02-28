const http = require('node:http');
const hostname = '127.0.0.1'; // Corrected IP address
const port = 3008;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('hello world shakil faisal');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors and more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: aqua;
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          .btn{
              background-color: rgb(230, 197, 197);
              padding: 4px;
              border: none;
              cursor:pointer;
              margin: 2px;
              font-size: 14px;
              border-radius: 4px;
              
          }
          a{  
              text-decoration: none;
              color: rgb(122, 20, 20);
          }
          a:hover{
              color: rgb(150, 47, 6);
              background-color: aquamarine;
          }
          a:visited{
              background-color: rgb(167, 167, 33);
          }
          a:active{
              background-color: blue;
          }
          .btn:hover{
              color: rgb(51, 129, 103);
              background-color: rgb(30, 32, 32);
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h1>This is my hedding</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro cupiditate, tenetur neque sequi iste optio quo explicabo distinctio possimus libero laboriosam facilis, quis vero dolor molestiae fugiat repellat. Porro ea explicabo consequatur quaerat pariatur!</p>
          <a href="https://google.com" class="btn">Read more </a>
          <button class="btn">Contact us </button>
      </div>
      
  </body>
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
