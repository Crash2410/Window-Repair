import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {
        form: 0,
        type: 'tree'
    };

    changeModalState(modalState);

    modal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modal('.phone_link', '.popup', '.popup_content .popup_close');
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');

    forms('.form', modalState);

    timer("#timer", '2021-05-27');

    images();
});