import { Cell } from "./cell";
import { Coordinate } from './coordinate';
import { CellStatus } from "./cellStatus";

interface IGrid {
    cells: Cell[][],
    getCell: (x: number, y: number) => Cell
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
                row.push(new Cell(CellStatus.Dead, x, y));
            }
            cells.push(row);
        }
        this._cells = cells;
    }

    public get cells() {
        return this._cells;
    }

    public set cells(newCells) {
        this._cells = newCells;
    }

    private isInGrid(coordinates: Coordinate) : boolean {
        const { x, y } = coordinates
        return !!this._cells[y]?.[x];
    };

    public getCell(x: number, y: number) : Cell {
        return this._cells[y][x];
    }

    public getNeighbours(coordinate: Coordinate) : Cell[] {
        const { x, y } = coordinate;
        const northCoordinate = y + 1;
        const eastCoordinate = x + 1;
        const southCoordinate = y - 1;
        const westCoordinate = x - 1;
        const north : Coordinate = new Coordinate(x, northCoordinate);
        const northEast : Coordinate = new Coordinate(eastCoordinate, northCoordinate);
        const east : Coordinate = new Coordinate(eastCoordinate, y);
        const southEast : Coordinate = new Coordinate(eastCoordinate, southCoordinate);
        const south : Coordinate = new Coordinate(x, southCoordinate);
        const southWest : Coordinate = new Coordinate(westCoordinate, southCoordinate);
        const west : Coordinate = new Coordinate(westCoordinate, y);
        const northWest : Coordinate = new Coordinate(westCoordinate, northCoordinate);
    
        const neighbours = new Array(north, northEast, east, southEast, south, southWest, west, northWest);
        return neighbours
            .filter((coordinate) => {
                return this.isInGrid(coordinate);
            })
            .map((coordinates) => {
                return this.getCell(coordinates.x, coordinates.y);
            });
    }
} 