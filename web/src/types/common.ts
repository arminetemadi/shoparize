type PredictedProp = {
  [name: string]: any;
};

type Product = {
  adult: string;
  availability: string;
  brand: string;
  color: string;
  condition: string;
  description: string;
  gender: string;
  google_product_category: string;
  gtin: string;
  id: string;
  identifier_exists: string;
  image_link: string;
  link: string;
  mpn: string;
  price: string;
  shipping: string;
  title: string;
};

export type { PredictedProp, Product };