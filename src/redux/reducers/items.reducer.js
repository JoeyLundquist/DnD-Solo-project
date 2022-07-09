const itemSearchReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_SEARCH_RESULTS':
            return action.payload
        case 'SET_INVENTORY':
            return action.payload
        default:
            return state
    }


}

export default itemSearchReducer;