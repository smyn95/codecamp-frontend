import Router from 'next/router';
import { useEffect, useState} from "react";


interface IState{
  isChange:boolean;
  isWarning:string;
}
export default function Quiz11(props:IState) {
const [isChange,setIsChange] = useState(false)

useEffect(() => {
  alert("Rendered!");
}, [])

useEffect(() => {
  alert("Changed!!!");
}, [isChange])

useEffect(()=>{
  alert("Bye!!")

  return(()=>{
    alert("Bye!!")
  })

})
 const onClickChange = () => {
  setIsChange((prev) => !prev);
    }

 const onClickMove = () => {
    Router.push("/")
  }
    
  return(
    <> 
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  )
}


