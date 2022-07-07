const itemDetailReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_ITEM_DETAILS':
            return action.payload
        default: 
            return state
    }
}

export default itemDetailReducer;