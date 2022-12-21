import { v4 as uuidv4 } from "uuid";

// 액션 value를 상수로 만들어 준다. 보통 한곳에 모여있다.
const ADD_TODOS = "ADD_TODOS";
const DELETE_TODOS = "DELETE_TODOS";
const SWITCH_TODOS = "SWITCH_TODOS";

// Action Creator
export const addTodos = (payload) => {
  return {
    type: ADD_TODOS,
    payload,
  };
};
export const deleteTodos = (payload) => {
  return {
    type: DELETE_TODOS,
    payload,
  };
};
export const switchTodos = (payload) => {
  return {
    type: SWITCH_TODOS,
    payload,
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return action.payload;
    case DELETE_TODOS:
      return state.filter((element) => element.title !== action.payload);
    case SWITCH_TODOS:
      return action.payload;

    default:
      return state;
  }
};

export default todos;
