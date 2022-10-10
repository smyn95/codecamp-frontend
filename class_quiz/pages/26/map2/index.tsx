import { useRouter } from "next/router";

export default function KakaoMap2() {
  const router = useRouter();

  const onClickMap = () => {
    void router.push("/26/map1/");
  };
  return (
    <>
      <button onClick={onClickMap}>이동하기</button>
    </>
  );
}
