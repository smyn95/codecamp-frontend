import styled from '@emotion/styled'
 
export const Box = styled.div`
  width:1400px;
  padding:30px 50px;
  margin:50px auto;
  box-shadow:0px 0px 10px #ccc;
  height:1550px;
`
export const Titlebx = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      font-family: 'Nanum Myeongjo', serif;
    }
`
export const Title = styled.h1`
  font-size:40px;
  font-weight:bold;
  text-align:center;
  color:#e0e0e0;
  font-family: 'Libre Bodoni', serif;
  text-transform: uppercase;
  letter-spacing: 3px;
`
export const Textbx = styled.div`
  margin-top:50px;
`
export const Input = styled.input`
    height:50px;
    outline:none;
    border:1px solid transparent;
    padding:0 15px;
    border-bottom:1px solid #777;
    width:100%;
    margin-bottom:10px;
    opacity:0.5;
`
export const Contents = styled.textarea`  
    width: 100%;
    height: 450px;
    padding: 15px;
    border:1px solid #777;
    resize:none;
    border-radius:10px;
    opacity:0.5;
`
export const Font = styled.p`
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    color: #111;
    text-align: left;
    border-radius: 5px;
    padding: 5px 50px 5px 0;
    font-family: 'Nanum Myeongjo', serif;
`

export const Imgbx = styled.span`
    width:80px;
    height:80px;
    background:#bdbdbd;
    display:inline-block;
    margin-right:10px;
`

export const Codezip = styled.input`
    height:50px;
    outline:none;
    border:1px solid transparent;
    padding:0 15px;
    border-bottom:1px solid #777;
    width:300px;
    opacity:0.5;
    margin:0 30px 10px 0;
    
`
export const Search = styled.button`
    width:125px;
    height:50px;
    font-size:14px;
    color:#fff;
    font-weight:500;
    background:deepskyblue;
    border: none;
    border-radius:5px;
`
export const Setting = styled.div`
  margin-top:30px;  
  input{
    height:30px;
    vertical-align: middle;
    margin-right:5px;
  }
  span{
    font-weight:bold;
    display:inline-block;
    margin-right:20px;
  }
  input[type=radio]{
    accent-color: currentcolor;
  }
`
export const Submit = styled.h1`
  p{
    background:deepskyblue;
    color:#fff;
    font-weight:bold;
    width:180px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    cursor:pointer;
    font-family: 'Nanum Myeongjo', serif;
}
`
export const Routing = styled.p`
    border-radius: 5px;
    background: deepskyblue;
    color: #fff;
    width: 800px;
    height: 50px;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
    margin-right: 10px;
    font-size:18px;
`

//게시글 목록
export const Row = styled.div`
    display: flex;
`

export const Column = styled.div`
    width: 25%;
`



//fetchBoards 게시글 목록 부분
export const Listall = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Listbx = styled.div`
  width:300px;
  height:250px;
  border-radius:10px;
  overflow:hidden;
  box-shadow: 5px 5px 10px #eee;
`
export const Topbx = styled.div`
  width:300px;
  padding-bottom: 42%;
  background:#ccc;
`
export const Bottombx = styled.div`
  width:300px;
  padding:15px;
  box-sizing:border-box;
`
export const BxTitle = styled.strong`
  font-size:18px;
  font-weight:500;
`
export const Userbx = styled.div`
  display:flex;
  padding: 20px 0 10px 0;
  box-sizing:border-box;
  align-items: center;
`
export const User = styled.div`
  width: 20px;
  height: 20px;;
  border-radius:50%;
  background-color:#bdbdbd;
  margin:0px 10px 0 0;
`
export const Listname = styled.p`
  font-size:18px;
  font-weight:500;
  letter-spacing:1px;
  margin:0;
`
export const Listdate = styled.p`
  color:#aaa;
  font-size:15px;
  font-weight:400;
  margin:0;
`
export const Listlike = styled.div`
  img{
      width:25px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Likecount = styled.p`
  font-size:16px;
  padding-top:5px;
`
export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

//검색창 부분
export const Searchbx = styled.div`
  margin-top:70px;
  position:relative;
  height:50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &&:after{
      content:"";
      background-image:url("/Vector.png");
      background-size:cover;
      display: block;
      position:absolute;
      width:20px;
      height:20px;
      top:15px;
      left:730px;
      z-index:10;
    }
  input{
    background:#f2f2f2;
    width:780px;
    height:50px;
    outline:none;
    border-radius:10px;
    border:none;
    padding:0 20px;
  }
`
export const Calender = styled.div`
  width:300px;
  height:100%;
  border:1px solid #bdbdbd;
  border-radius:10px;
`
export const Searchbtn = styled.button`
  background-color:deepskyblue;
  color:#fff;
  width: 100px;
  font-size: 16px;
  font-family: 'Nanum Myeongjo', serif;
`

//게시글 리스트
export const Boardlist = styled.div`
  border-top: 2px solid deepskyblue ;
  margin-top: 40px;
  border-bottom: 2px solid deepskyblue;
`

export const Listfirst = styled.li`
  border-top:1px solid #ccc;
  padding:15px 0;
  color:#111;
  &&:first-child{
    border-top:none;
    font-size:18px;
    font-weight:500;
    
  }
  > ul{
    display:flex;
    li:last-child{
      flex-grow:0.3;
    }
    li:nth-child(3){
      flex-grow:0.3;
    }
    li:nth-child(2){
      flex-grow:2;
    }
    li:first-child{
      flex-grow:0.2;
    }
   > li{
      text-align:center;
      color:#777;
    }
  }
`
export const Listtitle = styled.ul`
  li{
  color:#111 !important;
} 
`

//페이징 부분
export const Bottomrow = styled.div`
  display:flex;
  align-items: center;
`
export const Paging = styled.div`
  display:flex;
  margin:0 auto;
  padding: 40px 0;
  
`
export const Prev = styled.button`
  cursor:pointer;
  font-size:20px;
`
export const next = styled.button`
  cursor:pointer;
  font-size:20px;
`
export const Ullist = styled.ul`
  display:flex;
  font-size:20px;
  font-weight:300;
  margin:0 20px;
  li{
    margin:0 5px;
  }
`
export const Paginglist = styled.ul`
  display:flex;
  margin:0 auto;
  font-size:20px;

`

//등록하기 버튼
export const Registration = styled.button`
  border:1px solid #777;
  width:170px;
  height:50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Nanum Myeongjo', serif;
  font-weight:500;
`