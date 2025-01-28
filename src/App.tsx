import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Spinner, ErrorFallback } from "./_components";
import { useGetInfinityProducts } from "./_hooks/products";
import { ProductCard } from "./_components";
import { useIntersectionObserver } from "./_hooks/common/use-intersection-observer";
import styled from "styled-components";

function ProductListHome() {
  const {
    data: productListData,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useGetInfinityProducts({
    limit: 15,
  });

  const { target } = useIntersectionObserver({
    callback: () => {
      if (hasNextPage) {
        fetchNextPage();
      }
    },
  });

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
        <ProductHomeLayout>
          {productListData?.pages.flatMap((card) =>
            card.products.map((eachCard) => (
              <ProductCard key={eachCard.id} product={eachCard} />
            ))
          )}
          <div ref={target}></div>
        </ProductHomeLayout>
      </Suspense>
    </ErrorBoundary>
  );
}

export default ProductListHome;

const ProductHomeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  min-height: 530px;
  height: auto;
  margin: 15px auto;
`;
