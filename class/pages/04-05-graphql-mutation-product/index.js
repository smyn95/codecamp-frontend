import {gql,useMutation} from '@apollo/client'


const CREATE_PRODUCT = gql `
     mutation createProduct($seller: String, $createProductInput: createProductInput!){  #타입 적는 곳
     createProduct(seller: $seller, createProductInput: $createProductInput){   # 실제 우리가 전달할  변수 적는 곳
        _id
        number
        message
    }
  }
`

export default function GraphqlMutationPage(){
  const [createProduct] =  useMutation(CREATE_PRODUCT) //useMutation 를 import 해야 쓸 수 있다. gql도 마찬가지

  const onClickSubmit = async () => {
    //const writer = "qqq" //이 함수에 있으면 현재 스코프
    const result = await createProduct({
      variables: { //variables 이게 $ 역할을 해줌
        seller: "me", // 이 함수에 없으면 스코프 체인을 통해서 위 함수로 들어가 찾음
        createProductInput: {
          name: "마우스",
          detail: "좋네",
          price: 2000
        }
      }
    })
    console.log(result)
    alert(result.data.createProduct.message)
  }

  return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>

}