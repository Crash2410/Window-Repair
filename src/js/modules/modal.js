// Функция открытия модального окна
function openModal(modal, showModalByTime) {
    const windows = document.querySelectorAll('[data-modal]');

    windows.forEach(item => {
        item.style.display = 'none';
    });
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

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
    });
}
// Показ модального окна после 60 сек 
const showModalByTime = setTimeout(() => {
    document.querySelector('.popup').style.display = "block";
    document.body.style.overflow = "hidden";
}, 60000);
const modal = (triggerSelector, modalSelector, closeModalSelector, closeClickOverlay = true) => {
    // Модальные окна
    // Функция показа модальных окон
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeModals = document.querySelector(closeModalSelector),
        windows = document.querySelectorAll('[data-modal]');
    // Открытие модального окна по нажатию на кнопку
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modal, showModalByTime);
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
};

export default modal;