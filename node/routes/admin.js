const path = require("path");
const express = require("express");

const router = (require = express.Router());

// allow to add middle which will be execute in every request
router.post("/user", (req, res, next) => {
	console.log(req.body);
	res.send(`
        This is the user page
        <ul>
        <li>User1</li>
    `);
});

router.get("/add-user", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

module.exports = router;
