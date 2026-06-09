import { notFound } from "next/navigation";
import { PostCard } from "@/components/post-card";
import { getCategories, getCategoryBySlug, getPostsByCategory } from "@/lib/blog";

export const revalidate = 300;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  return {
    title: category?.name ?? "Categoria",
    description: category?.description ?? "Reviews por categoria.",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [category, posts] = await Promise.all([
    getCategoryBySlug(slug),
    getPostsByCategory(slug),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
        Categoria
      </p>
      <h1 className="mt-2 text-4xl font-semibold">{category.name}</h1>
      <p className="mt-4 max-w-2xl leading-7 text-[#686159]">
        {category.description}
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
