import { Coordinate } from './coordinate';
import { CellStatus } from './cellStatus';

interface ICell {
    status : CellStatus,
    coordinates: Coordinate
}

export class Cell implements ICell {
    private _status : CellStatus;
    private _coordinates: Coordinate;
    constructor(status: CellStatus, x: number, y: number) {
        this._status = status;
        this._coordinates = new Coordinate(x, y);
    }

    public get status() {
        return this._status;
    }

    public set status(value) {
        this._status = value;
    }

    public get coordinates() {
        return this._coordinates;
    }
}