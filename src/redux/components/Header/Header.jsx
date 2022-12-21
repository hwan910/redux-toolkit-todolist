import { useNavigate } from "react-router-dom";
import Head from "./styled";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Head
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={process.env.PUBLIC_URL + "/logo.png"}></img> To-Do
    </Head>
  );
};
export default Header;
