export {clientServices} from "../service/client-service.js";
/* se importan los módulos creados */

const btnSubmit = document.querySelector('[data-submit]');
const inputName = document.querySelector('[data-name]');
const inputMessage = document.querySelector('[data-message]');
const message = document.querySelector('.mns-incorrect');

message.style.display = 'none';
/* parrafo de mns de error oculto en el html */

btnSubmit.disabled = true;
/* el metodo disabled, permite que estén inactivos o deshabilitados de modo que el usuario no podrá pulsar sobre ellos o elegirlos. */
btnSubmit.style.opacity = 0.6;

inputName.addEventListener('blur', inputValidateName);
/* addEventlistener, es un escuchador que indica al navegador que este atento a la interacción del usuario.target.addEventListener('tipo de evento',función_a_lanzar,booleano);
El evento-metodo blur () se usa para quitar el foco de un elemento. y se ejecuta la funcion inputValidateName */
inputMessage.addEventListener('blur', inputValidateMessage);

btnSubmit.addEventListener('click', (e) => {
  /* método preventDefault indica que el elemento (en este caso el btnSubmit) no funcione como deberia */
  e.preventDefault();
/* preventDefault() método cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá. */
  setTimeout(() => {
    inputName.value = '';
    inputMessage.value = '';
    inputName.style.border = 'none';
    inputMessage.style.border = 'none';
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = 0.6;
  }, 2000);
/* método setTimeout() establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo */
});

function inputValidateName() {
  const value = inputName.value;

  if (value.length === 0) {
    inputName.style.border = '2px solid rgb(32, 248, 32)';
    message.style.display = 'block';
  } else {
    inputName.style.border = '2px solid rgb(32, 230, 248)';
    message.style.display = 'none';
  }
  if (
    inputName.style.border === '2px solid rgb(32, 230, 248)' &&
    inputMessage.style.border === '2px solid rgb(32, 230, 248)'
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.opacity = 1;
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = 0.6;
  }
}

function inputValidateMessage() {
  const value = inputMessage.value;

  if (value.length === 0) {
    inputMessage.style.border = '2px solid rgb(32, 248, 32)';
    message.style.display = 'block';
  } else {
    inputMessage.style.border = '2px solid rgb(32, 230, 248)';
    message.style.display = 'none';
  }
  if (
    inputName.style.border === '2px solid rgb(32, 230, 248)' &&
    inputMessage.style.border === '2px solid rgb(32, 230, 248)'
  ) {
    btnSubmit.disabled = false;
    btnSubmit.style.opacity = 1;
  } else {
    btnSubmit.disabled = true;
    btnSubmit.style.opacity = 0.6;
  }
}