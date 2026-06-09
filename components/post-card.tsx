import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={post.image_url}
          alt={post.title}
          width={800}
          height={500}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-[#1f4f46]">
            {post.category?.name ?? "Review"}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#6b4b2b]">
            <Star size={15} fill="currentColor" /> {post.score.toFixed(1)}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-[#1d1a16]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#686159]">
          {post.excerpt}
        </p>
        <p className="mt-4 text-sm font-medium text-[#1f4f46]">
          Ler review completo
        </p>
      </div>
    </Link>
  );
}
