import * as React from "react";
import { CellView } from './cell';
import { Cell } from '../domain/cell';

interface GridRowProps {
    cells: Cell[]
}

export function RowView(props: GridRowProps) {
    const cells = props.cells.map((cell) => <CellView status={cell.status}></CellView>)
    return (
        <div className="row">
            {cells}
        </div>
    )
}