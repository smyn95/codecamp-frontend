import {useState} from 'react'

export default function certification(){
  const [againCernum,setAgainCernum] = useState("000000")

  function onClickCertifi(){
  let cerNum = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
  document.getElementById("cerNum").innerText = cerNum

  console.log(cerNum);
}

function onClickCernum() {
  setAgainCernum(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
}

  return(
    <>
      <button id="cerNum">000000</button>
      <button onClick={onClickCertifi}>인증번호 전송</button>

      <br/><br/><br/>

      <button>{againCernum}</button>
      <button onClick={onClickCernum}>인증번호 전송</button>
    </>
  )
}

