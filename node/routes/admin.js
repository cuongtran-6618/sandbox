const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = (require = express.Router());

// allow to add middle which will be execute in every request
router.post("/user", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "user.html"));
});

router.get("/add-user", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-user.html"));
});

module.exports = router;
