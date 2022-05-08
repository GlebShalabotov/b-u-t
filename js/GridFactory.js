/**
 * GridIdFactory helps to make an ID for a certain element in a grid
 */
class GridIdFactory {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.idConst = 'gridPosition';
    }

    toString() {
        return `${this.idConst}${this.x}${this.y}`
    }
}
