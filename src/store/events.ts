export const actionCreator = (code) => {
    if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(code)) {
        return { type: 'CHANGE_JELLY_POSITION', payload: code }; 
    }

    if (code === 'Space') {
        return { type: 'PAUSE_GAME' };
    }

    return { type: '' }
}

export const changeSharkPosition = () => ({
    type: "CHANGE_SHARK_POSITION"
})