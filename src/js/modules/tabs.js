const tabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {
    const tabsContent = document.querySelectorAll(tabsContentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    // Функция скрывает табы и контент табов
    function hideTabContent() {
        tabsContent.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }
    // Функция показывает табы и контент
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    // Переключатель табов
    tabsParent.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        // Проверяем на то, чтобы мы нажали на нужный таб(делегирование событий)
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;