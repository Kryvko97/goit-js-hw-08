
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 500))

populateMessageOutput();

// Зберігаємо дані форми в локальному сховищі та змінній formData
function onFormInput(e) {
formData[e.target.name] = e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Подія при кліку на кнопку
function onFormSubmit(e) {
e.preventDefault();

if (form.email.value === "" || form.message.value === "") {
    return alert("Please fill in all the fields!");
  }

e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
console.log(formData);
}

// Повертаємо дані форми при перезавантаженні сторінки
function populateMessageOutput() {
let persistedForm = localStorage.getItem(STORAGE_KEY)

if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    Object.entries(persistedForm).forEach(([email, message]) => {
form.elements[email].value = message;
formData[email] = message;
    })
}
}