import { Cell } from "./cell";
import { applyRules } from './rules';
import { Grid } from './grid';

export function iterateGame(grid: Grid) : Cell[][] {
    return grid.cells.map((row) => {
        return row.map((cell) => {
            return applyRules(cell, grid);
        })
    });
}