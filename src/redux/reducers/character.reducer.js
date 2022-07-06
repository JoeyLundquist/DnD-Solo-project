const characterReducer = (state = {}, action) => {
    switch(action.type){
        case 'CREATE_CHARACTER':
            return action.payload;

        default:
            return state;
    }
}

export default characterReducer;