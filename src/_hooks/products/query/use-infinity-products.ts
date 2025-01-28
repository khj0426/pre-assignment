import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../../_actions";

interface UseGetInfinityProductsProp {
  limit: number;
  skip: number;
}

export function useGetInfinityProducts({
  limit = 15,
  skip = 0,
}: UseGetInfinityProductsProp) {
  return useInfiniteQuery({
    queryKey: [`/products/${limit}/${skip}`],
    queryFn: () =>
      getProducts({
        skip,
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
