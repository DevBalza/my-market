export interface IECommerceResponse {
  results: Result[];
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
export interface Result {
  results: any;
  images: string[];
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
}
