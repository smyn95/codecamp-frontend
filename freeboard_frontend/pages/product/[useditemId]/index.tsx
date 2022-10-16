import * as S from "./productDetail.styles";
import { Collapse, Tooltip } from "antd";
import {
  DollarOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "../product.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import KakaoMapPage from "../../../src/components/commons/kakoMap";
import { useMoveToPage } from "../../../src/components/commons/hooks/useMoveToPage";
import { ErrorModal, SuccessModal } from "../../../src/commons";
import { useEffect } from "react";
import { withAuth } from "../../../src/commons/hocs/withAuth";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import ProductCommentWrite from "../../../src/components/units/productComment/write/productcommentWrite";
import ProductCommentList from "../../../src/components/units/productComment/list/productCommentList";

const LoginSuccessPage = () => {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const id = router.query.useditemId;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    fetchPolicy: "network-only",
    variables: { useditemId: router.query.useditemId },
  });

  const { data: pickData } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
      page: 1,
    },
  });

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const { Panel } = Collapse;

  useEffect(() => {
    let myProduct = JSON.parse(localStorage.getItem("myProducts") ?? "[]");

    // 3.현재 상품 id를 myProduct에 저장한다.
    myProduct.unshift(id);

    // 4.중복된 데이터를 넣지 않는 set 자료형에 myProduct를 담아 중복을 제거한다.
    myProduct = new Set(myProduct);

    // 중복 제거된 set 자료형의 myProduct를 일반 배열로 변경한다.
    myProduct = [...myProduct];

    if (myProduct > 2) {
      myProduct.pop();
    } else {
      localStorage.setItem("myProducts", JSON.stringify(myProduct));
    }
    // 5.localStorage에 데이터를 JSON 자료형으로 저장한다.
  }, []);

  const onClickDelete = async (useditemId: any) => {
    await deleteUseditem({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
    SuccessModal("삭제가 완료되었습니다.");
    void router.push("/product/");
  };

  const onClickPick = async (useditemId) => {
    await toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      update(cache, { data }) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    console.log(pickData?.fetchUseditemsIPicked);
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
                  title={`${data?.fetchUseditem.useditemAddress?.address ?? ""}
                  ${data?.fetchUseditem.useditemAddress?.addressDetail ?? ""}`}
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
                {data ? data.fetchUseditem.price : "0"} 원
              </S.ProductPrice>
            </S.ProductInfo>
            <S.DetailBtn>
              <button className="buy">
                <DollarOutlined />
                &nbsp; 구매
              </button>
              <button className="cart">
                <ShoppingCartOutlined />
                &nbsp; 장바구니
              </button>
            </S.DetailBtn>
            <S.Attention onClick={onClickPick}>
              {data?.fetchUseditem.pickedCount === 1 ? (
                <HeartFilled />
              ) : (
                <HeartOutlined />
              )}

              <span>관심상품</span>
            </S.Attention>

            <S.Detail>
              <Collapse accordion>
                <h1>구매 전 꼭 확인해주세요!</h1>
                <Panel header="상세내용" key="1">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data?.fetchUseditem.contents,
                    }}
                  ></p>
                </Panel>
              </Collapse>
            </S.Detail>
            <S.Kakaomap>
              <KakaoMapPage
                id={id}
                address={
                  data ? data.fetchUseditem.useditemAddress?.address : ""
                }
              />
            </S.Kakaomap>
            <S.Tags>
              <span>{data ? data.fetchUseditem.tags : "로딩중입니다..."}</span>
              <div>
                <button
                  type="button"
                  onClick={onClickMoveToPage(
                    `/product/${router.query.useditemId}/edit`
                  )}
                >
                  수정하기
                </button>
                <button type="button" onClick={onClickDelete}>
                  삭제하기
                </button>
              </div>
            </S.Tags>
          </S.Box>
        </div>
        <hr />
        <ProductCommentWrite />
        <ProductCommentList />
      </S.Product>
    </>
  );
};
export default withAuth(LoginSuccessPage);
