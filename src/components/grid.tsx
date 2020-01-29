import * as React from "react";
import { RowView } from './row';
import { Row } from '../domain/row';

interface GridProps {
    rows: Row[]
}

export function Grid(props: GridProps) {
    const gridRows = props.rows.map((row) => {
        return <RowView cells={row.cells}></RowView>
    })
    return (
        <div className="grid">
            {gridRows}
        </div>
    )
}