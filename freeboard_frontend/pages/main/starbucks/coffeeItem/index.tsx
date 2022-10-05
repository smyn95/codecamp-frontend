import * as S from "../../../../styles/starbucks";

export default function CoffeeItem({ item }) {
  const { id, img, name, title, price, desc } = item;
  return (
    <>
      <S.ListOver>
        <img src={img} alt={title} />
        <p>{title}</p>
      </S.ListOver>
    </>
  );
}
