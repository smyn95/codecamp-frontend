import { useState } from "react";
import LayoutBanner from "../../src/components/commons/layout/banner";
import MenuList from "./starbucks";
import { menuList } from "../../src/assets/api/menu";
import CoffeeList from "./starbucks/coffeeList";
import * as S from "../../styles/starbucks";

export default function MainPage() {
  const [data, setData] = useState(menuList.slice(0, 12));
  const [menu, setMenu] = useState([{ name: "BEST" }]);

  const onMenu = (name) => {
    if (name === "all") {
      setData(menuList);
    } else {
      setData(menuList.filter((item) => item.name === name));
    }
  };

  return (
    <>
      <S.MenuBox>
        <LayoutBanner />
        <MenuList menu={menu} onMenu={onMenu} />
        <CoffeeList data={data.slice(0, 12)} />
      </S.MenuBox>
    </>
  );
}
