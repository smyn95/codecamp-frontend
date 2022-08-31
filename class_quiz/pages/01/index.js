import {Box,Img,Menu,Quiz,Qna,Title,Wrap,Tab,Info,Face,Myinfo,Name,Arrow} from '../../styles/class_quiz' 

export default function classQuiz() {
  // 여기는 자바스크립트 쓰는곳

  return(
    <Box>
      <Wrap>
        <Img src="Group.png"/>
        <Myinfo>
          <Title>마이</Title>
          <Info>
            <Face src="face.png"/>
            <Name>임정아</Name>
            <Arrow src="arrow.png"/>
          </Info>
        </Myinfo>
        <Tab>
          <p>공지사항</p>
          <p>이벤트</p>
          <p>FAQ</p>
          <p>Q&A</p>
        </Tab>  
      </Wrap>
      <hr/>
      <br/>
      <Wrap>
        <Quiz>
          <span>Q.01</span>
          <div>
            <p>리뷰 작성은 어떻게 하나요?</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
        <Quiz>
          <span>Q.02</span>
          <div>
            <p>리뷰 수정/삭제는 어떻게 하나요?</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
        <Quiz>
          <span>Q.03</span>
          <div>
            <p>아이디/비밀번호를 잊어버렸어요</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
        <Quiz>
          <span>Q.04</span>
          <div>
            <p>회원탈퇴를 하고싶어요.</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
        <Quiz>
          <span>Q.05</span>
          <div>
            <p>출발지 설정은 어떻게 하나요?</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
        <Quiz>
          <span>Q.06</span>
          <div>
            <p>비밀번호를 변경하고 싶어요</p>
            <img src="a_bottom.png"/>
          </div>
        </Quiz>
      </Wrap>
      <hr/>
      <Wrap>
        <Menu>
          <p><img src="1.png"/>홈</p>
          <p><img src="2.png"/>잇츠로드</p>
          <p><img src="3.png"/>마이찜</p>
          <p><img src="4.png"/>마이</p>
        </Menu>
      </Wrap>
    </Box>
  )

}