import * as React from "react";
import * as ReactDOM from "react-dom";
import { Game } from "./components/game";
import { Grid } from "./domain/grid";
import { applyPattern, GOSPER_GLIDER_GUN } from './domain/pattern';
import { ControlsProvider } from './components/controlsProvider';

const grid = new Grid(30, 38);
applyPattern(grid, GOSPER_GLIDER_GUN);

ReactDOM.render(
    <ControlsProvider><Game grid={grid}/></ControlsProvider>,
    document.getElementById("game")
);