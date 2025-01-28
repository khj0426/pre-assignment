import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../../_actions";

interface UseGetInfinityProductsProp {
  limit?: number;
  skip?: number;
}

export function useGetInfinityProducts({
  limit = 15,
  skip = 0,
}: UseGetInfinityProductsProp) {
  return useSuspenseInfiniteQuery({
    queryKey: [`/products/${limit}/${skip}`],
    queryFn: (page) =>
      getProducts({
        skip: page.pageParam + limit,
        limit,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.skip + lastPage.limit < lastPage.total
        ? lastPage.skip + lastPage.limit
        : undefined;
    },
  });
}
