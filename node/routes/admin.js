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
	res.send(`
        This is the user page
       <form action="/admin/user" method="POST">
        <input type="text" name="username" />
        <button type="submit">Create</button>
       </form>
    `);
});

module.exports = router;
