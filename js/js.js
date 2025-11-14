const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
   
    event.preventDefault();
    clearErrors();
    if (validateForm()) {
        alert('Formulário enviado com sucesso!');
       
    }
});

function validateForm() {
    let isValid = true;

    
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '' || nome.value.length < 3) {
        displayError('nomeError', 'O nome deve ter no mínimo 3 caracteres.');
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        displayError('emailError', 'Por favor, insira um endereço de e-mail válido.');
        isValid = false;
    }

    
    const senha = document.getElementById('senha');
    if (senha.value.length < 8) {
        displayError('senhaError', 'A senha deve ter no mínimo 8 caracteres.');
        isValid = false;
    }

    return isValid;
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}