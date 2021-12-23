const defaultState = {
    lives: 2,
    score: 0,
    paused: false,
    rafId: null,
    over: false,
};

export default function gameReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'PAUSE_GAME': {
            return {
                ...state,
                paused: !state.paused,
            }
        }

        case 'CHANGE_RAF_ID': {
            return {
                ...state,
                rafId: payload,
            }
        }

        case 'REMOVE_LIFE': {
            return {
                ...state,
                lives: state.lives - 1,
                over: state.lives === 1,
            }
        }

        case 'RESTART_GAME': {
            return defaultState;
        }

        default:
            return state;
    }
}