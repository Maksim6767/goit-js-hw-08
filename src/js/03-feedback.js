import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

const formData = {};

function onFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem ('feedback-form-state', JSON.stringify(formData)); 
    console.log(formData);
}

function onFormSubmit(evt) {
// Вывод объекта в консоль с текущими значениями полей
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
//  Предотвращение перезагрузки страницы по умолчанию
  evt.preventDefault();
// Сброс всех полей в начальное значение
  evt.currentTarget.reset(); 
// Очистка локального хранилища при отправке формы
  localStorage.removeItem('feedback-form-state');
}

(function populateForm() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
})();

