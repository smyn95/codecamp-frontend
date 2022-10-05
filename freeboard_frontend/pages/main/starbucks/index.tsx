import MenuItem from "./menuItem";

export default function MenuList({ menu }) {
  return (
    <>
      <ul className="menu">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </>
  );
}
