import { configureStore, createSlice } from "@reduxjs/toolkit";

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
      title: "리액트 예습하기",
      contents: "리액트를 예습 합니다.",
      isDone: true,
    },
  ],
  reducers: (addTodos = (payload) => {
    return {
      type: ADD_TODOS,
      payload,
    };
  }),
});

export const { addTodos } = todos.actions;

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});
