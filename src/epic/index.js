import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';

import { BASE_URL } from '../utils/constants';
import { START_FETCH_CHARACTER, fetchCharacterSuccess, fetchCharacterError } from '../ducks/characters';
import { START_FETCH_QUOTES, fetchQuotesSuccess, fetchQuotesError } from '../ducks/quotes';

export const characterEpic = action$ => action$.pipe(
    ofType(START_FETCH_CHARACTER),
    switchMap(action => ajax.getJSON(`${BASE_URL}characters`).pipe(
        map(response => fetchCharacterSuccess(response))
    ))
    .catch(error => fetchCharacterError(error))
)

export const quotesEpic = action$ => action$.pipe(
    ofType(START_FETCH_QUOTES),
    switchMap(action => ajax.getJSON(`${BASE_URL}quotes`).pipe(
        map(response => fetchQuotesSuccess(response))
    ))
    .catch(error => fetchQuotesError(error))
)