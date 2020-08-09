//implementation detail

export const _edge = new WeakMap();

//public interface
export default class Square {
    constructor(edge) {
        _edge
            .set(this, edge);
    }
    draw() {
        console.log("Square with edge " + _edge.get(this));
    }
}