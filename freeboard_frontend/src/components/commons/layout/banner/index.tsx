import * as S from "../../../../commons/styles";

export default function LayoutBanner() {
  return (
    <>
      <S.Visual>
        <S.BannerInner>
          <S.BannerTitle className="fade-in">
            <img
              className="set04"
              src="/main_title.png"
              alt="AROUND AUTUMN, AROUND US"
            />
          </S.BannerTitle>
          <div>
            <S.Set03
              className="set03"
              src="/drink_03.png"
              alt="호두 블랙 티 라떼"
            />
          </div>
          <div>
            <S.Set02
              className="set02"
              src="/drink_02.png"
              alt="그린애플 캐모마일 티"
            />
          </div>
          <div>
            <S.Set01
              className="set01"
              src="/drink_01.png"
              alt="블랙 그레이즈드 라떼"
            />
          </div>
        </S.BannerInner>
      </S.Visual>
    </>
  );
}
