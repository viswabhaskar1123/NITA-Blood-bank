import axios from 'axios';
import {
  BLOOD_STOCK_REQUEST,
  BLOOD_STOCK_SUCCESS,
  BLOOD_STOCK_FAIL,
} from '../constants/bloodConstants';

// Get blood stock
export const getBloodStock = () => async (dispatch) => {
  try {
    dispatch({ type: BLOOD_STOCK_REQUEST });

    const { data } = await axios.get('/api/blood/stock');

    dispatch({
      type: BLOOD_STOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BLOOD_STOCK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
