import * as React from 'react';
import {useState, useEffect}  from 'react';
import { Grid } from './grid';
import { getGrid } from '../domain/grid'
import { iterateGame } from '../domain/iterateGame';

interface GameProps {}

export const Game = (props: GameProps) => {
    const [gameState, setGameState] = useState(getGrid(5, 5));
    useEffect(() => {
        setInterval(() => {
            const newState = iterateGame(gameState);
            setGameState(newState);
        }, 10000)
    })
    return <Grid rows={gameState} />
};