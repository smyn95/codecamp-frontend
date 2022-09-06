import { useQuery,gql,useMutation } from '@apollo/client';
import * as S from '../../../styles/class_quiz';
import { Fragment } from 'react';

const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
    }
  }
`
const DELETE_PRODUCT = gql`
  mutation deleteBoard($productId:ID){
    deleteProduct(productId: $productId){
      message
    }
  }
`

export default function ProductListPage(){
  const [deleteProduct] = useMutation(DELETE_PRODUCT)
  const {data} = useQuery(FETCH_PRODUCTS)
  
  console.log(data)

  const onClickDelete = async (event) => {
    await deleteProduct({
      variables:{ productId:String(event.target.id)
      },
      refetchQueries:[{query:FETCH_PRODUCTS}]
    })
  }

  return(
    <Fragment>
      {data?.fetchProducts.map((el) => (
        <S.Row key={el._id} >
            <S.Column><input type="checkbox" /></S.Column>
            <S.Column>{el._id}</S.Column>
            <S.Column>{el.seller}</S.Column>
            <S.Column>{el.name}</S.Column>
            <S.Column>{el.detail}</S.Column>
            <S.Column>{el.price}</S.Column>
            <S.Column>
                  <button id={el._id} onClick={onClickDelete}>삭제</button>
            </S.Column>
        </S.Row>
      ))}  
    </Fragment>
  )

}
