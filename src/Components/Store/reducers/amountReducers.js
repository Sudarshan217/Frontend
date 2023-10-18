const reducer = (state , action) =>  {
    if(!action){
        return state
    }
    if(action?.payload === undefined || action?.payload === null || action?.payload === isNaN || typeof action?.payload !== typeof 1){
        return state
    }
    if (action.type === 'store') {
        return {
            ...state,
            token: state?.token !== undefined && state?.token !== null ? state.token + action.payload : action?.payload
        }
    }
    else if (action.type === 'remove') {
        return {
            ...state,
            token: state?.token !== undefined && state?.token !== null ? state.token - action.payload : action?.payload
        }
    }
    else {
        return state;
    }
}

export default reducer;