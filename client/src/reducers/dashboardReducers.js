// client/src/reducers/dashboardReducers.js
import {
    DASHBOARD_REQUEST,
    DASHBOARD_SUCCESS,
    DASHBOARD_FAIL,
  } from '../constants/dashboardConstants';
  
  export const dashboardReducer = (state = { dashboardData: {} }, action) => {
    switch (action.type) {
      case DASHBOARD_REQUEST:
        return { loading: true, dashboardData: {} };
      case DASHBOARD_SUCCESS:
        return { loading: false, dashboardData: action.payload };
      case DASHBOARD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };