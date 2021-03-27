const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    // Добавление блоку класс и доавление его в рабочую область
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    // Добавление классов к модальному окну
    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `;
    // Добавление в модальное окно картинки
    bigImage.style.cssText = `
        max-width: 50%;
        width: 700px;
        object-fit: cover;
        object-position: bottom;
    `;
    imgPopup.appendChild(bigImage);
    // Открытие большой картинки(модальное окно) при нажатии на картинки в рабочей области
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        // Открытие картинки на которую нажали в рабочей области
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";
            // Получение ссылки на изображение
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        // Закрытие модального окна при нажатии на обложку
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }

    });
};

export default images;