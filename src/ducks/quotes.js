//Actions
export const START_FETCH_QUOTES = 'START_FETCH_QUOTES';
export const FETCH_QUOTES_PENDING = 'FETCH_QUOTES_PENDING';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR';

//Reducer
const quotes = (state = {}, action) => {
    switch (action.type) {
        case FETCH_QUOTES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                pending: false,
                quotes: action.quotes
            }
        case FETCH_QUOTES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

//Actions creators
export const startFetchQuotes = () => {
    return {
        type: START_FETCH_QUOTES
    }
}

export const fetchQuotesPending = () => {
    return {
        type: FETCH_QUOTES_PENDING
    }
}

export const fetchQuotesSuccess = (quotes) => {
    return {
        type: FETCH_QUOTES_SUCCESS,
        quotes: quotes
    }
}

export const fetchQuotesError = (error) => {
    return {
        type: FETCH_QUOTES_ERROR,
        error: error
    }
}

export default quotes;