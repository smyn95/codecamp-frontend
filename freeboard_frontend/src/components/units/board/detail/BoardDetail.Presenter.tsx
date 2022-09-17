import * as S from "../../../../../styles/fetchboard";
import { Tooltip } from "antd";
import ReactPlayer from "react-player";
import BoardComments from "../comments/BoardComments.container";
import "semantic-ui-css/semantic.min.css";
import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI({
  data,
  onClickMoveToBoard,
  goEdit,
  onClickLike,
  onClickDisLike,
  onClickDelete,
}) {
  return (
    <S.Board>
      <S.Box>
        <div id="Head">
          <S.Left>
            <S.Leftbx>
              <S.User></S.User>
              <S.Namebx>
                <S.Name>
                  {data ? data.fetchBoard.writer : "로딩중입니다..."}
                </S.Name>
                <S.Date>
                  {data
                    ? data.fetchBoard.createdAt.slice(0, 10)
                    : "로딩중입니다..."}
                </S.Date>
              </S.Namebx>
            </S.Leftbx>

            <S.Right>
              <Tooltip
                title={`${data?.fetchBoard.boardAddress?.address ?? ""} ${
                  data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
                color={"lime"}
              >
                <S.Icon src="/location_on.png" alt="위치아이콘" />
              </Tooltip>
              <S.Icon src="/link.png" alt="링크아이콘" />
            </S.Right>
          </S.Left>
        </div>

        <S.DetailTitle>
          {data ? data.fetchBoard.title : "로딩중입니다..."}
        </S.DetailTitle>
        <div id="Img">{data ? data.fetchBoard.images : "로딩중입니다..."}</div>
        <S.Contents src="/content.png" alt="본문 이미지"></S.Contents>
        <S.Textcontent>
          {data ? data.fetchBoard.contents : "로딩중입니다..."}
        </S.Textcontent>
        {data?.fetchBoard.youtubeUrl && (
          <ReactPlayer
            style={{ margin: "auto" }}
            url={data ? data.fetchBoard.youtubeUrl : "로딩중입니다..."}
            width={800}
            height={450}
            muted={true}
            playing={true}
          />
        )}

        <S.Bottombx>
          <S.Likebx>
            <S.Likeimg
              src="/like.png"
              alt="좋아요아이콘"
              onClick={onClickLike}
            ></S.Likeimg>
            <p>{data ? data.fetchBoard.likeCount : "로딩중입니다..."}</p>
          </S.Likebx>

          <S.Dislikebx>
            <S.Likeimg
              src="/dislike.png"
              alt="싫어요아이콘"
              onClick={onClickDisLike}
            ></S.Likeimg>
            <p>{data ? data.fetchBoard.dislikeCount : "로딩중입니다..."}</p>
          </S.Dislikebx>
        </S.Bottombx>
      </S.Box>

      <S.List>
        <S.Listbtn onClick={onClickMoveToBoard}>목록으로</S.Listbtn>
        <S.Listbtn onClick={goEdit}>수정하기</S.Listbtn>
        <S.Listbtn onClick={onClickDelete}>삭제하기</S.Listbtn>
      </S.List>
      <BoardComments />
    </S.Board>
  );
}
