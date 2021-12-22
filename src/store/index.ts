import { createStore, combineReducers, applyMiddleware } from 'redux';
import { sharkReducer, jellyReducer, gameReducer, bubblesReducer } from './reducers';
import { middleware } from './middleware';

export const store = createStore(combineReducers({
    shark: sharkReducer,
    jelly: jellyReducer,
    game: gameReducer,
    bubbles: bubblesReducer,
}), {}, applyMiddleware(middleware));