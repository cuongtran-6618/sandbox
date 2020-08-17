// fetch to run in node
var fetch = require("isomorphic-unfetch");
const url = "https://jsonplaceholder.typicode.com/todos/";

const fetchData = async (url, endPoint) => {
	try {
		return await fetch(url)
			.then((response) => response.json())
			.then((data) => data);
	} catch (error) {
		console.log(`Error from ${endPoint}: `, error);
	}
};

const getAverage = (givenData) => {
	return (
		givenData.reduce((previous, current) => {
			return previous + current;
		}, 0) / givenData.length
	);
};

const getTodoById = (todoList, givenId) => {
	return todoList.filter((item) => {
		return item.id === givenId;
	});
};

const main = () => {
	const desireTodoId = 6;
	const todoList = fetchData(`${url}`, "get todo list").then((data) => {
		let titles = data.map((item) => {
			return item.title.length;
		});

		const averageTitleLength = getAverage(titles);
		console.log(averageTitleLength);

		todo = getTodoById(data, desireTodoId);
	});
};

main();
