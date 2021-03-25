import {
    postData
} from '../services/services';
import checkNumInputs from '../modules/checkNumInputs';

const forms = (formSelector, state) => {
    const forms = document.querySelectorAll(formSelector);
    // Объект с состояниями отправки данных для пользователя
    const message = {
        loading: 'Идет отправка данных.',
        success: 'Данные успешно отправлены.',
        error: 'Ошибка.'
    };
    // Валидация поля для ввода телефона
    checkNumInputs('input[name="user_phone"]');
    // Подключаем отправку форм ко всем формам на странице
    forms.forEach((item) => {
        bindPostData(item);
    });
    // Функция отправки данных с форм на сервер
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Создание и добавление блока с уведомлением для пользователя
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.appendChild(statusMessage);
            // Формирование данных с формы
            const formData = new FormData(form);
            // ~~ Если это форма последняя калькулятора, то к данным из формы добавляются данные с объекта state ~~
            if (form.getAttribute('data-calc') == 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            // Отправка данных с формы на сервер
            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    }
};

export default forms;