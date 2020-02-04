import { Grid } from './grid';
import { Coordinate } from './coordinate';
import { CellStatus } from './cellStatus';

export function applyPattern(grid: Grid, pattern: Coordinate[]) {
    pattern.forEach((coordinate) => {
        const cell = grid.getCell(coordinate.x, coordinate.y);
        cell.status = CellStatus.Alive;
    });
}

export const GOSPER_GLIDER_GUN : Coordinate[] = [
    new Coordinate(1, 5),
    new Coordinate(1, 6),
    new Coordinate(2, 5),
    new Coordinate(2, 6),
    new Coordinate(11, 5),
    new Coordinate(11, 6),
    new Coordinate(11, 7),
    new Coordinate(12, 4),
    new Coordinate(12, 8),
    new Coordinate(13, 3),
    new Coordinate(13, 9),
    new Coordinate(14, 3),
    new Coordinate(14, 9),
    new Coordinate(15, 6),
    new Coordinate(16, 4),
    new Coordinate(16, 8),
    new Coordinate(17, 5),
    new Coordinate(17, 6),
    new Coordinate(17, 7),
    new Coordinate(18, 6),   
    new Coordinate(21, 3),
    new Coordinate(21, 4),
    new Coordinate(21, 5),
    new Coordinate(22, 3),
    new Coordinate(22, 4),
    new Coordinate(22, 5),
    new Coordinate(23, 2),
    new Coordinate(23, 6),
    new Coordinate(25, 1),
    new Coordinate(25, 2),
    new Coordinate(25, 6),
    new Coordinate(25, 7),
    new Coordinate(35, 3),
    new Coordinate(35, 4),
    new Coordinate(36, 3),
    new Coordinate(36, 4),
];