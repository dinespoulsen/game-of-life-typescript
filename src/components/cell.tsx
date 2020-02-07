import * as React from "react";
import { CellStatus } from "../domain/cellStatus";
import { useContext } from 'react';
import { ControlsContext } from './controlsContext';

interface CellProps {
    status: CellStatus
}

function getStatusClass(status: CellStatus) {
    switch (status) {
        case CellStatus.Alive:
            return '__alive';
        case CellStatus.Dying:
            return '__dying';
        default:
            return '';
    }
}

export function CellView({ status }: CellProps) {
    const { isPlaying } = useContext(ControlsContext);
    return (
        <div className={`cell cell${getStatusClass(status)} cell${isPlaying ? '' : '--paused'}`}></div>
    );
}