const defaultState = {
    lives: 9,
    score: 0,
    paused: false,
};

export default function gameReducer(state = defaultState, action) {
    switch (action.type) {
        // case 'PAUSE': {
        //     return {
        //         ...state,
        //         paused: true,
        //     }
        // }

        default:
            return state;
    }
}