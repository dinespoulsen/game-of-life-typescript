import { Cell } from "./cell";
import { Grid } from './grid';
import { CellStatus } from './cellStatus';

function getCellStatus(cell: Cell, aliveNeighbours: number) : CellStatus {
    if(cell.status === CellStatus.Alive) {
        if((aliveNeighbours === 2 || aliveNeighbours === 3)) {
            return CellStatus.Alive
        } else {
            return CellStatus.Dying;
        }
    } else {
        if(aliveNeighbours === 3) {
           return CellStatus.Alive;
        } else {
            return CellStatus.Dead;
        }
    }
}

export function applyRules(cell: Cell, grid: Grid) : Cell {
    const aliveNeighbours = grid.getNeighbours(cell.coordinates)
        .filter((cell) => {
            return cell.status === CellStatus.Alive;
        })
    const numberOfAliveNeighbours = aliveNeighbours.length;
    const { x, y } = cell.coordinates;
    switch (getCellStatus(cell, numberOfAliveNeighbours)) {
        case CellStatus.Alive:
            return new Cell(CellStatus.Alive, x, y);
        case CellStatus.Dying:
                return new Cell(CellStatus.Dying, x, y);
        case CellStatus.Dead:
            return new Cell(CellStatus.Dead, x, y);
        default:
            return new Cell(CellStatus.Dead, x, y);
    }
}