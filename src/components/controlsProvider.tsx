import * as React from 'react';
import { useState } from 'react';
import { ControlsContext } from './controlsContext';

interface IControlsProvider {
    children: any
}

export function ControlsProvider(props: IControlsProvider) {
    const toggleIsPlaying = () => {
        setIsPlaying((previousState) => {
            return {
                ...previousState,
                isPlaying: !previousState.isPlaying
            }
        });
    }

    const isPlayingState = {
        isPlaying: true,
        toggleIsPlaying
    };
    
    const [isPlaying, setIsPlaying] = useState(isPlayingState);

    return (
    <ControlsContext.Provider value={isPlaying}>{props.children}</ControlsContext.Provider>
    );
}