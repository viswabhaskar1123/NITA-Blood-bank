// client/src/reducers/bloodStockReducers.js
import {
    BLOOD_STOCK_LIST_REQUEST,
    BLOOD_STOCK_LIST_SUCCESS,
    BLOOD_STOCK_LIST_FAIL,
    BLOOD_STOCK_UPDATE_REQUEST,
    BLOOD_STOCK_UPDATE_SUCCESS,
    BLOOD_STOCK_UPDATE_FAIL,
    BLOOD_STOCK_UPDATE_RESET,
  } from '../constants/bloodStockConstants';
  
  export const bloodStockListReducer = (state = { bloodStock: [] }, action) => {
    switch (action.type) {
      case BLOOD_STOCK_LIST_REQUEST:
        return { loading: true, bloodStock: [] };
      case BLOOD_STOCK_LIST_SUCCESS:
        return { loading: false, bloodStock: action.payload };
      case BLOOD_STOCK_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const bloodStockUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case BLOOD_STOCK_UPDATE_REQUEST:
        return { loading: true };
      case BLOOD_STOCK_UPDATE_SUCCESS:
        return { loading: false, success: true, bloodStock: action.payload };
      case BLOOD_STOCK_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case BLOOD_STOCK_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };