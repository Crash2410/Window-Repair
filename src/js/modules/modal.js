const modal = (triggerSelector, modalSelector, closeModalSelector, closeClickOverlay = true) => {
    // Модальные окна
    // Функция показа модальных окон
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeModals = document.querySelector(closeModalSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();
    // Открытие модального окна по нажатию на кнопку
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modal, showModalByTime, scroll);
        });
    });
    // Закрытие модального окна
    closeModal(closeModals, modal, closeClickOverlay);
    // Закрытие при нажатии вне области модального окна
    modal.addEventListener("click", (e) => {
        if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = "";
        }
    });

    // Вычисляем размер скоролла, чтобы убрать дергание экрана при открытии модального окна
    function calcScroll() {
        let div = document.createElement('div');
        // Задаем стили 
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        // Вычисляем размер прокрутки
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
};

// Функция открытия модального окна
function openModal(modal, showModalByTime, scroll) {
    const windows = document.querySelectorAll('[data-modal]');

    windows.forEach(item => {
        item.style.display = 'none';
    });
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;

    if (showModalByTime) {
        clearInterval(showModalByTime);
    }

}
// Функция закрытия модального окна
function closeModal(closeModal, modal, closeClickOverlay) {
    const windows = document.querySelectorAll('[data-modal]');
    closeModal.addEventListener("click", (e) => {
        if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
            });
        }
        modal.style.display = 'none';
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });
}
// Показ модального окна после 60 сек 
const showModalByTime = setTimeout(() => {
    document.querySelector('.popup[data-modal]').style.display = 'block';
    document.body.style.overflow = "hidden";
}, 60000);

export default modal;