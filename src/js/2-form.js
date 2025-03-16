const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const formData = { email: '', message: '' };
try {
  email.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
  message.value =
    JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';
} catch (error) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
form.addEventListener('input', onFormInput);
function onFormInput(event) {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  const formDataValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formDataValue[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formDataValue));

  //   formData[event.target.name] = event.target.value;
  //   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  //   console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Fill please all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
