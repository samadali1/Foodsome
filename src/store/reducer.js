const reducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER": {
            return {...state, user: action.data}
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
        
        default: {
            return state;
        }
    }
}

export default reducer;