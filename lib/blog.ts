import { fallbackCategories, fallbackPosts } from "@/lib/fallback-data";
import { createSupabaseClient } from "@/lib/supabase";
import type { Category, Post } from "@/lib/types";

type DbPost = Omit<Post, "category" | "product"> & {
  categories: Category | null;
  products:
    | (NonNullable<Post["product"]> & {
        affiliate_links: NonNullable<Post["product"]>["affiliate_links"] | null;
      })
    | null;
};

const postSelect = `
  id,
  title,
  slug,
  excerpt,
  content,
  image_url,
  published_at,
  reading_time,
  score,
  featured,
  categories (
    id,
    name,
    slug,
    description
  ),
  products (
    id,
    name,
    brand,
    short_description,
    rating,
    pros,
    cons,
    affiliate_links (
      id,
      merchant,
      label,
      url,
      price_note
    )
  )
`;

function normalizePost(post: DbPost): Post {
  return {
    ...post,
    category: post.categories,
    product: post.products
      ? {
          ...post.products,
          affiliate_links: post.products.affiliate_links ?? [],
        }
      : null,
  };
}

export async function getPosts(): Promise<Post[]> {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return fallbackPosts;
  }

  const { data, error } = await supabase
    .from("posts")
    .select(postSelect)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data?.length) {
    return fallbackPosts;
  }

  return (data as unknown as DbPost[]).map(normalizePost);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  const { data, error } = await supabase
    .from("posts")
    .select(postSelect)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error || !data) {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }

  return normalizePost(data as unknown as DbPost);
}

export async function getCategories(): Promise<Category[]> {
  const supabase = createSupabaseClient();

  if (!supabase) {
    return fallbackCategories;
  }

  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, description")
    .order("name");

  if (error || !data?.length) {
    return fallbackCategories;
  }

  return data as Category[];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) ?? null;
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.category?.slug === slug);
}
