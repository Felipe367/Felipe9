const form = document.getElementById('meuForm');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário
    e.preventDefault(); 

    let isValid = true;

    // Valida o campo de nome
    if (nomeInput.value.trim() === '') {
      alert('O campo nome é obrigatório!');
      isValid = false;
    }

    // Valida o campo de e-mail (exemplo básico)
    if (emailInput.value.trim() === '') {
      alert('O campo e-mail é obrigatório!');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      isValid = false;
    }

    // Se tudo estiver válido, o formulário é enviado
    if (isValid) {
      // Aqui você pode enviar o formulário programaticamente
      // form.submit(); 
      alert('Formulário válido!');
    }
  });