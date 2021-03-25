const modal = () => {
    // Модальные окна
    // Функция показа модальных окон
    function showModal(triggerSelector, modalSelector, closeModalSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            closeModal = document.querySelector(closeModalSelector),
            windows = document.querySelectorAll('[data-modal]');
        // Открытие модального окна
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                clearInterval(showModalByTime);
            });
        });
        // Закрытие модального окна
        closeModal.addEventListener('click', (e) => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = "";
        });
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
    }
    // Инициализация модальных окон
    showModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    showModal('.contact_us_wrap .phone_link', '.popup', '.popup_content .popup_close');
    showModal('.feedback_block  .phone_link', '.popup', '.popup_content .popup_close');

    showModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    showModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    showModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // Показ модального окна после 60 сек 
    const showModalByTime = setTimeout(() => {
        document.querySelector('.popup').style.display = "block";
        document.body.style.overflow = "hidden";
    }, 599000);
};

export default modal;