import CoffeeItem from "../coffeeItem";
import * as S from "../../../../styles/starbucks";

export default function CoffeeList({ data }) {
  return (
    <>
      <S.List>
        {data.map((item) => (
          <CoffeeItem key={item.id} item={item} />
        ))}
      </S.List>
    </>
  );
}
