import { API_FETCH } from "../constant/actionTypesl"


export const fetchReducer = (state, action) => {
    switch(action.type) {
        case API_FETCH.LOADING:
            return {
                ...state,
                loading: true
            }
        case API_FETCH.SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload
            }
        case API_FETCH.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}