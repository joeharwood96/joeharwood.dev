import { SUBSTACK_FEED_URL } from "./constants";

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
  author?: string;
};

function extractTag(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(
      `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`
    )
  );
  return (match?.[1] ?? match?.[2] ?? "").trim();
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, "i"));
  return match?.[1] ?? "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(SUBSTACK_FEED_URL, {
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.match(/<item[\s>][\s\S]*?<\/item>/g);

    if (!items) return [];

    return items
      .map((item) => {
        const title = extractTag(item, "title");
        const link = extractTag(item, "link");
        const pubDate = extractTag(item, "pubDate");
        const rawDesc = extractTag(item, "description");
        const description = truncate(stripHtml(rawDesc), 200);

        const image =
          extractAttr(item, "enclosure", "url") ||
          extractAttr(item, "media:content", "url") ||
          undefined;
        const author = extractTag(item, "dc:creator") || undefined;

        if (!title || !link) return null;

        return { title, link, pubDate, description, image, author };
      })
      .filter((post): post is BlogPost => post !== null);
  } catch (e) {
    console.warn("Failed to fetch blog posts:", e);
    return [];
  }
}
