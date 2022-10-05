export default function CoffeeItem({ item }) {
  const { id, img, name, title, price, desc } = item;
  return (
    <>
      <li>
        <img src={img} alt={title} />
        <h2>분류 : {name}</h2>
        <h3>{title}</h3>
        <h3>가격 : {price}</h3>
        <h3>정보 : {desc}</h3>
      </li>
    </>
  );
}
