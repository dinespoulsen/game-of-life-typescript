import * as React from "react";
import { RowView } from './row';
import { Cell } from "../domain/cell";

interface GridProps {
    rows: Cell[][]
}

export function GridView(props: GridProps) {
    const gridRows = props.rows.map((row) => {
        return <RowView cells={row}></RowView>
    })
    return (
        <div className="grid">
            {gridRows}
        </div>
    )
}