import { render } from "@testing-library/react";
import JestunitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("기존 사진이랑 바뀐게 없는지 비교해보자!! - 스냡샷 테스트", () => {
  const result = render(<JestunitTestPage />);
  expect(result.container).toMatchSnapshot(); // 기존값이랑 바뀌었는지 검증할 뿐
});
