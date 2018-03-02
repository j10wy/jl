var formSubmitButton = document.getElementById("form-submit");

formSubmitButton.addEventListener("click", (event) => {
	// submitForm()
	// 	.then(data => console.log(data)) // JSON from `response.json()` call
	// 	.catch(error => console.error(error))
	event.preventDefault();
	console.log(event);
});

function submitForm() {
	let data = {
		name: document.getElementById("name"),
		email: document.getElementById("email"),
		message: document.getElementById("message")
	};
	// Default options are marked with *
	return fetch('http://www.zapier.com', {
			body: JSON.stringify(data), // must match 'Content-Type' header
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *omit
			headers: {
				'user-agent': 'Mozilla/4.0 MDN Example',
				'content-type': 'application/json'
			},
			method: 'POST', // *GET, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *same-origin
			redirect: 'follow', // *manual, error
			referrer: 'no-referrer', // *client
		})
		.then(response => response.json()) // parses response to JSON
}