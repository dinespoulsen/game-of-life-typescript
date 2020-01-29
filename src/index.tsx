import * as React from "react";
import * as ReactDOM from "react-dom";
import { Game } from "./components/game";
import { Grid } from "./domain/grid";

ReactDOM.render(
    <Game initialState={new Grid(5, 5).cells}/>,
    document.getElementById("game")
);