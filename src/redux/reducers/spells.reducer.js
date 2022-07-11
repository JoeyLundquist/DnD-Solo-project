export const spellsListReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_AVAILABLE_SPELL_LIST':
            return action.payload
        case 'SET_PREPARED_SPELL_LIST':
            return action.payload
        default:
            return state
    }
}

export const spellDetailReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_SPELL_DETAILS':
            return action.payload
        default:
            return state;
    }
}

export const preparedSpellsList = (state = [], action) => {
    switch(action.type){
        case 'SET_PREPARED_SPELLS':
            return action.payload
        default: 
            return state;
    }
}