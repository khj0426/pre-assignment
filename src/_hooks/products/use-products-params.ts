import { parseAsInteger, useQueryState } from "nuqs";

export const useProductListPageSearchParams = () => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ clearOnDefault: true })
  );

  return {
    page,
    setPage,
  };
};
