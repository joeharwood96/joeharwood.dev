import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogPostCard from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/feed";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Articles · DevJoe",
  description:
    "Notes on shipping software, AI where it earns its keep, and what actually works running a small studio.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/articles",
    title: "Articles · DevJoe",
    description:
      "Notes on shipping software, AI where it earns its keep, and what actually works running a small studio.",
    siteName: "DevJoe",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles · DevJoe",
    description:
      "Notes on shipping software, AI where it earns its keep, and what actually works running a small studio.",
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
      "Notes on shipping software, AI where it earns its keep, and what actually works running a small studio.",
    url: "https://joeharwood.dev/articles",
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="section-container fade-in">
          <div className="text-center">
            <p className="text-xs tracking-[0.22em] uppercase text-muted-foreground">
              Articles
            </p>
            <h1 className="mt-6 font-serif text-hero-serif text-foreground text-balance">
              <span className="italic">Writing</span>
              <br />
              and thinking.
            </h1>
            <p className="mt-10 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Notes on shipping AI features, mid-market consulting, and what
              actually works when you&apos;re running a small studio.
            </p>
          </div>

          {posts.length > 0 ? (
            <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.link} post={post} />
              ))}
            </ul>
          ) : (
            <div className="mt-16 py-20 text-center rounded-2xl border border-border bg-surface/60">
              <p className="text-muted-foreground">
                No articles yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
