import { ArrowRight, BadgeCheck, Home, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getCategories, getFeaturedPosts, getPosts } from "@/lib/blog";

export const revalidate = 300;

export default async function HomePage() {
  const [posts, featuredPosts, categories] = await Promise.all([
    getPosts(),
    getFeaturedPosts(),
    getCategories(),
  ]);

  const heroPost = featuredPosts[0] ?? posts[0];
  const remainingPosts = posts.filter((post) => post.slug !== heroPost?.slug);

  return (
    <main>
      <section className="bg-[#f7f2ea]">
        <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9cab8] bg-white/70 px-3 py-1.5 text-sm font-medium text-[#6b4b2b]">
              <BadgeCheck size={16} />
              Reviews claros para comprar sem arrependimento
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] text-[#1d1a16] md:text-7xl">
              Casa Que Resolve
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a52]">
              Guias de compra, comparativos e reviews de produtos para deixar
              sua casa mais pratica, inteligente e confortavel.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/categorias"
                className="inline-flex items-center gap-2 rounded-md bg-[#1f4f46] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173d36]"
              >
                Ver categorias <ArrowRight size={18} />
              </Link>
              <Link
                href="/transparencia"
                className="inline-flex items-center gap-2 rounded-md border border-[#cdbda9] bg-white px-5 py-3 text-sm font-semibold text-[#1d1a16] transition hover:border-[#1f4f46]"
              >
                Como avaliamos
              </Link>
            </div>
          </div>

          {heroPost ? (
            <Link
              href={`/posts/${heroPost.slug}`}
              className="group block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={heroPost.image_url}
                  alt={heroPost.title}
                  width={900}
                  height={675}
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
                  Destaque
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1d1a16]">
                  {heroPost.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#686159]">
                  {heroPost.excerpt}
                </p>
              </div>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="border-y border-[#e4ddd2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 md:grid-cols-3 md:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <Search className="text-[#1f4f46]" size={22} />
            <span className="text-sm font-medium text-[#49433c]">
              Comparativos por necessidade real
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Home className="text-[#1f4f46]" size={22} />
            <span className="text-sm font-medium text-[#49433c]">
              Casa, tecnologia e home office
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#1f4f46]" size={22} />
            <span className="text-sm font-medium text-[#49433c]">
              Links de compra com transparencia
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
              Guias recentes
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#1d1a16]">
              Reviews para decidir melhor
            </h2>
          </div>
          <Link
            href="/categorias"
            className="hidden items-center gap-2 text-sm font-semibold text-[#1f4f46] md:inline-flex"
          >
            Explorar tudo <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-[#183d36] py-12 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categorias/${category.slug}`}
                className="rounded-lg border border-white/15 bg-white/8 p-5 transition hover:bg-white/14"
              >
                <h3 className="font-semibold">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
