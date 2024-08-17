import { useEffect } from "react"
import { API_FETCH } from "../constant/actionTypesl";

export const useFetch = () => {
    const dispatch = useDispatch();
      
    useEffect(() => {
        const getData = () => {
          dispatch({type : API_FETCH.LOADING})
        }
    })


}