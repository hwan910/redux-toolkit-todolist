import { useSelector, useDispatch } from "react-redux";
import { deleteTodos, switchTodos } from "../../config/configStore";
import { useNavigate } from "react-router-dom";
import { Card, Botton, View, DelBotton } from "./styled";

const Todo = ({ isActive }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    dispatch(deleteTodos(id));
    navigate("/");
  };
  const handleSwitchClick = (id) => {
    console.log(id);
    dispatch(switchTodos(id));
  };
  return (
    <>
      {todos
        .filter((list) => list.isDone !== isActive)
        .map((list) => {
          return (
            <Card key={list.id}>
              <div>
                <Botton onClick={() => handleSwitchClick(list.id)}>
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
              <DelBotton onClick={() => handleDeleteClick(list.id)}>
                ❌
              </DelBotton>
            </Card>
          );
        })}
    </>
  );
};

export default Todo;
