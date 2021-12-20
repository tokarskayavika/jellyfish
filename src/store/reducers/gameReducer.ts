const defaultState = {
    lives: 9,
    score: 0,
    paused: false,
};

export default function gameReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'PAUSE_GAME': {
            return {
                ...state,
                paused: !state.paused,
            }
        }

        default:
            return state;
    }
}