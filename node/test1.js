// fetch to run in node
var fetch = require("isomorphic-unfetch");
const mainUrl = "https://my-json-server.typicode.com/cuongtran-6618/fakedata/";

const fetchComment = async (url) => {
	return fetch(url)
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.log(err));
};

const main = () => {
	fetchComment(`${mainUrl}comments`).then((data) => {
		/*
		// fetch a single user
		const userData = fetchComment(`${mainUrl}comments/` + 1).then((data) => {
			console.log(data);
		});
		*/

		// fetch each of user by Promise
		const UserDataArr = data.map((item) => {
			return fetchComment(`${mainUrl}comments/` + item.id);
		});

		Promise.all(UserDataArr).then((value) => console.log(value));
	});
};

main();
