import { ArrowRight, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group overflow-hidden rounded-lg border border-[#e4ddd2] bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#cdbda9] hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image_url}
          alt={post.title}
          width={800}
          height={500}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#1f4f46] shadow-sm">
          {post.category?.name ?? "Review"}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-sm text-[#686159]">
          <span className="inline-flex items-center gap-1">
            <Clock size={15} /> {post.reading_time} min
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#f4eadb] px-2.5 py-1 font-bold text-[#6b4b2b]">
            <Star size={15} fill="currentColor" /> {post.score.toFixed(1)}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-[#1d1a16]">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#686159]">
          {post.excerpt}
        </p>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1f4f46]">
          Ver recomendacao <ArrowRight size={16} />
        </p>
      </div>
    </Link>
  );
}
