import { createStore, combineReducers } from 'redux';
import { sharkReducer, jellyReducer, gameReducer } from './reducers';

export const store = createStore(combineReducers({
    shark: sharkReducer,
    jelly: jellyReducer,
    game: gameReducer,
}), {});