import { IProfileReturn } from "../../src/commons/types/generated/types"

export default function TypescriptUtilityPage() {
  interface IProfile {
    name:string
    age:number
    school:string
    hobby?:string

}

// 1. Pick 타입
type aaa = Pick<IProfile, "name" | "age" >

// 2. Omit 타입
type bbb = Omit<IProfile, "shool">

// 3. Partial 타입
type ccc = Partial<IProfile>

// 4. Required 타입
type ddd = Required<IProfile>

// 5. Record 타입
type eee = "철수" | "영희" | "훈이" // Union 타입
let child: eee
child = "영희"

type fff = Record<eee, IProfile>

  // ==== (type vs interface) 차이: 선언병합 ==== 
  interface IProfile {
    candy: number
  }

  let profile: Partial<IProfile> = {}//
  profile.candy = 10
  



}