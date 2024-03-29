import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Detail } from "./styled";
import Header from "../../redux/components/Header";
import Input from "../../redux/components/Input";
import TodoList from "../../redux/components/TodoList";
import { Home, Section, Article, Nav } from "../HomePage/styled";
const DetailPage = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);
  const list = todos.find((list) => list.title === param.title);
  return (
    <Home>
      <Header></Header>
      <Section>
        <Article>
          <TodoList isActive={true}></TodoList>
          <TodoList isActive={false}></TodoList>
        </Article>
        <Nav>
          <Input></Input>
          <Detail>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              닫기
            </a>
            <h4>{list?.title}</h4>
            <div>{list?.contents}</div>
            <p>Id: {list?.id.slice(0, 8)}</p>
          </Detail>
        </Nav>
      </Section>
    </Home>
  );
};
export default DetailPage;
