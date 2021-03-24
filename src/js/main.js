import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');

});