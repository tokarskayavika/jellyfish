import { Middleware } from "redux";
import { ressurectJelly } from "./events";
import { sharkBitesJelly, jellyTouchesBubble, sharkPosition } from "./selectors";

const biteSound = new Audio("assets/bite.wav");
biteSound.volume = .20;

export const middleware = (store) => (next) => (action) => {

    // if (action.type === 'CHANGE_RAFID') {
    if (action.type === 'CHANGE_SHARK_POSITION') {
        const shark = sharkPosition(store.getState());
        const jellyIsDead = sharkBitesJelly(store.getState());
        const bubbleBurst = jellyTouchesBubble(store.getState());

        if (jellyIsDead) {
            biteSound.load();
            biteSound.play();

            store.dispatch(ressurectJelly(shark.y));
        }
    }

    let result = next(action);
    return result;
}