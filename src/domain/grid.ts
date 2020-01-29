import { Cell } from "./cell";

interface IGrid {
    cells: Cell[][]
}

export class Grid implements IGrid {
    private _cells: Cell[][];
    constructor(rows: number, width: number) {
        this.makeGrid(rows, width);
    }
    public makeGrid(rows: number, width: number) {
        let cells : Cell[][] = [];
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < width; x++) {
                row.push(new Cell(false, x, y));
            }
            cells.push(row);
        }
        this._cells = cells;
    }

    public get cells() {
        return this._cells;
    }
} 