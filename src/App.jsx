import Router from "./shared/Router";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const callAxios = () => {
    axios.get("http://localhost:3001/todos").then((response) => {
      alert(response.data[1].title);
    });
  };
  // useEffect(() => {
  //   callAxios();
  // }, []);
  return (
    <>
      <button id="bt" onClick={callAxios}>
        버튼
      </button>
      <Router />;
    </>
  );
}
export default App;
