export const characterReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RACES_AND_CLASSES':
            return action.payload;
        case 'SET_CHARACTER_INFO':
            return action.payload

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