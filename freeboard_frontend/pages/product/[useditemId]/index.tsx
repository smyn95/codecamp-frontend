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
import { isEditState } from "../../../src/commons/store";
import ProductCommentWrite from "../../../src/components/units/productComment/write/productcommentWrite";
import ProductCommentList from "../../../src/components/units/productComment/list/productCommentList";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../../myPage/mypage.queries";

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

  useEffect(() => {
    let myProduct = JSON.parse(localStorage.getItem("myProducts") ?? "[]");

    // 3.?????? ?????? id??? myProduct??? ????????????.
    myProduct.unshift(id);

    // 4.????????? ???????????? ?????? ?????? set ???????????? myProduct??? ?????? ????????? ????????????.
    myProduct = new Set(myProduct);

    // ?????? ????????? set ???????????? myProduct??? ?????? ????????? ????????????.
    myProduct = [...myProduct];

    if (myProduct > 2) {
      myProduct.pop();
    } else {
      localStorage.setItem("myProducts", JSON.stringify(myProduct));
    }
    // 5.localStorage??? ???????????? JSON ??????????????? ????????????.
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
    SuccessModal("????????? ?????????????????????.");
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
      SuccessModal("????????? ?????????????????????.");
    } catch (error) {
      ErrorModal(error.message);
    }
  };
  console.log(data);
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
                      : "??????????????????..."}
                  </S.Date>
                </S.Namebx>
              </S.Leftbx>

              <S.Right>
                <Tooltip
                  title={`${data?.fetchUseditem.useditemAddress?.address ?? ""}
                  ${data?.fetchUseditem.useditemAddress?.addressDetail ?? ""}`}
                  color={"lime"}
                >
                  <S.Icon src="/location_on.png" alt="???????????????" />
                </Tooltip>
                <S.Icon src="/link.png" alt="???????????????" />
              </S.Right>
            </S.Left>
            <S.ProductInfo>
              <ul>
                <S.ProductName>
                  {data ? data.fetchUseditem.name : "??????????????????..."}
                </S.ProductName>
                <S.Remarks>
                  {data ? data.fetchUseditem.remarks : "??????????????????..."}
                </S.Remarks>
              </ul>
              <S.ProductPrice>
                {data ? data.fetchUseditem.price : "0"} ???
              </S.ProductPrice>
            </S.ProductInfo>
            <S.DetailBtn>
              <button className="buy" onClick={onClickBuying}>
                <DollarOutlined />
                &nbsp; ??????
              </button>
              <button className="cart">
                <ShoppingCartOutlined />
                &nbsp; ????????????
              </button>
            </S.DetailBtn>
            <S.Attention onClick={onClickPick}>
              {data?.fetchUseditem.pickedCount === 1 ? (
                <HeartFilled />
              ) : (
                <HeartOutlined />
              )}

              <span>????????????</span>
            </S.Attention>

            <S.Detail>
              <Collapse accordion>
                <h1>?????? ??? ??? ??????????????????!</h1>
                <Panel header="????????????" key="1">
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
              ?????? : {data ? data.fetchUseditem.useditemAddress?.address : ""}
            </S.Address>
            <S.Tags>
              <div>
                {data
                  ? data.fetchUseditem.tags
                      ?.join("")
                      .split(" ")
                      .map((el) => <span key={el}>{el}</span>)
                  : "??????????????????."}
              </div>
              <div>
                <button
                  type="button"
                  onClick={onClickMoveToPage(
                    `/product/${router.query.useditemId}/edit`
                  )}
                >
                  ????????????
                </button>
                <button type="button" onClick={onClickDelete}>
                  ????????????
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
