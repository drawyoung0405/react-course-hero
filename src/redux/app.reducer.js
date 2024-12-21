import { SET_LOADING, SET_ERROR_MESSAGE } from "./app.action"

const initialState = {
  isLoading: false,
  errorMessage: ''
}

export const appReducer = (state = initialState, { type, payload }) => {
  console.log('appReducer', type)
  switch(type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: payload
      }
    }
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: payload
      }
    }
    default:
      return state;
  }
}