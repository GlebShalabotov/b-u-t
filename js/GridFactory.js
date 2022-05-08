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
