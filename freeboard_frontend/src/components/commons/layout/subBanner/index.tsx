import * as S from "../../../../commons/styles";
import { Carousel } from "antd";

export default function LayoutSubBanner() {
  return (
    <>
      <Carousel autoplay>
        <S.SubBanner01></S.SubBanner01>
        <S.SubBanner02></S.SubBanner02>
      </Carousel>
    </>
  );
}
