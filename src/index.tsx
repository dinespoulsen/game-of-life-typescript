import * as React from "react";
import * as ReactDOM from "react-dom";
import { Game } from "./components/game";
import { Grid } from "./domain/grid";
import { applyPattern, GOSPER_GLIDER_GUN } from './domain/pattern';

const grid = new Grid(30, 38);
applyPattern(grid, GOSPER_GLIDER_GUN);

ReactDOM.render(
    <Game grid={grid}/>,
    document.getElementById("game")
);