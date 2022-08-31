import {useState} from 'react'
import {Greeting} from '../../styles/class_quiz'

export default function day02() {
  const [againHello, setAgainHello] = useState("안녕하세요");

  function LetHello(event) {
    // let niceToMeetYou = "반갑습니다";
    // document.getElementById('changeTxt').innerText = niceToMeetYou;

    let changeTxt = document.getElementById("changeTxt").innerText = "반갑습니다"
    document.getElementById("changeTxt").innerText = changeTxt
  }

  function stateHello(event) {
    setAgainHello('반갑습니다');
  }
   

  return(
    <>

      <Greeting onClick={LetHello} id="changeTxt">안녕하세요</Greeting>
      <Greeting onClick={stateHello}>{againHello}</Greeting>
    </>
  )

}