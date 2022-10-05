import MenuItem from "./menuItem";

export default function MenuList({ menu, onMenu }) {
  return (
    <>
      <ul className="menu">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} onMenu={onMenu} />
        ))}
      </ul>
    </>
  );
}
