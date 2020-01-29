interface ICell {
    alive : boolean,
    x: number,
    y: number
}

export class Cell implements ICell {
    private _alive : boolean;
    private _x : number;
    private _y : number;
    constructor(alive: boolean, x: number, y: number) {
        this._alive = alive;
        this._x = x;
        this._y = y;
    }

    public get alive() {
        return this._alive;
    }

    public set alive(value) {
        this._alive = value;
    }

    public get x() {
        return this._x;
    }

    public set x(value) {
        this._x = value;
    }

    public get y() {
        return this._y;
    }

    public set y(value) {
        this._y = value;
    }

    public iterate() {
        this.alive = !this.alive;
    }
}