import * as S from "./productDetail.styles";
import { Collapse, Tooltip, Carousel } from "antd";
import {
  DollarOutlined,
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_I_PICKED,
  TOGGLE_USED_ITEM_PICK,
} from "../product.queries";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
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
import { isEditState, nowProductState } from "../../../src/commons/store";
import ProductCommentWrite from "../../../src/components/units/productComment/write/productcommentWrite";
import ProductCommentList from "../../../src/components/units/productComment/list/productCommentList";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../../myPage/mypage.queries";

const LoginSuccessPage = () => {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const [nowProduct, setNowProduct] = useRecoilState(nowProductState);

  const id = router.query.useditemId;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    fetchPolicy: "network-only",
    variables: { useditemId: router.query.useditemId },
  });

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

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

  const onClickDelete = async (useditemId: any) => {
    await deleteUseditem({
      variables: { useditemId: String(router.query.useditemId) },
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

  const onClickPick = async (useditemId: any) => {
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

  const onClickBuying = async (useditemId: any) => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query.useditemId },
        refetchQueries: [
          {
            query: FETCH_POINT_TRANSACTIONS_OF_SELLING,
            variables: { useritemId: router.query.useditemId },
          },
        ],
      });
      void router.push("/product");
      SuccessModal("구매가 완료되었습니다.");
    } catch (error) {
      ErrorModal(error.message);
    }
  };

  // badge
  useEffect(() => {
    const watched = JSON.parse(sessionStorage.getItem("watched") ?? "[]");

    watched.unshift(id);
    if (watched.length > 3) watched.pop();

    setNowProduct(watched);
    sessionStorage.setItem("watched", JSON.stringify(watched));
  }, []);
  // badge end

  return (
    <>
      <S.Product>
        <div className="flexBox">
          <S.ImageBox autoplay>
            {data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.ImgDetail
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ImageBox>
          <S.Box>
            <S.Left>
              <S.Leftbx>
                <S.UserProfile
                  src={data?.fetchUseditem.seller?.picture ?? ""}
                />
                <S.Namebx>
                  <S.Name>{data?.fetchUseditem.seller?.name}</S.Name>
                  <S.Date>
                    {data
                      ? data.fetchUseditem.seller?.createdAt.slice(0, 10)
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
              <button className="buy" onClick={onClickBuying}>
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
            <S.Address>
              주소 : {data ? data.fetchUseditem.useditemAddress?.address : ""}
            </S.Address>
            <S.Tags>
              <div>
                {data
                  ? data.fetchUseditem.tags
                      ?.join("")
                      .split(" ")
                      .map((el) => <span key={el}>{el}</span>)
                  : "로딩중입니다."}
              </div>
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
