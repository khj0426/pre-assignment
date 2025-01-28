import { GetProductListResponse, productListSchema } from "./productsSchema";

interface GetProductsRequestProps {
  limit: number;
  skip: number;
}

export async function getProducts({
  limit,
  skip,
}: GetProductsRequestProps): Promise<GetProductListResponse> {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    });

    const response = await fetch(
      `https://dummyjson.com/products?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const results = await response.json();
    const { success, data } = productListSchema.safeParse(results);
    if (!success) {
      throw new Error("데이터 형식이 올바르지 않습니다.");
    }
    const newproducts = data.products.map((product, index) => {
      return {
        ...product,
        freeshipping: index % 2 === 0 ? true : false,
      };
    });

    return {
      ...results,
      products: newproducts,
    };
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    throw new Error("알 수 없는 오류가 발생했습니다");
  }
}
