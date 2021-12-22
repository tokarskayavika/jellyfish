import { height, width } from "../../constants";

const defaultState = {
    position: {
        x: 100, y: 250
    },
    sprite: {
        x: 20, y: 69
    }
};

const step = 50;

export default function jellyReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'CHANGE_JELLY_POSITION': {
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

        case "RESSURECT_JELLY" : {
            const jellyY = payload > 300 ? 0 : height - 80;

            return {
                ...state,
                sprite: defaultState.sprite,
                position: {
                    x: width / 2, y: jellyY,
                }
            }
        }

        default:
            return state;
    }
}