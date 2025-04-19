 // client/src/reducers/donationReducers.js
 import {
    DONATION_REQUEST_CREATE_REQUEST,
    DONATION_REQUEST_CREATE_SUCCESS,
    DONATION_REQUEST_CREATE_FAIL,
    DONATION_REQUEST_CREATE_RESET,
    DONATION_REQUEST_LIST_REQUEST,
    DONATION_REQUEST_LIST_SUCCESS,
    DONATION_REQUEST_LIST_FAIL,
    DONATION_REQUEST_UPDATE_REQUEST,
    DONATION_REQUEST_UPDATE_SUCCESS,
    DONATION_REQUEST_UPDATE_FAIL,
    DONATION_REQUEST_UPDATE_RESET,
    DONATION_HISTORY_REQUEST,
    DONATION_HISTORY_SUCCESS,
    DONATION_HISTORY_FAIL,
  } from '../constants/donationConstants';
  
  export const donationRequestCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case DONATION_REQUEST_CREATE_REQUEST:
        return { loading: true };
      case DONATION_REQUEST_CREATE_SUCCESS:
        return { loading: false, success: true, donationRequest: action.payload };
      case DONATION_REQUEST_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case DONATION_REQUEST_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  export const donationRequestListReducer = (state = { donationRequests: [] }, action) => {
    switch (action.type) {
      case DONATION_REQUEST_LIST_REQUEST:
        return { loading: true, donationRequests: [] };
      case DONATION_REQUEST_LIST_SUCCESS:
        return { loading: false, donationRequests: action.payload };
      case DONATION_REQUEST_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const donationRequestUpdateReducer = (state = { donationRequest: {} }, action) => {
    switch (action.type) {
      case DONATION_REQUEST_UPDATE_REQUEST:
        return { loading: true };
      case DONATION_REQUEST_UPDATE_SUCCESS:
        return { loading: false, success: true, donationRequest: action.payload };
      case DONATION_REQUEST_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case DONATION_REQUEST_UPDATE_RESET:
        return { donationRequest: {} };
      default:
        return state;
    }
  };
  
  export const donationHistoryReducer = (state = { donationHistory: [] }, action) => {
    switch (action.type) {
      case DONATION_HISTORY_REQUEST:
        return { loading: true, donationHistory: [] };
      case DONATION_HISTORY_SUCCESS:
        return { loading: false, donationHistory: action.payload };
      case DONATION_HISTORY_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };