const spellsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_AVAILABLE_SPELL_LIST':
            return action.payload
        case 'SET_PREPARED_SPELL_LIST':
            return action.payload
        default:
            return state
    }
}

export default spellsReducer;