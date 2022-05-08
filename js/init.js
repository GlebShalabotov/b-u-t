const initMenu = () => {
    loadinIcons();
    initIconsPositions();
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