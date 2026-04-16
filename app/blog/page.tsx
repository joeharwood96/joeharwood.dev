import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogPostCard from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/feed";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Joe Harwood",
  description:
    "Thoughts on software engineering, AI, and building products.",
  openGraph: {
    type: "website",
    url: "https://joeharwood.dev/blog",
    title: "Blog — Joe Harwood",
    description:
      "Thoughts on software engineering, AI, and building products.",
    siteName: "Joe Harwood",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Joe Harwood",
    description:
      "Thoughts on software engineering, AI, and building products.",
    images: ["/og-image.png"],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — Joe Harwood",
    description:
      "Thoughts on software engineering, AI, and building products.",
    url: "https://joeharwood.dev/blog",
    author: { "@id": "https://joeharwood.dev/#person" },
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-3xl mx-auto px-6 fade-in">
          <p className="text-sm text-muted-foreground mb-8">Blog</p>
          <h1 className="text-[44px] sm:text-[56px] md:text-[64px] font-semibold tracking-tight leading-[1.02] text-foreground">
            Writing and thinking.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Posts on software engineering, AI, and building products.
          </p>

          {posts.length > 0 ? (
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.link} post={post} />
              ))}
            </ul>
          ) : (
            <div className="mt-12 py-16 text-center">
              <p className="text-muted-foreground">
                No posts yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
