import { Cell } from "./cell";

interface IRow {
    cells: Cell[]
}

export class Row {
    private width: number;
    private _cells: Cell[];
    public constructor(width: number) {
        this.width = width;
        this._cells = new Array(width).fill(new Cell(false));
    }

    public get cells() {
        return this._cells;
    }
}