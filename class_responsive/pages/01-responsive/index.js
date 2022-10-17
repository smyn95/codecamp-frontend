import styled from '@emotion/styled';
import { breakpoints } from '../../src/styles/media';

const Item = styled.div`
  width: 95%;
  height: 400px;
  background-color: red;

  //tablet 환경에서의 미디어쿼리
  // 768px 이상 991px 이하
  @media ${breakpoints.tablet} {
    background-color: green;
  }

  //mobile 환경에서의 미디어쿼리
  // 767Px 이하
  @media ${breakpoints.mobile} {
    background-color: blue;
  }
`;

export default function ResponsivePage() {
  return (
    <>
      <Item>박스입니다.</Item>
    </>
  );
}
