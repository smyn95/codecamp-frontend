import { useState } from "react";
import LayoutBanner from "../../src/components/commons/layout/banner";
import MenuList from "./starbucks";
import menuList from "../../src/assets/api/menu";
import CoffeeList from "./starbucks/coffeeList";

export default function MainPage() {
  const [data, setData] = useState(menuList);
  const [menu, setMenu] = useState([
    { name: "ALL" },
    { name: "COLD BREW" },
    { name: "ESPRESSO" },
    { name: "FRAPPUCCINO" },
    { name: "FIZZIO" },
  ]);

  return (
    <>
      <LayoutBanner />
      <MenuList menu={menu} />
      <CoffeeList data={data} />
    </>
  );
}
