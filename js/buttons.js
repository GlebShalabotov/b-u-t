/**
 * @typedef {{direction: string}} Button
 */
/**
 * initializes all events on the arrowButtons
 */
const addEventListenersToButtons = () => {
    initArrow({direction: 'left'});
    initArrow({direction: 'right'});
    initArrow({direction: 'up'});
    initArrow({direction: 'down'});

}

/**
 * Finds the correct dom element to initialize the navigation event
 * @param {Button} button 
 */
const initArrow = ({direction}) => {
    var directionClass = `arrow-${direction}`;
    var $arrow = $(`div.${directionClass}`);
    $arrow.on('click', arrowEvent);
}

/**
 * Binds the navigation event
 * @param {jquery.event} event 
 */
const arrowEvent = (event) => {
    navigateThroughGrid(event.currentTarget.dataset.direction);
}

