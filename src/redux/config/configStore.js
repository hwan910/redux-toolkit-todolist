import { configureStore } from "@reduxjs/toolkit";
import todos from "../modueles/TodoSlice";

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
