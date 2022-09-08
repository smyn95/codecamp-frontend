import * as S from '../../../../../styles/freeboard';
import BoardListMap from './components/BoardList.list'

export default function  BoardListUI({data, onClickMoveToBoardNew,onClickMoveToBoardDetail}) {
  return(
    <>
      <S.Header>
        <S.Inner>

          <S.Logo>
            <img src="/starbucks_logo.png" alt="STARBUCKS"/>
          </S.Logo>
          <S.SubMenu>
            <S.Menu>
              <S.Mypage>
                <S.MypageLink>Sign In</S.MypageLink>
              </S.Mypage>
              <S.Mypage>
                <S.MypageLink>My starbucks</S.MypageLink>
              </S.Mypage>
              <S.Mypage>
                <S.MypageLink>Costomer Service & Ideas</S.MypageLink>
              </S.Mypage>
              <S.Mypage>
                <S.MypageLink>Find a Store</S.MypageLink>
              </S.Mypage>
            </S.Menu>
            <S.HeaderSearch>
              <input type="text" />
              <S.MaterialIcon>search</S.MaterialIcon>
            </S.HeaderSearch>
          </S.SubMenu>
          <S.MainMenu>
            <div clas="item">
              <S.ItemName>COFFEE</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>커피</h4>
                      <ul>
                        <li>스타벅스 원두</li>
                        <li>스타벅스 비아</li>
                        <li>스타벅스 오리가미</li>
                      </ul>
                    </li>
                    <li>
                      <h4>에스프레소 음료</h4>
                      <ul>
                        <li>도피오</li>
                        <li>에스프레소 마키아또</li>
                        <li>아메리카노</li>
                        <li>마키아또</li>
                        <li>카푸치노</li>
                        <li>라떼</li>
                        <li>모카</li>
                        <li>리스트레또 비안코</li>
                      </ul>
                    </li>
                    <li>
                      <h4>커피 이야기</h4>
                      <ul>
                        <li>스타벅스 로스트 스팩트럼</li>
                        <li>최상의 아라비카 원두</li>
                        <li>한 잔의 커피가 완성되기까지</li>
                        <li>클로버® 커피 추출 시스템</li>
                      </ul>
                    </li>
                    <li>
                      <h4>최상의 커피를 즐기는 법</h4>
                      <ul>
                        <li>커피 프레스</li>
                        <li>푸어 오버</li>
                        <li>아이스 푸어 오버</li>
                        <li>커피 메이커</li>
                        <li>리저브를 매장에서 다양하게 즐기는 법</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <S.ContentsTexture>
                  <S.Inner>
                    <h4>나와 어울리는 커피 찾기</h4>
                    <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                    <h4>최상의 커피를 즐기는 법</h4>
                    <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
                  </S.Inner>
                </S.ContentsTexture>
              </S.ItemContents>
            </div>
            <li class="item">
              <S.ItemName>MENU</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>음료</h4>
                      <ul>
                        <li>콜드 브루</li>
                        <li>브루드 커피</li>
                        <li>에스프레소</li>
                        <li>프라푸치노</li>
                        <li>블렌디드 음료</li>
                        <li>스타벅스 피지오</li>
                        <li>티(티바나)</li>
                        <li>기타 제조 음료</li>
                        <li>스타벅스 주스(병음료)</li>
                      </ul>
                    </li>
                    <li>
                      <h4>푸드</h4>
                      <ul>
                        <li>베이커리</li>
                        <li>케익</li>
                        <li>샌드위치 & 샐러드</li>
                        <li>따뜻한 푸드</li>
                        <li>과일 & 요거트</li>
                        <li>스낵 & 미니 디저트</li>
                        <li>아이스크림</li>
                      </ul>
                    </li>
                    <li>
                      <h4>상품</h4>
                      <ul>
                        <li>머그</li>
                        <li>글라스</li>
                        <li>플라스틱 텀블러</li>
                        <li>스테인리스 텀블러</li>
                        <li>보온병</li>
                        <li>액세서리</li>
                        <li>커피 용품</li>
                        <li>패키지 티(티바나)</li>
                      </ul>
                    </li>
                    <li>
                      <h4>카드</h4>
                      <ul>
                        <li>실물카드</li>
                        <li>e-Gift 카드</li>
                      </ul>
                    </li>
                    <li>
                      <h4>메뉴 이야기</h4>
                      <ul>
                        <li>콜드 브루</li>
                        <li>스타벅스 티바나</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <S.ContentsTexture>
                  <S.Inner>
                    <h4 class="new">스타벅스 티바나</h4>
                    <p>다양한 찻잎과 향신료 등 개성있는 재료로  로운 맛과 향의 티를 선보입니다.</p>
                  </S.Inner>
                </S.ContentsTexture>
              </S.ItemContents>
            </li>
            <li class="item">
              <S.ItemName>STORE</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>매장 찾기</h4>
                      <ul>
                        <li>퀵 검색</li>
                        <li>지역 검색</li>
                        <li>My 매장</li>
                      </ul>
                    </li>
                    <li>
                      <h4>매장 이야기</h4>
                      <ul>
                        <li>청담스타</li>
                        <li>티바나 인스파이어드 매장</li>
                        <li>파미에파크</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <div>
                  <S.Inner>
                    <h4>매장 찾기</h4>
                    <p>보다 빠르게 매장을 찾아보세요.</p>
                    <h4 class="new">청담스타</h4>
                    <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
                  </S.Inner>
                </div>
              </S.ItemContents>
            </li>
            <li class="item">
              <S.ItemName>RESPONSIBILITY</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>지역 사회 참여 활동</h4>
                      <ul>
                        <li>회망배달 캠페인</li>
                        <li>재능기부 카페 소식</li>
                        <li>커뮤니티 스토어</li>
                        <li>청년인재 양성</li>
                        <li>우리 농산물 사랑 캠페인</li>
                        <li>우리 문화 지키기</li>
                      </ul>
                    </li>
                    <li>
                      <h4>환경보호 활동</h4>
                      <ul>
                        <li>환경 발자국 줄이기</li>
                        <li>일회용 컵 없는 매장</li>
                        <li>커피 원두 재활용</li>
                      </ul>
                    </li>
                    <li>
                      <h4>윤리 구매</h4>
                      <ul>
                        <li>윤리적 원두 구매</li>
                        <li>공정무역 인증</li>
                        <li>커피 농가 지원 활동</li>
                      </ul>
                    </li>
                    <li>
                      <h4>글로벌 사회 공헌</h4>
                      <ul>
                        <li>윤리경영 보고서</li>
                        <li>스타벅스 재단</li>
                        <li>지구촌 봉사의 달</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <S.ContentsTexture>
                  <S.Inner>
                    <h4>커피원두 재활용</h4>
                    <p>스타벅스 커피 원두를 재활용 해보세요.</p>
                  </S.Inner>
                </S.ContentsTexture>
              </S.ItemContents>
            </li>
            <li class="item">
              <S.ItemName>MY STARBUCKS REWARDS</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>마이 스타벅스 리워드</h4>
                      <ul>
                        <li>마이 스타벅스 리워드 소개</li>
                        <li>등급 및 혜택</li>
                        <li>스타벅스 별</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                    <li>
                      <h4>스타벅스 카드</h4>
                      <ul>
                        <li>스타벅스 카드 소개</li>
                        <li>스타벅스 카드 갤러리</li>
                        <li>등록 및 조회</li>
                        <li>충전 및 이용안내</li>
                        <li>분실신고/환불신청</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                    <li>
                      <h4>스타벅스 카드 e-Gift</h4>
                      <ul>
                        <li>스타벅스 카드 e-Gift 소개</li>
                        <li>이용안내</li>
                        <li>선물하기</li>
                        <li>자주하는 질문</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <S.ContentsTexture>
                  <S.Inner>
                    <h4>스타벅스 카드 등록하기</h4>
                    <p>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</p>
                  </S.Inner>
                </S.ContentsTexture>
              </S.ItemContents>
            </li>
            <li class="item">
              <S.ItemName>WHAT'S NEW</S.ItemName>
              <S.ItemContents>
                <S.Contentsmenu>
                  <S.Inner>
                    <li>
                      <h4>프로모션 & 이벤트</h4>
                      <ul>
                        <li>전체</li>
                        <li>스타벅스 카드</li>
                        <li>마이 스타벅스 리워드</li>
                        <li>온라인</li>
                        <li>2017 스타벅스 플래너</li>
                      </ul>
                    </li>
                    <li>
                      <h4>새소식</h4>
                      <ul>
                        <li>전체</li>
                        <li>상품 출시</li>
                        <li>스타벅스의 문화</li>
                        <li>스타벅스 사회공헌</li>
                        <li>스타벅스 카드출시</li>
                      </ul>
                    </li>
                    <li>
                      <h4>매장별 이벤트</h4>
                      <ul>
                        <li>일반 매장</li>
                        <li>신규 매장</li>
                      </ul>
                    </li>
                  </S.Inner>
                </S.Contentsmenu>
                <S.ContentsTexture>
                  <S.Inner>
                    <h4>매장별 이벤트</h4>
                    <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
                    <h4>소셜 스타벅스</h4>
                    <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
                  </S.Inner>
                </S.ContentsTexture>
              </S.ItemContents>
            </li>
          </S.MainMenu>
        </S.Inner>
      </S.Header>

      
      <S.Box >
        <S.Title>BEST POST</S.Title>
        <S.Listall>
          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
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
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
                </S.Listlike>
                </S.Flex>
              </S.Bottombx>
          </S.Listbx>

          <S.Listbx>
              <S.Topbx></S.Topbx>
              <S.Bottombx>
                <S.BxTitle>제목입니다.</S.BxTitle>
                <S.Flex>
                  <div>
                    <S.Userbx>
                      <S.User></S.User>
                      <S.Listname>작성자</S.Listname>
                    </S.Userbx>
                    <S.Listdate>2022-09-07</S.Listdate>
                  </div>
                
                <S.Listlike>
                  <img src="/like.png" alt="좋아요아이콘"></img>
                  <S.Likecount>377</S.Likecount>
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
