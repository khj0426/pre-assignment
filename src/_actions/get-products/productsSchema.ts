import { z } from "zod";

export const productItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  rating: z.number(),
  thumbnail: z.string().url(),
  freeshipping: z.boolean().optional(),
  shippingInformation: z.string(),
});

export type ProductListItem = z.infer<typeof productItemSchema>;

export const productListSchema = z.object({
  products: z.array(productItemSchema),
  total: z.number(),
  limit: z.number(),
  skip: z.number(),
});

export type GetProductListResponse = z.infer<typeof productListSchema>;
