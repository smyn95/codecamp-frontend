import * as S from "../../../../../styles/freeboard";
import ReactPlayer from "react-player";
import "antd/dist/antd.css";

export default function BoardWriteUI(props) {
  console.log(props.data);
  return (
    <S.Box>
      <S.Title>Post registration</S.Title>
      <S.Textbx>
        <S.Titlebx>
          <S.Font>작&nbsp;&nbsp;성&nbsp;&nbsp;자</S.Font>
          <S.Input
            type="text"
            onChange={props.onChangeName}
            placeholder="이름을 적어주세요."
            defaultValue={props.data?.fetchBoard.writer}
          />
        </S.Titlebx>
        <S.Titlebx>
          <S.Font>비밀번호</S.Font>
          <S.Input
            type="text"
            onChange={props.onChangePassword}
            placeholder="비밀번호를 입력해주세요."
          />
        </S.Titlebx>
      </S.Textbx>
      <S.Textbx>
        <S.Titlebx>
          <S.Font>제&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;목</S.Font>
          <S.Input
            type="text"
            onChange={props.onChangeTitle}
            placeholder="제목을 작성해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.Titlebx>
      </S.Textbx>
      <S.Textbx>
        <S.Titlebx>
          <S.Font>내&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;용</S.Font>
          <S.Contents
            type="text"
            onChange={props.onChangeContents}
            placeholder="내용을 작성해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.Titlebx>
      </S.Textbx>

      <S.Textbx>
        <S.Titlebx>
          <S.Font>주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;소</S.Font>
          <S.Codezip
            type="text"
            placeholder="00000"
            onChange={props.onChangeZipcode}
            defaultValue={props.data?.fetchBoard.zipcode}
          />
          <S.Search type="button">우편번호 검색</S.Search>
        </S.Titlebx>
        <S.Input type="text" onChange={props.onChangeAddress} />
        <S.Input
          type="text"
          onChange={props.onChangeAddressDetail}
          placeholder="상세주소를 입력해주세요."
        />
      </S.Textbx>
      <S.Textbx>
        <S.Titlebx>
          <S.Font>유&nbsp;튜&nbsp;브</S.Font>
          <S.Input
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
          />
        </S.Titlebx>
      </S.Textbx>
      <S.Textbx>
        <S.Titlebx>
          <S.Font>사진첨부</S.Font>
          <S.Imgbx></S.Imgbx>
          <S.Imgbx></S.Imgbx>
          <S.Imgbx></S.Imgbx>
        </S.Titlebx>
      </S.Textbx>
      <S.Setting>
        <S.Titlebx>
          <S.Font>메인설정</S.Font>
          <input type="radio" /> <span>유튜브</span>
          <input type="radio" /> <span>사진</span>
        </S.Titlebx>
      </S.Setting>

      <S.Submit>
        <S.Replace onClick={props.onClickMoveToBoard}>취소하기</S.Replace>
        <S.Routing
          onClick={props.isEdit ? props.onClickUpdate : props.onClickNotice}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.Routing>
      </S.Submit>
    </S.Box>
  );
}
