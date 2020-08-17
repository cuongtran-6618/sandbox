const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	// handler homepage
	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write(`<html>
                <body>
                    <h1>Welcome</h1>
                    <form action="/create-user" method="POST">
                        <input name="user" />
                        <button type="submit"> Create </button>
                    </form>
                </body>
            </html>`);

		return res.end();
	}

	// handler list user
	if (url === "/users") {
		res.setHeader("Content-Type", "text/html");
		res.statusCode = 200;
		res.write(`<html>
            <body>
            <h1>Welcome</h1>
            <ul>
                <li>User1</li>
            </body>
        </html>`);

		return res.end();
	}

	// handler create user
	if (url === "/create-user" && method === "POST") {
		const body = [];

		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);

			// 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
			if (body.length > 1e6) {
				// FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
				request.connection.destroy();
			}
		});

		req.on("end", () => {
			const parseBody = Buffer.concat(body).toString();
			const newUser = parseBody.split("=")[1];
			res.setHeader("Content-Type", "text/html");
			res.write(`<html>
                <body>
                <h1>Welcome ${newUser}</h1>
                <ul>
                    <li>User1</li>
                    <li>${newUser}</li>
                </body>
            </html>`);

			return res.end();
		});
	}
};

module.exports = {
	handler: requestHandler,
};
