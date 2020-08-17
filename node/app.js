const express = require("express");

const app = express();

// allow to add middle which will be execute in every request
app.use((req, res, next) => {
	res.send();
});

server.listen(3000);
