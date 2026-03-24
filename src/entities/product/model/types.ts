export interface Product {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  sku: string;
  rating: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsQueryParams {
  limit?: number;
  skip?: number;
  sortBy?: keyof Omit<Product, "id">;
  order?: "asc" | "desc";
  q?: string;
}
