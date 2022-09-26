import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiPage() {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(
        "https://openapi.lotteon.com/v1/openapi/product/v1/product/list"
      );
      console.log(result.data.message);
      setProduct(result.data.message);
    };

    void fetchProduct();
  }, []);

  return (
    <div>
      <img src={product} />
    </div>
  );
}
