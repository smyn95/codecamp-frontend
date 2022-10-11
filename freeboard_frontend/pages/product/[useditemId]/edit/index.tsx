import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWritePage from "../../new/newIndex";
import { FETCH_USED_ITEM } from "../../product.queries";

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  return <ProductWritePage isEdit={true} data={data} />;
}
