import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function observableFlatmapPage() {
  const onClickBtn = async () => {
    // new Promise(() => {});
    // new Observable(() => {});

    // prettier-ignore
    from(["1 useQuery", "2 useQuery", "3 useQuery"])
    .flatMap((el: string) => from([`${el} 결과에 qqq 적용`, `${el} 결과에 zzz 적용`]))
    .subscribe((el) => console.log(el))
  };
  return (
    <>
      <button onClick={onClickBtn}>클릭</button>
    </>
  );
}
