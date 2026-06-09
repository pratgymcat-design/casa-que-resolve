import { ArrowUpRight, Check, Clock, Star, X } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/blog";

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.title ?? "Review",
    description: post?.excerpt ?? "Review do Casa Que Resolve.",
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post?.image_url ? [post.image_url] : [],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="mx-auto max-w-4xl px-5 py-10 md:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-[#686159]">
          <span className="rounded-full bg-[#d7eadf] px-3 py-1 text-[#1f4f46]">
            {post.category?.name ?? "Review"}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={16} /> {post.reading_time} min de leitura
          </span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-5 text-xl leading-8 text-[#686159]">{post.excerpt}</p>
      </article>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Image
          src={post.image_url}
          alt={post.title}
          width={1200}
          height={600}
          priority
          sizes="(min-width: 1024px) 1152px, 100vw"
          className="aspect-[16/8] w-full rounded-lg object-cover"
        />
      </div>

      <article className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_320px] md:px-8">
        <div className="rounded-lg bg-white p-6 text-lg leading-8 shadow-sm ring-1 ring-black/5 md:p-8">
          {post.content.split("\n").map((paragraph) => (
            <p key={paragraph} className="mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="h-fit rounded-lg border border-[#e4ddd2] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
                Nota CQResolve
              </p>
              <p className="mt-1 text-4xl font-semibold">{post.score.toFixed(1)}</p>
            </div>
            <Star className="text-[#c8912e]" fill="currentColor" size={34} />
          </div>

          {post.product ? (
            <>
              <div className="mt-6 border-t border-[#eee7dc] pt-5">
                <h2 className="text-xl font-semibold">{post.product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#686159]">
                  {post.product.short_description}
                </p>
              </div>

              <div className="mt-5 grid gap-4">
                <div>
                  <h3 className="font-semibold">Pontos fortes</h3>
                  <ul className="mt-2 space-y-2 text-sm text-[#49433c]">
                    {post.product.pros.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 shrink-0 text-[#1f4f46]" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Pontos de atencao</h3>
                  <ul className="mt-2 space-y-2 text-sm text-[#49433c]">
                    {post.product.cons.map((item) => (
                      <li key={item} className="flex gap-2">
                        <X className="mt-0.5 shrink-0 text-[#9f4d38]" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {post.product.affiliate_links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-md bg-[#1f4f46] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#173d36]"
                  >
                    {link.label} em {link.merchant}
                    <ArrowUpRight size={17} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-[#81786d]">
                Podemos receber comissao quando voce compra por alguns links,
                sem custo extra para voce.
              </p>
            </>
          ) : null}
        </aside>
      </article>
    </main>
  );
}
