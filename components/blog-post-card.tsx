import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/feed";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <li>
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {post.image && (
          <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-neutral-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
            {post.title}
          </h3>
          <ArrowUpRight
            className="mt-2 hidden h-5 w-5 shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 md:block"
            aria-hidden="true"
          />
        </div>

        {post.description && (
          <p className="mt-3 text-base font-medium leading-relaxed text-neutral-500">
            {post.description}
          </p>
        )}

        <p className="mt-3 text-xs font-medium tabular-nums text-neutral-400">
          {post.author && <span>{post.author} · </span>}
          {formatDate(post.pubDate)}
        </p>
      </a>
    </li>
  );
}
