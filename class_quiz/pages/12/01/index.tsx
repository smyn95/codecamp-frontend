import { useEffect, useRef } from "react"

export default function UseRef() {
  const focusRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
     focusRef.current.focus();
  },[])
  return(
    <>
      <input type="number" ref={focusRef}/>
    </>
    )
}