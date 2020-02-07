import * as React from 'react';
import {useState, useEffect, useContext, Fragment}  from 'react';
import { GridView } from './grid';
import { iterateGame } from '../domain/iterateGame';
import { Grid } from '../domain/grid';
import { ControlsContext } from './controlsContext';
import { Controls } from './controls';

interface GameProps {
    grid: Grid
}

export const Game = ({ grid }: GameProps) => {
    const [gameState, setGameState] = useState(grid.cells);
    const { isPlaying } = useContext(ControlsContext);
    
    let interval : number;
    useEffect(() => {
        interval = setInterval(() => {
            if(isPlaying) {
                const newState = iterateGame(grid);
                grid.cells = newState;
                setGameState(newState);
            }
        }, 100);

        return () => clearInterval(interval);
    })
    return (
        <Fragment>
            <GridView rows={gameState} />
            <Controls></Controls>
        </Fragment>
    )
};