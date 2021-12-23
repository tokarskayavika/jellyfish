import { height, width } from "../../constants";

const defaultState = {
    list: []
};

const speed = 1.5;
const addTime = 1500;
let lastAdd = -1;

export default function gameReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'ANIMATE_BUBBLES': {
            const time = Date.now();

            let list = state.list
                .map(({ x, y }) => ({ x: x, y: y - speed}))
                .filter(({ y }) => y > -35);
                
            if (time > lastAdd + addTime) {
                list.push({
                    x: Math.random() * (width - 50) + 15,
		            y: height,
                })

                lastAdd = time;
            }

            return { ...state, list }
        }

        case 'BURST_BUBBLE': {
            const bubbles = state.list;
            bubbles.splice(payload, 1);

            return {
                ...state,
                list: bubbles,
            }
        }

        default:
            return state;
    }
}