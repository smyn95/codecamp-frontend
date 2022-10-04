import LayoutBanner from "../../src/components/commons/layout/banner";
import axios from "axios";
import { useEffect, useState } from "react";
import { result } from "lodash";

export default function MainPage() {
  const [starbuckUrl, setStarbuckUrl] = useState([]);

  useEffect(() => {
    const fetchStarbucks = async () => {
      const result = await axios.get(
        "https://starbugs.herokuapp.com/api/menus"
      );
      setStarbuckUrl(result.data.slice(0, 5));
    };
    void fetchStarbucks();
  }, [starbuckUrl]);

  return (
    <>
      <LayoutBanner />
      {starbuckUrl?.map((el) => (
        <>
          {console.log(el.image)}
          <img src={el.image} alt="tt" />
        </>
      ))}
    </>
  );
}
