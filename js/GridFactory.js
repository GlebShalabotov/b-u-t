var gridPositionId = 0;
class GridIdFactory {
    idConst = 'gridPosition';
    position = gridPositionId++;
}

GridIdFactory.prototype.toString = function gridIdFactoryToString(){
    return `${this.idConst}${this.position}`
}