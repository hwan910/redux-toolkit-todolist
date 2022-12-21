import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todos = createSlice({
  name: "todos",
  initialState: [
    {
      id: uuidv4(),
      title: "리액트 공부하기",
      contents: "리액트 기초를 공부합니다.",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "리액트 복습하기",
      contents: "리액트를 복습 합니다.",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "리액트 예습하기!!",
      contents: "리액트를 예습 합니다.",
      isDone: true,
    },
  ],
  reducers: {
    addTodos(state, action) {
      return [...state, action.payload];
    },
    deleteTodos(state, action) {
      return state.filter((list) => list.id !== action.payload);
    },
    switchTodos(state, action) {
      return state.map((list) => {
        if (list.id === action.payload) {
          return { ...list, isDone: !list.isDone };
        } else {
          return list;
        }
      });
    },
  },
});

export const { addTodos, deleteTodos, switchTodos } = todos.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
