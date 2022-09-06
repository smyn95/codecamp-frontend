import { useQuery,gql,useMutation } from '@apollo/client';
import {FETCH_BOARD} from '../../src/components/commons/BoardWrite.queryes'
import * as S from '../../styles/freeboard';
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoard{
    fetchProducts{
      _id
      seller
      name
      detail
      price
    }
  }
`

export default function ProductListPage(){
  const router = useRouter()  
  const {data} = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.boardId} 
  })

  console.log(router.query.boardId)

  console.log(data)

//   const [deleteProduct] = useMutation(DELETE_PRODUCT)
//   const {data} = useQuery(FETCH_PRODUCTS)
  
//   console.log(data)

//   const onClickDelete = async (event) => {
//     await deleteProduct({
//       variables:{ productId:String(event.target.id)
//       },
//       refetchQueries:[{query:FETCH_PRODUCTS}]
//     })
//   }

  return(
    <S.Box>
      <S.Title>BEST POST</S.Title>
      <S.Listall>
        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>
      </S.Listall>
<br/><br/>
      <S.Listall>
        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>

        <S.Listbx>
            <S.Topbx></S.Topbx>
            <S.Bottombx>
              <S.BxTitle>게시물 제목입니다.</S.BxTitle>
              <S.Flex>
                <div>
                  <S.Userbx>
                    <S.User></S.User>
                    <S.Listname>신미연</S.Listname>
                  </S.Userbx>
                  <S.Listdate>Date : 2021.02.18</S.Listdate>
                </div>
              
              <S.Listlike>
                <img src="/like.png" alt="좋아요아이콘"></img>
                <S.Likecount>365</S.Likecount>
              </S.Listlike>
              </S.Flex>
            </S.Bottombx>
        </S.Listbx>
      </S.Listall>
      <S.Searchbx>
        <input type="text" placeholder="제목을 검색해주세요."/>
        <S.Calender>

        </S.Calender>
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
          
          <S.Listfirst>
            <ul>
              <li>1</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>2</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>3</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>4</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>5</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>6</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>7</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>8</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
          <S.Listfirst>
            <ul>
              <li>9</li>
              <li>제목</li>
              <li>작성자</li>
              <li>날짜</li>
            </ul>
          </S.Listfirst>
        </ul>
      </S.Boardlist>

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

        <S.Registration><img src="/pencel.png" alt="글쓰기아이콘"/>게시물 등록하기</S.Registration>
        </S.Bottomrow>
      </S.Box>
  )

}
