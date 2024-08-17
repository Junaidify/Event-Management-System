import { useEffect } from "react";
import { API_FETCH } from "../constant/actionTypesl";
import axios from "axios";
import { useDispatch } from "react-redux";

export const useFetch = (events) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      dispatch({ type: API_FETCH.LOADING });

      try {
        const res = await axios.get(`http://localhost:3000/`);
        const data = res.data;
        dispatch({ type: API_FETCH.SUCCESS, payload: data });
        console.log(data);
      } catch (err) {
        dispatch({ type: API_FETCH.ERROR, payload: err });
      }
    };

    getData();
  }, []);

  return;
};
