interface ICell {
    alive : boolean
}

export class Cell implements ICell {
    private _alive : boolean;
    constructor(alive: boolean) {
        this._alive =
         alive;
    }

    public get alive() {
        return this._alive;
    }

    public set alive(value) {
        this._alive = value;
    }
}