
const loginInitialState = {
    loading : false, 
    error : false, 
    login : localStorage.getItem("username") || [],
}

export const loginReducer = (state = loginInitialState, action) => {
    switch(action.type){
        
    }
    
}