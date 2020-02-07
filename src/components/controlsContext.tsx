import { createContext } from 'react'

export const ControlsContext = createContext({
    isPlaying: false,
    toggleIsPlaying: () => {}
});
