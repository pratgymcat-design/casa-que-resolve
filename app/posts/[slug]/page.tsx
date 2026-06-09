import { ArrowUpRight, Check, ChevronRight, Clock, HelpCircle, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

function renderContent(content: string) {
  const lines = content.split("\n").map((line) => line.trim());
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    elements.push(
      <ul key={`list-${elements.length}`} className="mb-7 space-y-3">
        {listItems.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-7 text-[#49433c]">
            <Check className="mt-1 shrink-0 text-[#1f4f46]" size={18} />
            <span>{item}</span>
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    if (!line) {
      flushList();
      return;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (line.startsWith("FAQ:")) {
      const [question, answer] = line.slice(4).split("|").map((part) => part.trim());
      if (question && answer) {
        elements.push(
          <details
            key={`faq-${index}`}
            className="mb-3 rounded-lg border border-[#e4ddd2] bg-[#fbfaf7] p-4"
          >
            <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-[#1d1a16]">
              <HelpCircle className="text-[#1f4f46]" size={18} />
              {question}
            </summary>
            <p className="mt-3 text-base leading-7 text-[#686159]">{answer}</p>
          </details>,
        );
      }
      return;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={`h3-${index}`} className="mb-3 mt-7 text-xl font-semibold text-[#1d1a16]">
          {line.slice(4)}
        </h3>,
      );
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={`h2-${index}`} className="mb-4 mt-9 text-2xl font-semibold text-[#1d1a16]">
          {line.slice(3)}
        </h2>,
      );
      return;
    }

    elements.push(
      <p key={`p-${index}`} className="mb-6 text-lg leading-8 text-[#49433c]">
        {line}
      </p>,
    );
  });

  flushList();
  return elements;
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
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#686159]">
          <Link href="/" className="hover:text-[#1f4f46]">
            Inicio
          </Link>
          <ChevronRight size={15} />
          <Link href="/categorias" className="hover:text-[#1f4f46]">
            Categorias
          </Link>
          {post.category ? (
            <>
              <ChevronRight size={15} />
              <Link
                href={`/categorias/${post.category.slug}`}
                className="hover:text-[#1f4f46]"
              >
                {post.category.name}
              </Link>
            </>
          ) : null}
        </nav>
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

      <article className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1fr_340px] md:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
          <div className="mb-8 rounded-lg border border-[#d7eadf] bg-[#eef8f2] p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
              Resumo rapido
            </p>
            <p className="mt-2 text-base leading-7 text-[#49433c]">
              {post.excerpt}
            </p>
          </div>
          {renderContent(post.content)}
        </div>

        <aside className="h-fit rounded-lg border border-[#e4ddd2] bg-white p-5 shadow-sm md:sticky md:top-24">
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
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#1f4f46]">
                  Produto recomendado
                </p>
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
                    className="flex items-center justify-between gap-3 rounded-md bg-[#1f4f46] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173d36]"
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
