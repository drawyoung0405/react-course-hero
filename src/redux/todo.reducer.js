import { SET_TODO, SET_FILTERS } from "./todo.action"

const initialState = {
  todos: [],
  filters: 'active'
}

export const todoReducer = (state = initialState, { type, payload }) => {
  console.log('todoReducer', type)
  switch(type) {
    case SET_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload || {}]
      }
    }
    case SET_FILTERS: {
      return {
        ...state,
        filters: payload || state.filters
      }
    }
    default:
      return state;
  }
}