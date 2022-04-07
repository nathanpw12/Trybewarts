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
  if (submitBtn.disabled) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
checkbox.addEventListener('click', btnEnviarCheck);

// Contador de caracteres restantes text area
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function counterFunction() {
  const valueLenght = 500 - textArea.value.length;
  counter.innerText = `${valueLenght} caracteres restantes`;
}
counterFunction();

textArea.addEventListener('keyup', counterFunction);

//

const forms = document.getElementById('evaluation-form');

const email = document.getElementById('input-email');
const nome = document.getElementById('input-name');
const sobreNome = document.getElementById('input-lastname');
const casinha = document.getElementById('house');
// const familia = document.querySelector('input[name="q1"]:checked').value; faça funcionar.
const obs = document.getElementById('textarea');

function formValue() {
  forms.innerHTML = '';
  const nameValue = document.createElement('span');
  nameValue.innerText = `Nome: ${nome.value} ${sobreNome.value}`;
  forms.appendChild(nameValue);

  const emailValue = document.createElement('span');
  emailValue.innerText = `Email: ${email.value}`;
  forms.appendChild(emailValue);

  const casinhaValue = document.createElement('span');
  casinhaValue.innerText = `Casa: ${casinha.value}`;
  forms.appendChild(casinhaValue);

  const obsValue = document.createElement('span');
  obsValue.innerText = `Observações: ${obs.value}`;
  forms.appendChild(obsValue);
}
// const familiaValue = document.createElement('span');
// familiaValue.innerText = `Familia: ${familia.value}`;
// forms.appendChild(familiaValue);

submitBtn.addEventListener('click', formValue);

// function teste() {
//   console.log(familia); //name do iput
// }
// document.querySelector('.family').addEventListener('click', teste);
