import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// 가짜 useRouter 만들고, 가짜 push 넣어 놓기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 mutation 만들기(요청, 응답 모두)
const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        createBoardInput: {
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
          password: "1234",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "백엔드에서-받은-게시글ID",
          writer: "철수",
          title: "안녕하세요",
          contents: "반갑습니다",
        },
      },
    },
  },
];

it("API를 모킹하여 테스트하자!!", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "철수" },
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "안녕하세요" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "반갑습니다" },
  });

  // TDD => 테스트를 먼저 만들자!
  // fireEvent.chage(screen.getByRole("input-password"), {
  //   target: {value: "1234"}
  // })

  fireEvent.click(screen.getByRole("submit-button"));

  // 1. await를 기다리지 않으므로, await 윗부분 로그만 찍힘
  // expect(location.pathname).toBe("/boards/백엔드에서-받은-게시글ID");

  // 2. await를 기다리므로, await 아랫부분 로그도 찍힘
  // await waitFor(() => {
  //   expect(location.pathname).toBe("/boards/백엔드에서-받은-게시글ID");
  // });

  // 3. location.pathname 으로는 변경된 페이지를 알 수 없으므로, router.push로 확인
  await waitFor(() => {
    expect(push).toBeCalledWith("/boards/백엔드에서-받은-게시글ID");
  });
});
