var formSubmitButton = document.getElementById("form-submit");

formSubmitButton.addEventListener("click", (event) => {

	event.preventDefault();
	let data = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value
	};
	
	submitForm(data)
		.then(response => console.log(response))
		.catch(error => console.error(error));

});

function submitForm(data) {
	console.log(data);
	// Default options are marked with *
	return fetch('https://hooks.zapier.com/hooks/catch/702577/koyv66/', {
			body: JSON.stringify(data), // must match 'Content-Type' header
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'content-type': 'application/json'
			},
			method: 'POST',
			mode: 'cors', // no-cors, *same-origin
			redirect: 'follow', 
			referrer: 'no-referrer'
		})
		.then(response => response.json()) // parses response to JSON
}