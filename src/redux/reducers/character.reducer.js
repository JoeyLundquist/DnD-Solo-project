const characterReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RACES_AND_CLASSES':
            return action.payload;
        case 'SET_CHARACTER_INFO':
            return action.payload
        default:
            return state;
    }
}

export default characterReducer;