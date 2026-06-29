import { Metadata } from "next";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import FadeIn from "@/components/motion/fade-in";
import BlogPostCard from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/feed";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles · DevJoe",
  description:
    "Notes on building and shipping web products, and what actually works running a small studio.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/articles",
    title: "Articles · DevJoe",
    description:
      "Notes on building and shipping web products, and what actually works running a small studio.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles · DevJoe",
    description:
      "Notes on building and shipping web products, and what actually works running a small studio.",
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
      "Notes on building and shipping web products, and what actually works running a small studio.",
    url: "https://joeharwood.dev/articles",
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-white pb-32 font-sans text-neutral-900 selection:bg-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 sm:pt-40">
        <FadeIn y={20} duration={0.8}>
          <div className="max-w-6xl">
            <h1 className="text-balance text-[2.45rem] font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-[3.6rem] md:text-[4.35rem] lg:text-[4.75rem]">
              Writing and thinking.
              <span className="mt-6 block text-[0.78em] leading-[1.08] text-neutral-400">
                Notes on building and shipping web products, and what actually
                works when you&apos;re running a small studio.
              </span>
            </h1>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-10">
        {posts.length > 0 ? (
          <ul className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2">
            {posts.map((post, index) => (
              <FadeIn key={post.link} delay={index * 0.1} y={40} duration={0.8}>
                <BlogPostCard post={post} />
              </FadeIn>
            ))}
          </ul>
        ) : (
          <div className="rounded-[2rem] border border-neutral-200 bg-[#F5F5F5] py-20 text-center">
            <p className="text-neutral-500">No articles yet. Check back soon.</p>
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
