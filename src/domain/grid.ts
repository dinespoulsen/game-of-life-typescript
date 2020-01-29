import { Cell } from "./cell";

export function getGrid(rows: number, width: number) : Cell[][] {
    let grid : Cell[][] = [];
    for(let y = 0; y < rows; y++) {
        let row = []
        for(let x = 0; x < width; x++) {
            row.push(new Cell(false, x, y));
        }
        grid.push(row);
    }
    return grid;
}