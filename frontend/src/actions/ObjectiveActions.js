import Axios from "axios";
import {
  OBJECTIVE_LIST_FAIL,
  OBJECTIVE_LIST_REQUEST,
  OBJECTIVE_LIST_SUCCESS,
} from "../constants/objectiveConstants";

export const listObjectives = (userId) => async (dispatch) => {
  dispatch({ type: OBJECTIVE_LIST_REQUEST });

  try {
    const { data } = await Axios.get(`/companies/${userId}.json/`);
    console.log(data);
    dispatch({ type: OBJECTIVE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: OBJECTIVE_LIST_FAIL, payload: error.message });
  }
};


