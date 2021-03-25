import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    // Сбор данных с формы калькулятора и добавление их в объект state
    const windowForm = document.querySelectorAll('.balcon_icons_img '),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    // Валидация поле "Ширины" и "Высоты", чтобы можно было вводить только цифры
    checkNumInputs('#width');
    checkNumInputs('#height');

    // Функция добавления выбранный/вводимых данных в объект modalState
    function bindActionToElems(event, elem, prop) {
        // Добавление  выбранного "формы окна" в объект modalState
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case "SPAN":
                        // Добавление "формы окна"
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            // Добавление профиля окна
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            // Настраиваем выбор только "одного" окна
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            // Добавление "высоты" и "ширины"
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        // Добавление типа остекления
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form'); // Форма окна
    bindActionToElems('input', windowHeight, 'height'); // Высота
    bindActionToElems('input', windowWidth, 'width'); // Ширина
    bindActionToElems('change', windowType, 'type'); // Тип окна
    bindActionToElems('change', windowProfile, 'profile'); // Профиль окна
};

export default changeModalState;