import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Spinner, ErrorFallback } from "./_components";
import { useGetInfinityProducts } from "./_hooks/products";
import { useProductListPageSearchParams } from "./_hooks/products";
function ProductListHome() {
  const { page } = useProductListPageSearchParams();
  const { data, refetch } = useGetInfinityProducts({
    skip: page,
    limit: 15,
  });

  console.log(data);
  return (
    <ErrorBoundary
      fallback={
        <ErrorFallback
          errorMessage="상품 정보를 조회할 수 없습니다."
          resetErrorBoundary={refetch}
        />
      }
    >
      <Suspense fallback={<Spinner />}>
        <div></div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default ProductListHome;
