import InputBox from "./styled";
import { addTodos } from "../../modueles/TodoSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (newTodos.title.length < 1 || newTodos.contents.length < 1) {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(addTodos(newTodos));
      setTitle("");
      setContents("");
    }
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const newTodos = {
    id: uuidv4(),
    title: title,
    contents: contents,
    isDone: false,
  };

  return (
    <InputBox>
      <form onSubmit={handleSubmitClick}>
        <div>제목</div>
        <input value={title} onChange={handleTitleChange} />
        <div>내용</div>
        <textarea value={contents} onChange={handleContentsChange} />
        <button>추가하기</button>
      </form>
    </InputBox>
  );
};
export default Input;
