import { useMutation } from "@apollo/client";
import BoardWrite from "../../../src/components/units/board/10-write/BoardWrite.Container";


export default function GraphqlMutationPage(){
  return (
  <>
    {BoardWrite({isEdit : false })}
  </>
  // <BoardWrite isEdit={false}/>
  ) 
}