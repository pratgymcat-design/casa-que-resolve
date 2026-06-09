import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getCategories, getPosts } from "@/lib/blog";

export const metadata = {
  title: "Categorias",
  description: "Categorias de reviews do Casa Que Resolve.",
};

export const revalidate = 300;

export default async function CategoriesPage() {
  const [categories, posts] = await Promise.all([getCategories(), getPosts()]);

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
        Categorias
      </p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-[#1d1a16]">
        Encontre reviews pelo tipo de problema que voce quer resolver
      </h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {categories.map((category) => {
          const total = posts.filter(
            (post) => post.category?.slug === category.slug,
          ).length;

          return (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="rounded-lg border border-[#e4ddd2] bg-white p-6 transition hover:border-[#1f4f46]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h2 className="text-2xl font-semibold">{category.name}</h2>
                  <p className="mt-3 leading-7 text-[#686159]">
                    {category.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#1f4f46]">
                    {total} {total === 1 ? "review" : "reviews"}
                  </p>
                </div>
                <ArrowRight className="mt-1 text-[#1f4f46]" />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
