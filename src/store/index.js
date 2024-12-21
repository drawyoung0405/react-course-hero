import { combineReducers, createStore } from "redux";

import { appReducer } from "../redux/app.reducer";
import { todoReducer } from "../redux/todo.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer
});

export const store = createStore(rootReducer);

/* store
{
  app: {
    isLoading: false,
    errorMessage: ''
  },
  todo: {
    todos: [],
    filters: 'active'
  }
}
*/