import * as React from 'react';
import {useState, useEffect}  from 'react';
import { GridView } from './grid';
import { iterateGame } from '../domain/iterateGame';
import { Cell } from "../domain/cell";

interface GameProps {
    initialState: Cell[][]
}

export const Game = (props: GameProps) => {
    const [gameState, setGameState] = useState(props.initialState);
    let interval : number;
    useEffect(() => {
        interval = setInterval(() => {
            const newState = iterateGame(gameState);
            setGameState(newState);
        }, 10000);

        return () => clearInterval(interval);
    }, [])
    return <GridView rows={gameState} />
};