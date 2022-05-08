const addEventListenersToButtons = () => {
    initArrow({direction: 'left'});
    initArrow({direction: 'right'});
    initArrow({direction: 'up'});
    initArrow({direction: 'down'});

}

const initArrow = ({direction}) => {
    var directionClass = `arrow-${direction}`;
    var $arrow = $(`div.${directionClass}`);
    $arrow.on('click', arrowEvent);
}

const arrowEvent = (event) => {
    navigateThroughGrid(event.currentTarget.dataset.direction);
}

