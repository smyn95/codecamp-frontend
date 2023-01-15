import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { nowProductState } from "../../../../commons/store";

export default function LayoutBadgePage(props: any) {
  const [nowProduct, setNowProduct] = useRecoilState(nowProductState);

  useEffect(() => {
    const watched =
      typeof window !== "undefined" &&
      JSON.parse(String(sessionStorage.getItem("watched")));
    setNowProduct(watched);
    console.log(watched, "watched");
  }, []);
  // console.log(nowProduct, "최근 본 상품nowProduct");

  // el 의 id와 id가 일치하는 id의 image를 뿌려주어라

  return (
    <>
      <Badge>
        <Badgebx>
          <h1>최근 본 상품</h1>
          {nowProduct.map((el) => (
            <FixImg>{console.log(el, "mapel")}</FixImg>
          ))}
        </Badgebx>
      </Badge>
    </>
  );
}

const Badge = styled.section`
  width: 155px;
  height: 370px;
  border: 1px solid #333;
  position: fixed;
  z-index: 999;
  right: 1%;
  top: 300px;
  padding: 20px;
  background-color: #fff;
  h1 {
    font-size: 16px;
    font-weight: 600;
  }
`;
const Badgebx = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;
const FixImg = styled.div`
  width: 85px;
  height: 85px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;
