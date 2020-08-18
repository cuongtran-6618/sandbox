// handle root path via helper
const path = require("path");
const rootDir = require("./utils/path");

const express = require("express");
const app = express();

// set template engine for express
app.set("view engine", "pug");
app.set("views", "views");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// serve the static file
app.use(express.static(path.join(__dirname, "public")));

// set router
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

// add prefix for admin (is that the same to apply for example api endpoint?)
app.use("/admin", adminRoutes);
app.use(userRoutes);

// fallback if user type the wrong url
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
