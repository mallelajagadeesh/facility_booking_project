// facilitiesReducer.js
const initialState = {
    facilities: [],
    loading: false,
    error: null,
  };
  
  export default function facilitiesReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_FACILITIES_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_FACILITIES_SUCCESS':
        return {
          ...state,
          loading: false,
          facilities: action.payload.facilities,
        };
      case 'FETCH_FACILITIES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          facilities: [],
        };
      default:
        return state;
    }
  }
  