const form = document.querySelector('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

form.addEventListener('submit', function(event) {
  if (!validarNome(nome.value) || !validarEmail(email.value)) {
    event.preventDefault(); // Impede o envio se houver erro
    alert('Por favor, corrija os erros no formulário.');
  }
});

function validarNome(nome) {
  if (nome.trim() === '') {
    return false; // Nome vazio
  }
  return true;
}

function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email); // Verifica formato de e-mail
}