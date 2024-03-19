const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('password-two');

form.addEventListener('submit', (e) => {
	e.preventDefault() 


	const success = centroInputs();
	if (success) {
		window.location.href = "personagens.html";
	}
});

function centroInputs() {
	let success = true; 
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const passwordtwoValue = passwordtwo.value.trim();

	if (usernameValue === '') {
		setErrorFor(username, 'Preencha este campo');
		success = false;
	} else {
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Preencha este campo');
		success = false;
	} else if (!regexEmail(emailValue)) {
		setErrorFor(email, 'Email inválido, tente de novo');
		success = false;
	} else {
		setSuccessFor(email);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Preencha este campo');
		success = false;
	} else if (passwordValue.length < 8) {
		setErrorFor(password, 'Senha deve ter mais que 8 caracteres');
		success = false;
	} else {
		setSuccessFor(password);
	}

	if (passwordtwoValue === '') {
		setErrorFor(passwordtwo, 'Preencha este campo');
		success = false;
	} else if (passwordValue !== passwordtwoValue) {
		setErrorFor(passwordtwo, 'Por favor, verifique se a senha é a mesma');
		success = false;
	} else {
		setSuccessFor(passwordtwo);
	}

	return success;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function regexEmail(email) {
	return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}