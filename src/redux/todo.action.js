// constant
export const SET_TODO = 'TODO/SET_TODO';
export const SET_FILTERS = 'TODO/SET_FILTERS';

// action creator
export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload
  }
}

export const setFilters = (payload) => {
  return {
    type: SET_FILTERS,
    payload
  }
}