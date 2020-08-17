const http = require("http");

const routes1 = require("./routes1");

const server = http.createServer(routes1.handler);

server.listen(3000);
