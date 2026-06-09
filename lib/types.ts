export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type AffiliateLink = {
  id: string;
  merchant: string;
  label: string;
  url: string;
  price_note: string | null;
};

export type Product = {
  id: string;
  name: string;
  brand: string | null;
  short_description: string | null;
  rating: number;
  pros: string[];
  cons: string[];
  affiliate_links: AffiliateLink[];
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  published_at: string;
  reading_time: number;
  score: number;
  featured: boolean;
  category: Category | null;
  product: Product | null;
};
