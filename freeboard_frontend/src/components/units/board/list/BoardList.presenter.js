import * as S from '../../../../../styles/freeboard';
import Link from 'next/link';
import BoardListMap from './BoardList.map';


export default function  BoardListUI({data, onClickMoveToBoardNew,onClickMoveToBoardDetail,bestData,onClickMoveToBest,  ...props}) {
  return(
    <>
      <S.Logo>
        <img src="/starbucks_logo.png" alt="STARBUCKS"/>
      </S.Logo>
      <S.SubMenu>
        <S.Menu>
          <li>
            <p>Sign In</p>
          </li>
          <li>
            <p>My starbucks</p>
          </li>
          <li>
            <p>Costomer Service & Ideas</p>
          </li>
          <li>
            <p>Find a Store</p>
          </li>
        </S.Menu>
        <S.TopSearch className={props.inputClass} onClick={props.onClickText}>
          <input type="text"/>
          <S.Material><img src="/search.png" alt="검색아이콘"/></S.Material>
        </S.TopSearch>
      </S.SubMenu>

      <S.Box >        
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
                          <S.Listname>{best.writer.slice(0,6)}</S.Listname>
                        </S.Userbx>
                        <S.Listdate>{best.createdAt.slice(0,10)}</S.Listdate>
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
          <input type="text" placeholder="제목을 검색해주세요."/>
          <S.Calender>

          </S.Calender>
          <S.Searchbtn>검색하기</S.Searchbtn>
        </S.Searchbx>

        <S.Boardlist >
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

        <BoardListMap onClickMoveToBoardDetail={onClickMoveToBoardDetail} data={data}/>
        
        <S.Bottomrow>
          <S.Paging>
            <S.Paginglist>
            <S.Prev>&lt;</S.Prev>
              <S.Ullist>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </S.Ullist>
              <S.next>&gt;</S.next>
            </S.Paginglist>
          </S.Paging>

          <S.Registration onClick={onClickMoveToBoardNew} ><img src="/pencel.png" alt="글쓰기아이콘"/>게시물 등록하기</S.Registration>
          </S.Bottomrow>
        </S.Box>
    </>
  )

}
