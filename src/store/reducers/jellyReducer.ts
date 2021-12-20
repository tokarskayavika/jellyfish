import { height, width } from "../../constants";

const defaultState = {
    position: {
        x: 100, y: 250
    },
    sprite: {
        x: 20, y: 69
    }
};

const step = 30;

export default function jellyReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'CHANGE_JELLY_POSITION': {
            console.log('ssss');
            const { x, y } = state.position;
            if (payload === "ArrowDown") {
                return {
                    ...state,
                    position: {
                        ...state.position,
                        y: y + step + 69 < height ? y + step : y,
                    },
                    sprite: {
                        x: 20, y: 69
                    }
                }
            } else if (payload === "ArrowUp") {
                return {
                    ...state,
                    position: {
                        ...state.position,
                        y: y - step < 0 ? y : y - step,
                    },
                    sprite: {
                        x: 20, y: 0,
                    }
                }
            } else if (payload === "ArrowRight") {
                return {
                    ...state,
                    position: {
                        ...state.position,
                        x: x + step + 40 < width ? x + step : x,
                    },
                    sprite: {
                        x: 20, y: 133,
                    }
                }
            } else if (payload === "ArrowLeft") {
                return {
                    ...state,
                    position: {
                        ...state.position,
                        x: x - step < 0 ? x : x - step,
                    },
                    sprite: {
                        x: 20, y: 200,
                    }
                }
            }
        }

        default:
            return state;
    }
}