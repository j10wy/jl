if (window.location.pathname.indexOf("/contact") === 0) {
	var formSubmitButton = document.getElementById("form-submit");

	formSubmitButton.addEventListener("click", (event) => {

		let name_field = document.getElementById("name"),
			email_field = document.getElementById("email"),
			message_box = document.getElementById("message");

		event.preventDefault();
		let data = {
			name: name_field.value,
			email: email_field.value,
			message: message_box.value
		};

		submitForm(data)
			.then((response) => {
				console.log("Message delivery status: ", response.status);
				message_box.value = "";
			})
			.catch(error => console.error(error));

	});

	function submitForm(data) {
		console.log(data);
		// Default options are marked with *
		return fetch('https://hooks.zapier.com/hooks/catch/702577/koyv66/', {
				body: JSON.stringify(data),
				method: 'POST',
				mode: 'cors',
			})
			.then(response => response.json()) // parses response to JSON
	}
}