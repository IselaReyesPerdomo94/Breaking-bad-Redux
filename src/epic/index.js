import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { BASE_URL } from '../utils/constants';
import { START_FETCH_CHARACTER, fetchCharacterSuccess, fetchCharacterError } from '../ducks/characters';
import { START_FETCH_QUOTES, fetchQuotesSuccess, fetchQuotesError } from '../ducks/quotes';

export const characterEpic = action$ => action$.pipe(
    ofType(START_FETCH_CHARACTER),
    mergeMap(() =>
        ajax.getJSON(`${BASE_URL}characters`)
        .pipe(
            map(response => fetchCharacterSuccess(response)),
            catchError(error => fetchCharacterError(error))
        )
    ))

export const quotesEpic = action$ => action$.pipe(
    ofType(START_FETCH_QUOTES),
    mergeMap(() => ajax.getJSON(`${BASE_URL}quotes`)
        .pipe(
            map(response => fetchQuotesSuccess(response)),
            catchError(error => fetchQuotesError(error))
        )
    ))