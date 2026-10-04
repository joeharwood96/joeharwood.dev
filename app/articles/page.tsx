import { Metadata } from "next";
import FadeIn from "@/components/motion/fade-in";
import Section from "@/components/site/section";
import BlogPostCard from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/feed";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles · DevJoe",
  description:
    "Notes on building AI products, shipping my own, and working independently in Amsterdam.",
  openGraph: {
    type: "website",
    url: "https://www.devjoe.io/articles",
    title: "Articles · DevJoe",
    description:
      "Notes on building AI products, shipping my own, and working independently in Amsterdam.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles · DevJoe",
    description:
      "Notes on building AI products, shipping my own, and working independently in Amsterdam.",
    images: ["/og-image.png"],
  },
};

export default async function ArticlesPage() {
  const posts = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Articles · DevJoe",
    description:
      "Notes on building AI products, shipping my own, and working independently in Amsterdam.",
    url: "https://www.devjoe.io/articles",
  };

  return (
    <main className="flex min-h-screen flex-col bg-background text-neutral-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section innerClassName="border-b px-6 pb-12 pt-16 sm:px-10 sm:pb-16 sm:pt-24">
        <FadeIn y={12}>
          <p className="mono-label">Articles</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-medium tracking-tight sm:text-6xl">
            Writing
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-500">
            Notes on building AI products, shipping my own, and working
            independently in Amsterdam.
          </p>
        </FadeIn>
      </Section>

      <Section>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <BlogPostCard key={post.link} post={post} />
            ))}
          </ul>
        ) : (
          <p className="p-10 text-neutral-500">No articles yet. Check back soon.</p>
        )}
      </Section>
    </main>
  );
}
