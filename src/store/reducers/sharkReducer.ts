const defaultState = {
    position: {
        x: 0, y: 0
    },
    speed: 7,
};

export default function sharkReducer(state = defaultState, action) {
    switch (action.type) {
        case '': {
            
        }

        default:
            return state;
    }
}