import * as S from "./productDetail.styles";
import { Tooltip } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "../product.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import KakaoMapPage from "../../../src/components/commons/kakoMap";

export default function ProductDetailPage() {
  const router = useRouter();
  const id = router.query.useditemId;

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    fetchPolicy: "network-only",
    variables: { useditemId: router.query.useditemId },
  });

  return (
    <>
      <S.Product>
        <S.Remarks>
          {data ? data.fetchUseditem.remarks : "로딩중입니다..."}
        </S.Remarks>
        <S.ImageBox>
          <img src="/dd.jpeg" alt="상품이미지" />
        </S.ImageBox>

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
              title={`d${data?.fetchUseditem.useditemAddress?.address ?? ""}d ${
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
          <div className="ProductSub">
            <ul>
              <S.ProductName>
                {data ? data.fetchUseditem.name : "로딩중입니다..."}
              </S.ProductName>
              <S.ProductPrice>
                {data ? data.fetchUseditem.price : "로딩중입니다..."}
              </S.ProductPrice>
            </ul>
            <ul>
              <S.Attention>
                <HeartOutlined />
                <span>20</span>
              </S.Attention>
            </ul>
          </div>

          <S.Detail>
            <p>{data ? data.fetchUseditem.contents : "로딩중입니다..."}</p>
          </S.Detail>

          <S.Kakaomap>
            <KakaoMapPage
              id={id}
              address={data ? data.fetchUseditem.useditemAddress.address : ""}
            />
          </S.Kakaomap>

          <S.Tags>
            <span>{data ? data.fetchUseditem.tags : "로딩중입니다..."}</span>
          </S.Tags>
        </S.ProductInfo>

        <S.DetailBtn>
          <button>목록으로</button>
          <button>구매하기</button>
        </S.DetailBtn>

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
