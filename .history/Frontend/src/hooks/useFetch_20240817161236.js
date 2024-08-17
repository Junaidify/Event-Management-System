import { useEffect } from "react";
import { API_FETCH } from "../constant/actionTypesl";
import axios from "axios";

export const useFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      dispatch({ type: API_FETCH.LOADING });

      try {
        const res = axios.get("http://localhost:3000/events");
        dispatch({ type: API_FETCH.SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: API_FETCH.ERROR, payload: err });
      }
    };
  });
};
