const http = require("http");

const server = http.createServer((req, res) => {

  console.log(req.url);
  console.log(req.method);
  if (req.url === "/") {
    res.write("Hello world! I'm Emmanuel Ibekwe.");
    res.end();
  } else if (req.url === "/hello") {
    res.write("Hello from Emmanuel Ibekwe");
    res.end();
  } 
    });
  
server.listen(8900, null, null, () => {
  console.log("Server is running on port 8900");
});