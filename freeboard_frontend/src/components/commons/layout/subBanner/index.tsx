import * as S from "../../../../commons/styles";
import { Carousel } from "antd";

export default function LayoutSubBanner() {
  return (
    <>
      <Carousel autoplay>
        <S.SubBaaner></S.SubBaaner>
        <S.SubBaaner02></S.SubBaaner02>
      </Carousel>
    </>
  );
}
