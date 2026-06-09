import {
  ArrowRight,
  BadgeCheck,
  Home,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
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
  const topListPosts = remainingPosts.slice(0, 4);
  const gridPosts = remainingPosts.slice(4);

  return (
    <main>
      <section className="border-b border-[#e4ddd2] bg-[#f7f2ea]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 lg:px-10">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9cab8] bg-white px-3 py-1.5 text-sm font-semibold text-[#6b4b2b]">
              <BadgeCheck size={16} />
              Reviews claros para comprar sem arrependimento
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7eadf] bg-white px-3 py-1.5 text-sm font-semibold text-[#1f4f46]">
              <TrendingUp size={16} />
              Casa, tecnologia e achados uteis
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr]">
            {heroPost ? (
              <Link
                href={`/posts/${heroPost.slug}`}
                className="group grid overflow-hidden rounded-lg border border-[#ded4c6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
                    Guia em destaque
                  </p>
                  <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1d1a16] md:text-6xl">
                    {heroPost.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f5a52]">
                    {heroPost.excerpt}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#eef8f2] px-3 py-1.5 text-sm font-semibold text-[#1f4f46]">
                      <Star size={16} fill="currentColor" />
                      Nota {heroPost.score.toFixed(1)}
                    </span>
                    <span className="rounded-full bg-[#f4eadb] px-3 py-1.5 text-sm font-semibold text-[#6b4b2b]">
                      {heroPost.category?.name ?? "Review"}
                    </span>
                  </div>
                  <p className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1f4f46]">
                    Ler guia completo <ArrowRight size={18} />
                  </p>
                </div>
                <div className="aspect-[16/11] overflow-hidden md:aspect-auto">
                  <Image
                    src={heroPost.image_url}
                    alt={heroPost.title}
                    width={900}
                    height={760}
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            ) : null}

            <aside className="rounded-lg border border-[#ded4c6] bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Mais buscados agora</h2>
                <Link href="/categorias" className="text-sm font-semibold text-[#1f4f46]">
                  Ver tudo
                </Link>
              </div>
              <div className="divide-y divide-[#eee7dc]">
                {topListPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="grid grid-cols-[44px_1fr] gap-3 py-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#173d36] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[#1f4f46]">
                        {post.category?.name ?? "Review"}
                      </span>
                      <span className="mt-1 block font-semibold leading-snug text-[#1d1a16]">
                        {post.title}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
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

      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-6 md:px-8 lg:px-10">
          {categories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.slug}`}
              className="rounded-full border border-[#d8cebf] px-4 py-2 text-sm font-semibold text-[#49433c] transition hover:border-[#1f4f46] hover:text-[#1f4f46]"
            >
              {category.name}
            </Link>
          ))}
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
          {gridPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-[#183d36] py-14 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9bd8bd]">
              Escolha por problema
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Categorias para encontrar o produto certo mais rapido
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
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
