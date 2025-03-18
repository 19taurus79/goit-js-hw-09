const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const formData = { email: '', message: '' };
const LS_KEY = 'feedback-form-state';
document.addEventListener('DOMContentLoaded', onFormLoad);
function onFormLoad() {
  const formDataLS = JSON.parse(localStorage.getItem(LS_KEY)) || formData;
  localStorage.setItem(LS_KEY, JSON.stringify(formDataLS));
  email.value = formDataLS.email;
  message.value = formDataLS.message;
}

form.addEventListener('input', onFormInput);
function onFormInput(event) {
  const formData = JSON.parse(localStorage.getItem(LS_KEY));
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Fill please all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem(LS_KEY)));
    form.reset();
    localStorage.removeItem(LS_KEY);
  }
}
