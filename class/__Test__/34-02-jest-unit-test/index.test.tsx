import { render, screen } from "@testing-library/react";
import JestunitTestPage from "../../pages/34-02-jest-unit-test";
import "@testing-library/jest-dom";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(<JestunitTestPage />);

  const myText1 = screen.getByText("철수는 13살 입니다."); // 이 텍스트가 있니
  expect(myText1).toBeInTheDocument(); // 지금 그려진 문서에 있는지 체크

  const myText2 = screen.getByText("철수의 취미 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
