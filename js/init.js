const initMenu = () => {
    loadInIcons();
    initIconsPositions();
    setActiveCell();
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