import { Cell } from "./cell";

export function iterateGame(state: Cell[][]) : Cell[][] {
    return state.map((row) => {
        row.forEach((cell) => {
            cell.iterate();
        })
        return row;
    })
}