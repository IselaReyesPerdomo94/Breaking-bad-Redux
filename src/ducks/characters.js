//Actions
export const START_FETCH_CHARACTER = 'START_FETCH_CHARACTER';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_ERROR = 'FETCH_CHARACTER_ERROR';

//state
const charactersState = {
    loading: false,
    characters: [],
    error: null
}

//Reducer
const characters = (state = charactersState, action) => {
    switch (action.type) {
        case START_FETCH_CHARACTER:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.characters
            }
        case FETCH_CHARACTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

//Action creators
export const startFetchCharacters = () => ({
    type: START_FETCH_CHARACTER
})

export const fetchCharacterSuccess = characters => ({
    type: FETCH_CHARACTER_SUCCESS,
    characters: characters
})

export const fetchCharacterError = error => ({
    type: FETCH_CHARACTER_ERROR,
    error: error
})

//Selectors
export const getCharacters = state => state.characters.characters;
export const getLoadingStatus = state => state.characters.loading;

export default characters;