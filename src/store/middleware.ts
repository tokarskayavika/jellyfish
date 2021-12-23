import { Middleware } from "redux";
import {
    burstBubble,
    changeRafID,
    removeLife,
    ressurectJelly
} from "./events";
import {
    sharkBitesJelly,
    jellyTouchesBubble,
    sharkPosition,
    remainingLives,
    rafID
} from "./selectors";

const biteSound = new Audio("assets/bite.wav");
biteSound.volume = .20;
biteSound.load();

var bubbleSound = new Audio("assets/bubble.wav");
bubbleSound.volume = .20;
bubbleSound.load();

export const middleware = (store) => (next) => (action) => {
    const lives = remainingLives(store.getState());
    const rafId = rafID(store.getState());

    if (action.type === 'CHANGE_RAF_ID') {
        const shark = sharkPosition(store.getState());
        const jellyIsDead = sharkBitesJelly(store.getState());
        const bubbleBurst = jellyTouchesBubble(store.getState());

        if (jellyIsDead) {
            biteSound.play();

            store.dispatch(ressurectJelly(shark.y));
            store.dispatch(removeLife());
        }

        if (bubbleBurst) {
            bubbleSound.play();

            store.dispatch(burstBubble(bubbleBurst.index));
        }
    }

    if (lives === 0) { //stack
        store.dispatch(changeRafID(cancelAnimationFrame(rafId)));
    }

    let result = next(action);
    return result;
}