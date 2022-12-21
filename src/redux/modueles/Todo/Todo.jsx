import { useSelector, useDispatch } from "react-redux";
import { addTodos, deleteTodos } from "../../../todos";
import { useNavigate } from "react-router-dom";
import { Card, Botton, View, DelBotton } from "./styled";

const Todo = ({ isActive }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = (event) => {
    dispatch(deleteTodos(event.target.value));
    console.log(`[${event.target.value}]가 삭제되었습니다.`);
    navigate("/");
  };
  const handleSwitchClick = (event) => {
    const target = todos.find((element) => element.id === event.target.value);
    target.isDone === false ? (target.isDone = true) : (target.isDone = false);
    const copy = [...todos];
    dispatch(addTodos(copy));
    console.log(`[${target.title}]가 (완료/취소)되었습니다!`);
  };

  return (
    <>
      {todos
        .filter((list) => list.isDone !== isActive)
        .map((list) => {
          return (
            <Card key={list.id}>
              <div>
                <Botton value={list.id} onClick={handleSwitchClick}>
                  {isActive === true ? "" : "✔️"}
                </Botton>
                <View
                  onClick={() => {
                    navigate(`/detail/${list.title}`);
                  }}
                >
                  <h4 className={isActive !== true ? "done" : ""}>
                    {list.title}
                  </h4>
                </View>
              </div>
              <DelBotton value={list.title} onClick={handleDeleteClick}>
                ❌
              </DelBotton>
            </Card>
          );
        })}
    </>
  );
};

export default Todo;
