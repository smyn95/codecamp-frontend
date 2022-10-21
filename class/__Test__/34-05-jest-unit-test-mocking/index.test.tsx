import { fireEvent, render, screen } from "@testing-library/react";
import GraphqlMutationPage from "../../pages/34-05-jest-unit-test-mocking";
import "@testing-library/jest-dom";

it("API를 모킹하여 테스트하자!!", () => {
  render(<GraphqlMutationPage />);
  fireEvent.change(screen.getByRole("input-writer"));
});
