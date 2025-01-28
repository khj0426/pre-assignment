"use client";

import styled from "styled-components";
import { ProductListItem } from "../../_actions/products/get-products/productsSchema";

const ProductCardContainer = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 375px;
  margin: 20px;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductContent = styled.div`
  padding: 20px;
`;

export function ProductCard({ product }: { product: ProductListItem }) {
  const isDeliveredOvernight =
    product.shippingInformation === "Ships overnight";
  return (
    <ProductCardContainer>
      <img src={product.thumbnail} width={350} height={200} alt="상품 이미지" />
      <ProductContent>
        <h3
          style={{
            width: "300px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          title={product.title}
        >
          {product.title}
        </h3>
        <span>별점: {product.rating}</span>
        <span
          style={{
            marginLeft: "100px",
          }}
        >
          가격: {product.price} 원
        </span>
        <p
          style={{
            padding: "5px",
            borderRadius: "5px",
            position: "relative",
            bottom: "0",
            right: "100",
            color: "#45a049",
          }}
        >
          {isDeliveredOvernight ? "오늘출발" : product.shippingInformation}
        </p>

        <p>{product.shippingInformation}</p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            padding: "20px",
            margin: "2px",
          }}
        >
          <span
            style={{
              backgroundColor: "#e0e0e0",
              padding: "5px",
              borderRadius: "5px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            {product.freeshipping ? "무료 배송" : "유료 배송"}
          </span>
        </div>
      </ProductContent>
    </ProductCardContainer>
  );
}
