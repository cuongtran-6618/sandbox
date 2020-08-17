const http = require("http");

const express = require("express");

const app = express();

// allow to add middle which will be execute in every request
app.use((req, res, next) => {});

const server = http.createServer(app);

server.listen(3000);
