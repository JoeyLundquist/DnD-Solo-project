const characterReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_RACES_AND_CLASSES':
            return action.payload;

        default:
            return state;
    }
}

export default characterReducer;