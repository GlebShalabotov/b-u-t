
/**
 * @typedef {{ top: number, left: number}} ButtonPosition
 * @typedef {{x: number, y: number}} Cell
 */

const menuApp = [{
    label: 'Service Plan',
    action: 'openServicePlan',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/service-plan.png'
},
{
    label: 'Protections',
    action: 'protectionsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/protections.png'
},
{
    label: 'Week Timer',
    action: 'weekTimerClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/week-timer.png'
},
{
    label: 'Information',
    action: 'infoClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/information.png'
},
{
    label: 'Test',
    action: 'notImplemented',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/test.png'
},
{
    label: 'Counters',
    action: 'countersClicked"',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/counters.png'
},
{
    label: 'Regulation',
    action: 'regulationClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/regulation.png'
},
{
    label: 'Inputs',
    action: 'inputsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/input.png'
},
{
    label: 'Outputs',
    action: 'outputsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/output.png'
},
{
    label: 'Event History',
    action: 'eventHistoryClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/event-history.png'
},
{
    label: 'Settings',
    action: 'settingsClicked',
    imgSrc: './MK5 training and simulation app - Atlas Copco_files/settings.png'
},
{
    label: 'dreamWeaver',
    action: 'dreamWeaverClicked',
    imgSrc: 'https://icongr.am/simple/adobedreamweaver.svg?size=40&color=currentColor&colored=false'
},
{
    label: 'lucky charm',
    action: 'charmClicked',
    imgSrc: 'https://icongr.am/simple/aerlingus.svg?size=40&color=0e9a18&colored=false'
},
{
    label: 'sunshine',
    action: 'putonsunglasses',
    imgSrc: 'https://icongr.am/simple/awesomelists.svg?size=40&color=640c0c&colored=false'
}]

var gridList = [];
var activeCell = new GridIdFactory(0, 0);

/**
 * initializes all the icons to have a clear grid so you can navigate more easily
 */
const loadInIcons = () => {
    var $buttonNavigationRoot = $('#buttonNavigation');
    menuApp.map((icon) => {
        let $element = $('<div>', { 'data-label': icon.label, 'data-action': icon.action, class: 'button navigatable' });
        let $imgElement = $('<img>', { src: icon.imgSrc });
        $element.append($imgElement);
        $buttonNavigationRoot.append($element);
    });
}

/**
 * Initializes the gridList
 */
const initIconsPositions = () => {
    const $buttons = $('#buttonNavigation div.button.navigatable');
    var currentList = [];
    var previousButtonPosition = { top: 0, left: 0 };
    $buttons.each(function () {
        var buttonPosition = $(this).position();
        if (checkIfPreviousButtonWasHigher(previousButtonPosition, buttonPosition)) {
            gridList.push(currentList);
            currentList = [];
        }
        var idFactory = new GridIdFactory(currentList.length, gridList.length);
        $(this).attr('id', idFactory.toString());
        currentList.push(idFactory);
        previousButtonPosition = buttonPosition;
    })
    if (currentList.length > 0) gridList.push(currentList);
}

/**
 * 
 * @param {ButtonPosition} prevButton 
 * @param {ButtonPosition} currentButton 
 * @returns true if the previous button was higher
 */
const checkIfPreviousButtonWasHigher = (prevButton, currentButton) => {
    return prevButton.top < currentButton.top;
}

/**
 * Uses gridCell to set the new active cell and update the menu-screen info
 * @param {Cell} girdCell 
 */
const setActiveCell = (girdCell = activeCell) => {
    const $activeCell = $('#buttonNavigation div.button.navigatable.active');
    $activeCell?.removeClass('active');
    var $button = $(`#buttonNavigation #${girdCell.toString()}`)
    $button.addClass('active');
    $('.menu-screen .info').text($button.data('label'));
}

/**
 * decides on the basis of direct how the grid navigation needs to behave
 * @param {string} direction 
 */
const navigateThroughGrid = (direction) => {
    switch (direction) {
        case 'right':
            navigationHelper(1,0);
            break;
        case 'left':
            navigationHelper(-1,0);
            break;
        case 'up':
            navigationHelper(0,-1);
            break;
        case 'down':
            navigationHelper(0,1);
            break;
    }
}

/**
 * Uses xScale and yScale to find the new cell that needs to be activated
 * @param {number} xScale 
 * @param {number} yScale 
 */
const navigationHelper = (xScale, yScale) => { 
    var canNav = canNavigate(xScale, yScale);
    if (canNav) {
        activeCell = getNewActiveCell(xScale, yScale);
        setActiveCell(activeCell);
    };
}

/**
 * calculates if the navigation isn't out of bounds
 * @param {*} xScale 
 * @param {*} yScale 
 * @returns true if the button action is possible
 */
const canNavigate = (xScale, yScale) => {
    var canMoveHorizontally = activeCell.x + xScale >= 0 && activeCell.x + xScale < gridList[activeCell.y].length
    var canMoveVertically = activeCell.y + yScale >= 0 && activeCell.y + yScale < gridList.length
    return canMoveHorizontally && canMoveVertically
}

/**
 * Finds the correct cell in gridList
 * @param {number} xScale 
 * @param {number} yScale 
 * @returns a Cell
 */
const getNewActiveCell = (xScale, yScale) => {
    var xPosition = activeCell.x + xScale;
    var yPosition = activeCell.y + yScale;
    var canMoveDownDirectly = xPosition < gridList[yPosition].length
    if (!canMoveDownDirectly) {
        xPosition = gridList[yPosition].length - 1;
    }

    return gridList[yPosition][xPosition];
}