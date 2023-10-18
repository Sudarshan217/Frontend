// Deposit Money
export const storeToken = (token)=>{
    return (dispatch)=>{
        dispatch({
            type:'store',
            payload:token
        })
    }
}

// Withdraw Money
export const removeToken = (token)=>{
    return (dispatch)=>{
        dispatch({
            type:'remove',
            payload:token
        })
    }
}