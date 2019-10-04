let http = require("http");

let server = http.createServer((req, res)=>{
  res.write("Hello world!");
});

server.listen(8080);
