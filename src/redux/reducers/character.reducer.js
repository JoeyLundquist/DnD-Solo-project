export const characterReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RACES_AND_CLASSES':
            return action.payload;
        case 'SET_CHARACTER_INFO':
            return action.payload
        case 'UPDATE_COPPER_PIECES':
            return {...state, copper_pieces: action.payload}
        case 'UPDATE_SILVER_PIECES':
            return {...state, silver_pieces: action.payload}
        case 'UPDATE_ELECTRUM_PIECES':
            return {...state, electrum_pieces: action.payload}
        case 'UPDATE_GOLD_PIECES':
            return {...state, gold_pieces: action.payload}
        case 'UPDATE_PLATINUM_PIECES':
            return {...state, platinum_pieces: action.payload}

        default:
            return state;
    }
}

export const characterList = (state = [], action) => {
    switch(action.type){
        case 'SET_CHARACTER_LIST':
            return action.payload
        default:
            return state
    }
}