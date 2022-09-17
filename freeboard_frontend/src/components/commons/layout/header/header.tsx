import * as S from "../../../../commons/styles";

export default function LayoutHeader(props) {
  return (
    <>
      <S.Inner>
        <S.Header>
          <S.Logo>
            <img src="/Logo.svg" alt="닥터지" />
          </S.Logo>
          <S.Navi>
            <S.Navibx>
              <li className="all_menue">전체메뉴</li>
              <li>For U</li>
              <li>베스트</li>
              <li>신상품</li>
              <li>리뷰</li>
              <li>이벤트</li>
            </S.Navibx>
          </S.Navi>
          <S.TopSearch className={props.inputClass} onClick={props.onClickText}>
            <img src="/mypage.svg" alt="마이페이지 아이콘" />
            <img src="/car.svg" alt="배송 아이콘" />
            <img src="/cart.svg" alt="장바구니 아이콘" />
            <input type="text" />
            <S.Material>
              <img src="/search.png" alt="검색아이콘" />
            </S.Material>
          </S.TopSearch>
        </S.Header>
      </S.Inner>
    </>
  );
}
