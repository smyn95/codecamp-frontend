import FreeboardList from "../../src/components/units/board/list/BoardList.container";
import LoginPage from "../login";

export default function FreeboardListPage() {
  return (
    <>
      <FreeboardList isEdit={false} update={false} />;
      <LoginPage />;
    </>
  );
}
