
const loginInitialState = {
    loading : false, 
    error : false, 
    login : localStorage.getItem("username") || [],
}

export const loginReducer = (state = loginInitialState, action) => {
    switch(action.type){
        case "LOGIN_LO" : 
            return {
                ...state,
                loading : true
            }
        case "LOGIN_SUCCESS" : 
            return {
                ...state,
                loading : false,
                login : action.payload
            }
        case "LOGIN_FAILURE" : 
            return {
                ...state,
                loading : false,
                error : true
            }
        default : 
            return state
    }
    
}