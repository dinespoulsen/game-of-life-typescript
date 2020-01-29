import { Cell } from "./cell";

export function iterateGame(grid: Cell[][]) : Cell[][] {
    return grid.map((row) => {
        row.forEach((cell) => {
            cell.iterate();
        })
        return row;
    })
}