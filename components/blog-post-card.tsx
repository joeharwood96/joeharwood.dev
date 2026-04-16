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
        className="group block transition-colors hover:bg-foreground/[0.02] rounded-lg"
      >
        {post.image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="pt-4 pb-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {post.title}
            </h3>
            <ArrowUpRight
              className="hidden md:block w-5 h-5 mt-2 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </div>

          {post.description && (
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          )}

          <p className="mt-3 text-xs text-muted-foreground tabular-nums">
            {post.author && <span>{post.author} · </span>}
            {formatDate(post.pubDate)}
          </p>
        </div>
      </a>
    </li>
  );
}
