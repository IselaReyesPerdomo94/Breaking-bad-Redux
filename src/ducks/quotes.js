//Actions
export const START_FETCH_QUOTES = 'START_FETCH_QUOTES';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR';

//State
const quotesState = {
    loading: false,
    quotes: [],
    error: null
}

//Reducer
const quotes = (state = quotesState, action) => {
    switch (action.type) {
        case START_FETCH_QUOTES:
            return {
                ...state,
                loading: true
            }
        case FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                quotes: action.quotes
            }
        case FETCH_QUOTES_ERROR:
            return {
                ...state,
                loading: false,
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