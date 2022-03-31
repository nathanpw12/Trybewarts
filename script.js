const btnEntrar = document.getElementById('btn-entrar');

// Alert btn entrar

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
