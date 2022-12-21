import { Main, MainTitle, MainContents } from "./styled";
import Todo from "../Todo";

const TodoList = ({ isActive }) => {
  return (
    <Main>
      <MainContents>
        <MainTitle>{isActive === true ? "Working" : "Done"}</MainTitle>
        <Todo isActive={isActive} />
      </MainContents>
    </Main>
  );
};
export default TodoList;
