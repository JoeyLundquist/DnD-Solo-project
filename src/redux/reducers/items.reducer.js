export const itemSearchReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_SEARCH_RESULTS':
            return action.payload
        default:
            return state
    }


}

export const inventoryItems = (state = [], action) => {

    switch(action.type){
        case 'SET_INVENTORY':
            return action.payload
        default: 
            return state;
    }
}

export const moniesReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MONIES':
            return action.payload
        default:
            return state;
    }
}
