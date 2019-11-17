import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { characters, quotes } from '../ducks';
import { characterEpic } from '../epic';

//combining reducers
export const rootReducer = combineReducers({
    characters,
    quotes
})

//combining epics
export const rootEpic = combineEpics(
    characterEpic,
)

const epicMiddleware = createEpicMiddleware();

//creating store
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(characterEpic)

export default store;