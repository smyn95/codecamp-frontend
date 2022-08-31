import {useState} from 'react'

export default function CountUp() {
  const[againCount, setAgainCount] = useState(0)

  //let과 getElementById를 사용해 숫자 1씩 증가시키기
  function CountUp() {
    let NumUp = Number(document.getElementById("NumUp").innerText) + 1
    document.getElementById("NumUp").innerText = NumUp
  }

  //state를 사용해 숫자 1씩 증가 시키기
  function againCounter() {
    setAgainCount(againCount + 1)
  }

  return(
    <>
      <div id="NumUp">0</div>
      <button onClick={CountUp}>카운트 올리기</button>

      <div>{againCount}</div>
      <button onClick={againCounter}>카운트 올리기</button>
    </>
  )
}