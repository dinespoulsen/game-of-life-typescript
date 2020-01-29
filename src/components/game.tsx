import * as React from "react";
import { Grid } from './grid';
import { getGrid } from '../domain/grid'

interface GameProps {}

export const Game = (props: GameProps) => <Grid rows={getGrid(5, 5)} />;