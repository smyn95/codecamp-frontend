import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { themeState } from '../../src/store';

const Wrapper = styled.section``;

const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
`;

const Content = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.primaryColor};
  background: ${(props) => props.theme.bgColor};
`;

const Button = styled.button`
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
`;

export default function CommonsThemePage(props) {
  // const theme = useTheme();
  const [theme, setTheme] = useRecoilState(themeState);

  const onClickButton = () => {
    setTheme((prev) => {
      if (prev === 'light') {
        return 'dark';
      } else {
        return 'light';
      }
    });
  };

  console.log(theme);
  return (
    <>
      <Wrapper>
        <Title>공통 CSS 연습</Title>
        <Content>
          <p>테스트용 박스 영역입니다.</p>
        </Content>
        <Button onClick={onClickButton}>버튼입니다.</Button>
      </Wrapper>
    </>
  );
}
