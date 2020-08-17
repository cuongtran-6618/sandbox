const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	// test
	if (url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write(`<html>
            <body>
                <h1>This is my homepage</h1>
                <form action="/message" method="POST">
                    <input name="message" />
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>`);
		return res.end();
	}

	// received the data from user
	if (url === "/message" && method === "POST") {
		const body = [];

		req.on("data", (chunk) => {
			body.push(chunk);
		});

		return req.on("end", () => {
			const parseBody = Buffer.concat(body).toString();
			const message = parseBody.split("=")[1];
			console.log("message is: ", message);

			// set response
			res.statusCode = 302;
			res.setHeader("Content-Type", "text/html");
			res.write(`<html>
                <body>
                    <h1>Hello ${message}</h1>                
                </body>
            </html>`);
			return res.end();
		});
	}
};

module.exports = {
	handler: requestHandler,
};
