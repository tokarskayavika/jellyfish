import { createStore, combineReducers } from 'redux';
import { sharkReducer, jellyReducer, gameReducer, bubblesReducer } from './reducers';

export const store = createStore(combineReducers({
    shark: sharkReducer,
    jelly: jellyReducer,
    game: gameReducer,
    bubbles: bubblesReducer,
}), {});