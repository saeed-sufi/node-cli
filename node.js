const http = require("http")

const hostname = "127.0.0.1"
const port = 3000
let count = 1;

const server = http.createServer((req, res) => {;
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.end(`Hello ${req.headers['user-agent']}`)
  console.log('VISIT', count++)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
