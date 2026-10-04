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

// A changelog-style row: mono date, title and summary, arrow on hover.
export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <li className="border-b border-neutral-200 last:border-b-0">
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid gap-2 p-6 transition-colors hover:bg-white sm:grid-cols-[160px_1fr_auto] sm:gap-8 sm:p-10"
      >
        <time
          dateTime={post.pubDate}
          className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-500 sm:pt-1.5"
        >
          {formatDate(post.pubDate)}
        </time>
        <div>
          <h2 className="text-xl font-medium tracking-tight text-neutral-950 sm:text-2xl">
            {post.title}
          </h2>
          {post.description ? (
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-neutral-500">
              {post.description}
            </p>
          ) : null}
        </div>
        <ArrowUpRight
          className="hidden h-5 w-5 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950 sm:block"
          aria-hidden="true"
        />
      </a>
    </li>
  );
}
