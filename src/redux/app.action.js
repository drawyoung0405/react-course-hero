// constant
export const SET_LOADING = 'TODO/SET_LOADING';
export const SET_ERROR_MESSAGE = 'TODO/SET_ERROR_MESSAGE';

// action creator
export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload
  }
}

export const setErrorMessage = (payload) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload
  }
}