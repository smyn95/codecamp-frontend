import * as S from "../../../../../styles/freeboard";
import Link from "next/link";
import BoardListMap from "./BoardList.map";
import { Pagination, Space } from "antd";
import "antd/dist/antd.css";

export default function BoardListUI({
  data,
  onClickMoveToBoardNew,
  onClickMoveToBoardDetail,
  bestData,
  onClickMoveToBest,
  showTotal,
  RangePicker,
  ...props
}) {
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

      <S.Box>
        <S.Title>BEST POST</S.Title>
        <S.Listall>
          {bestData?.fetchBoardsOfTheBest.map((best) => (
            <S.Listbx key={best._id}>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <Link href={`/board/${best._id}`}>
                  <div>
                    <S.BxTitle>{best.title}</S.BxTitle>
                    <S.Flex>
                      <div>
                        <S.Userbx>
                          <S.User></S.User>
                          <S.Listname>{best.writer.slice(0, 6)}</S.Listname>
                        </S.Userbx>
                        <S.Listdate>{best.createdAt.slice(0, 10)}</S.Listdate>
                      </div>

                      <S.Listlike>
                        <img src="/like.png" alt="좋아요아이콘"></img>
                        <S.Likecount>{best.likeCount}</S.Likecount>
                      </S.Listlike>
                    </S.Flex>
                  </div>
                </Link>
              </S.Bottombx>
            </S.Listbx>
          ))}
        </S.Listall>
        <S.Searchbx>
          <S.SearchInput type="text" placeholder="제목을 검색해주세요." />
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <S.Searchbtn>검색하기</S.Searchbtn>
        </S.Searchbx>

        <S.Boardlist>
          <ul>
            <S.Listfirst>
              <S.Listtitle>
                <li>번호</li>
                <li>제목</li>
                <li>작성자</li>
                <li>날짜</li>
              </S.Listtitle>
            </S.Listfirst>
          </ul>
        </S.Boardlist>

        <BoardListMap
          onClickMoveToBoardDetail={onClickMoveToBoardDetail}
          data={data}
        />

        <S.Bottomrow>
          <S.Paging>
            <S.Paginglist>
              <Pagination size="small" total={50} {...data?.fetchBoards._id} />
            </S.Paginglist>
          </S.Paging>

          <S.Registration onClick={onClickMoveToBoardNew}>
            <img src="/pencel.png" alt="글쓰기아이콘" />
            게시물 등록하기
          </S.Registration>
        </S.Bottomrow>
      </S.Box>
    </>
  );
}
