export const itemDetailReducer = (state={}, action) => {
    switch(action.type){
        case 'SET_ITEM_DETAILS':
            return action.payload
        default: 
            return state
    }
}

export const inventoryItemDetail = (state = {}, action) => {
    switch(action.type){
        case 'SET_INVENTORY_ITEM_DETAIL':
            return action.payload;
        default:
            return state
    }
}

