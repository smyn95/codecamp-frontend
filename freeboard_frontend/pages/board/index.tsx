import { useRecoilState } from "recoil";
import { isLoginState } from "../../src/commons/store";
import FreeboardList from "../../src/components/units/board/list/BoardList.container";
import LoginPage from "../login";

export default function FreeboardListPage(props) {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const onclickIsOpne = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <FreeboardList isEdit={false} />
      {isLogin && <LoginPage onclickIsOpne={onclickIsOpne} />}
    </>
  );
}
