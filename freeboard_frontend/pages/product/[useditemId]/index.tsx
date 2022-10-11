import * as S from "./productDetail.styles";
import { Collapse, Tooltip } from "antd";
import {
  DollarOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../product.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import KakaoMapPage from "../../../src/components/commons/kakoMap";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";

export default function ProductDetailPage() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const id = router.query.useditemId;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    fetchPolicy: "network-only",
    variables: { useditemId: router.query.useditemId },
  });
  const { Panel } = Collapse;

  const onClickBasket = (basket) => () => {
    console.log(basket);

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el.useditemId === basket.useditemId);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    baskets.push(basket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <>
      <S.Product>
        <div className="flexBox">
          <S.ImageBox>
            <img src="/dd.jpeg" alt="상품이미지" />
          </S.ImageBox>
          <S.Box>
            <S.Left>
              <S.Leftbx>
                <img src="/avatar.png" style={{ height: "60px" }} />
                <S.Namebx>
                  <S.Name>유저네임</S.Name>
                  <S.Date>
                    {data
                      ? data.fetchUseditem.createdAt.slice(0, 10)
                      : "로딩중입니다..."}
                  </S.Date>
                </S.Namebx>
              </S.Leftbx>

              <S.Right>
                <Tooltip
                  title={`d${
                    data?.fetchUseditem.useditemAddress?.address ?? ""
                  }d ${
                    data?.fetchUseditem.useditemAddress?.addressDetail ?? ""
                  }d`}
                  color={"lime"}
                >
                  <S.Icon src="/location_on.png" alt="위치아이콘" />
                </Tooltip>
                <S.Icon src="/link.png" alt="링크아이콘" />
              </S.Right>
            </S.Left>

            <S.ProductInfo>
              <ul>
                <S.ProductName>
                  {data ? data.fetchUseditem.name : "로딩중입니다..."}
                </S.ProductName>
                <S.Remarks>
                  {data ? data.fetchUseditem.remarks : "로딩중입니다..."}
                </S.Remarks>
              </ul>
              <S.ProductPrice>
                {data ? data.fetchUseditem.price : "로딩중입니다..."} 원
              </S.ProductPrice>
            </S.ProductInfo>

            <S.DetailBtn>
              <button className="buy">
                <DollarOutlined />
                &nbsp; 구매
              </button>
              <button className="cart" onClick={onClickBasket}>
                <ShoppingCartOutlined />
                &nbsp; 장바구니
              </button>
            </S.DetailBtn>

            <S.Attention>
              <HeartOutlined />
              <span>관심상품</span>
            </S.Attention>

            <S.Detail>
              <Collapse accordion>
                <h1>구매 전 꼭 확인해주세요!</h1>
                <Panel header="상세내용" key="1">
                  <p>
                    {data ? data.fetchUseditem.contents : "로딩중입니다..."}
                  </p>
                </Panel>
              </Collapse>
            </S.Detail>

            <S.Kakaomap>
              <KakaoMapPage
                id={id}
                address={data ? data.fetchUseditem.useditemAddress.address : ""}
              />
            </S.Kakaomap>

            <S.Tags>
              <span>{data ? data.fetchUseditem.tags : "로딩중입니다..."}</span>
              <button
                type="button"
                onClick={onClickMoveToPage(
                  `/product/${router.query.useditemId}/edit`
                )}
              >
                수정하기
              </button>
            </S.Tags>
          </S.Box>
        </div>

        <S.InputWrapper>
          <S.Reviewinfo>
            <div>
              <S.Input placeholder="작성자" />
              <S.Input type="password" placeholder="비밀번호" />
              <S.Star />
            </div>
          </S.Reviewinfo>
        </S.InputWrapper>

        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <S.BottomWrapper>
            <S.ContentsLength>0/100</S.ContentsLength>
            <S.Button>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Product>
    </>
  );
}
