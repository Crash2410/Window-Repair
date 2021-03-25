const modal = () => {
    // Модальные окна
    // Функция показа модальных окон
    function showModal(triggerSelector, modalSelector, closeModalSelector) {
        const trigger = document.querySelector(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeModal = document.querySelector(closeModalSelector);
        // Открытие модального окна
        trigger.addEventListener('click', (e) => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            clearInterval(showModalByTime);
        });
        // Закрытие модального окна
        closeModal.addEventListener('click', (e) => {
            modal.style.display = 'none';
            document.body.style.overflow = "";
        });
        // Закрытие при нажатии вне области модального окна
        modal.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = "";
            }
        });
    }
    // Инициализация модальных окон
    showModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    showModal('.contact_us_wrap .phone_link', '.popup', '.popup_content .popup_close');
    showModal('.feedback_block  .phone_link', '.popup', '.popup_content .popup_close');
    // Показ модального окна после 60 сек 
    const showModalByTime = setTimeout(() => {
        document.querySelector('.popup').style.display = "block";
        document.body.style.overflow = "hidden";
    }, 599000);
};

export default modal;