import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { characters, quotes } from '../ducks';
import { characterEpic, quotesEpic } from '../epic';

//combining reducers
export const rootReducer = combineReducers({
    characters,
    quotes
})

//combining epics
export const rootEpic = combineEpics(
    characterEpic,
    quotesEpic
)

const epicMiddleware = createEpicMiddleware();

//creating store
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpic)

export default store;