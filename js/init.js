const initMenu = () => {
    loadinIcons();
}

const initButtons = () => {
    addEventListenersToButtons();
}

const init = () => {
    initMenu();
    initButtons();
};

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});