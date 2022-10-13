import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import ProductWritePage from "../../new/newIndex";
import { FETCH_USED_ITEM } from "../../product.queries";

export default function ProductEditPage() {
  const router = useRouter();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  console.log(data);
  return <ProductWritePage isEdit={true} data={data} refetch={refetch} />;
}
