import CoffeeItem from "../coffeeItem";

export default function CoffeeList({ data }) {
  return (
    <>
      <ul className="list">
        {data.map((item) => (
          <CoffeeItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
