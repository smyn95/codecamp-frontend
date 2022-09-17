import * as S from "../../../../commons/styles";

export default function LayoutBanner() {
  return (
    <>
      <S.Visual>
        <S.BannerInner>
          <S.BannerTitle className="fade-in">
            <img
              src="/visual_title.png"
              alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
            />
          </S.BannerTitle>
          <S.FadeIn>
            <S.Cup1Image src="/visual_cup1.png" alt="new OATMEAL LATTE" />
            <S.Cup1Text src="/visual_cup1_text.png" alt="오트밀 라떼" />
          </S.FadeIn>
          <S.FadeIn>
            <S.Cup2Image
              src="/visual_cup2.png"
              alt="new STARBUCKS CARAMEL CRUMBLE MOCHA"
            />
            <S.Cup2Text
              src="/visual_cup2_text.png"
              alt="스타벅스 카라멜 크럼블 모카"
            />
          </S.FadeIn>
          <S.FadeIn>
            <S.Spoon src="/visual_spoon.png" alt="Spoon" />
          </S.FadeIn>
        </S.BannerInner>
      </S.Visual>
    </>
  );
}
