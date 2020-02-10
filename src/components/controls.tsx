import * as React from 'react';
import { useContext } from 'react';
import { ControlsContext } from './controlsContext';

export function Controls() {
    const { isPlaying, toggleIsPlaying } = useContext(ControlsContext);
    return <div className="controls">
        <button className={`${isPlaying ? 'pause' : 'play'}-button`} onClick={() => toggleIsPlaying()}></button>
        </div>
}