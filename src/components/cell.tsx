import * as React from "react";
import { CellStatus } from "../domain/cellStatus";

interface CellProps {
    status: CellStatus
}

function getClassName(status: CellStatus) {
    switch (status) {
        case CellStatus.Alive:
            return 'alive';
        case CellStatus.Dying:
            return 'dying';
        default:
            return '';
    }
}

export function CellView({ status }: CellProps) {

    return (
        <div className={ `cell cell--${getClassName(status)}`}></div>
    );
}