const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.send(`
        This is the homepage
    `);
	console.log("home page");
});

module.exports = router;
