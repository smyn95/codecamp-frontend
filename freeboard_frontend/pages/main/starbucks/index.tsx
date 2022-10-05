import MenuItem from "./menuItem";
import * as S from "../../../styles/starbucks";

export default function MenuList({ menu, onMenu }) {
  return (
    <>
      <S.Menu>
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} onMenu={onMenu} />
        ))}
      </S.Menu>
    </>
  );
}
