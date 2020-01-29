import * as React from "react";

interface CellProps {
    alive: boolean
}

export function CellView(props: CellProps) {
    return (
        <div className={`cell ${props.alive ? 'cell--alive': ''}`}></div>
    );
}