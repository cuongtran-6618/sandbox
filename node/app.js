const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

// add prefix for admin (is that the same to apply for example api endpoint?)
app.use("/admin", adminRoutes);
app.use(userRoutes);

// fallback if user type the wrong url
app.use((req, res, next) => {
	res.status(404).send("404 Page not found");
});

app.listen(3000);
