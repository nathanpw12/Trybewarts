const btnEntrar = document.getElementById('btn-entrar');

// Samuel!

function btnEntrarAlert() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

btnEntrar.addEventListener('click', btnEntrarAlert);

// btn enviar só funciona se o checkbox dos termos estiverem marcados

const checkbox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function btnEnviarCheck() {
  console.log(checkbox.value);
  if (submitBtn.disabled) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkbox.addEventListener('click', btnEnviarCheck);
