import { height, width } from "../../constants";

const speed = 6;

const defaultState = {
    position: {
        x: -400, y: Math.random() * (height - 200)
    },
};

export default function sharkReducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHANGE_SHARK_POSITION': {
            return {
                ...state,
                position: {
                    ...state.position,
                    x: state.position.x + speed > 2 * width ? 
                        defaultState.position.x : 
                        state.position.x + speed,
                    y: state.position.x + speed > width ? 
                        Math.random() * (height - 200) : 
                        state.position.y
                }
            }
        }

        default:
            return state;
    }
}