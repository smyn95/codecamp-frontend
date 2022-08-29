import {Email,EmailInput,EmailButton} from '../../styles/emotion' //중괄호 안에서 CMD + i 

export default function emotionPage() {
  // 여기는 자바스크립트 쓰는곳

  return(
    <div>
      <Email>로그인</Email>
      <EmailInput type="text"/>
      <EmailButton>클릭하세요!!</EmailButton>
      <img src='/vercel.svg'/>
    </div>
  )

}