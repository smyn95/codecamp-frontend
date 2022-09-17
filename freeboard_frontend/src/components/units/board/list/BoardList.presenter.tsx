import * as S from "../../../../../styles/freeboard";
import Link from "next/link";
import BoardListMap from "./BoardList.map";
import { Pagination, Space } from "antd";
import "antd/dist/antd.css";
import LayoutBanner from "../../../commons/layout/banner";
import Search from "antd/lib/transfer/search";

export default function BoardListUI({
  data,
  onClickMoveToBoardNew,
  onClickMoveToBoardDetail,
  bestData,
  onClickMoveToBest,
  showTotal,
  RangePicker,
  onChangeSearch,
  ...props
}) {
  const onSearch = (value) => console.log(value);
  return (
    <>
      <LayoutBanner />
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
          <Search
            addonBefore="https://"
            placeholder="검색어를 입력하세요."
            allowClear
            onSearch={onSearch}
          />
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