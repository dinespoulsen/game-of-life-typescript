import * as React from 'react';
import {useState, useEffect}  from 'react';
import { GridView } from './grid';
import { iterateGame } from '../domain/iterateGame';
import { Grid } from '../domain/grid';

interface GameProps {
    grid: Grid
}

export const Game = ({ grid }: GameProps) => {
    const [gameState, setGameState] = useState(grid.cells);
    
    let interval : number;
    useEffect(() => {
        interval = setInterval(() => {
            const newState = iterateGame(grid);
            grid.cells = newState;
            setGameState(newState);
        }, 100);

        return () => clearInterval(interval);
    })
    return <GridView rows={gameState} />
};