import styled from "@emotion/styled";

export const Mypage = styled.main`
  width: 1400px;
  padding: 30px 0;
  margin: 0 auto;
`;

export const MypageTitle = styled.section`
  border-top: 1px solid #ddd;
  padding: 20px 10px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const MypageSub = styled.section`
  padding: 10px 10px;
  border-top: 1px solid #ddd;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      font-size: 16px;
      img {
        height: 75px;
      }
    }
  }
`;

export const Namebx = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 300px;
`;

export const ProductName = styled.p`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
