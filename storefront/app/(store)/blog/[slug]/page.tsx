/**
 * @file app/(store)/blog/[slug]/page.tsx
 * @description Dynamic blog detail page — SSG Server Component.
 *   Generates static paths for all published blog slugs at build time.
 *   Fetches individual blog data by slug from Google Sheets.
 *   Renders title, cover image, keyword tags, meta lead paragraph,
 *   and multi-paragraph content with a breadcrumb trail.
 *
 *   Returns 404 if the slug doesn't exist or the post is unpublished.
 *   Revalidates every 3600 seconds (1 hour) via ISR.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { getBlogBySlug, getBlogs } from "@/lib/sheets"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const revalidate = 3600

export async function generateStaticParams() {
  const blogs = await getBlogs(true)
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)
  if (!blog) return { title: "Blog Not Found" }
  return {
    title: blog.title,
    description: blog.metaDescription,
    keywords: blog.keywords,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      images: blog.imageUrl ? [blog.imageUrl] : [],
      type: "article",
    },
  }
}

function isValidUrl(url: string) {
  if (!url || url === "-") return false
  if (url.startsWith("/")) return true
  try { new URL(url); return true } catch { return false }
}

// Simple markdown-like renderer (bold, newlines)
function renderContent(content: string) {
  return content
    .split("\n\n")
    .map((para, i) => <p key={i} style={{ marginBottom: 20, lineHeight: 1.8, color: "var(--text2)", fontSize: 16 }}>{para}</p>)
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog || !blog.published) notFound()

  const BASE = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription ?? "",
    datePublished: blog.publishDate ?? "",
    image: isValidUrl(blog.imageUrl) ? blog.imageUrl : undefined,
    url: `${BASE}/blog/${blog.slug}`,
    author: {
      "@type": "Organization",
      name: "Superior Harness & Assembly",
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      name: "Superior Harness & Assembly",
      url: BASE,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026") }}
      />
    <div style={{ minHeight: "100vh", paddingTop: 160, paddingBottom: 80 }}>
      <div className="W" style={{ maxWidth: 780 }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: 32, fontSize: 14, color: "var(--text2)" }}>
          <Link href="/" style={{ color: "var(--text2)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <Link href="/blog" style={{ color: "var(--text2)", textDecoration: "none" }}>Blog</Link>
          <span style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "var(--text)" }}>{blog.title}</span>
        </div>

        {/* Tags */}
        {blog.keywords && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {blog.keywords.split(",").map((kw) => (
              <span key={kw} style={{
                fontSize: 11, fontWeight: 700, padding: "3px 10px",
                borderRadius: 20, background: "rgba(37,99,235,0.12)",
                color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.05em",
              }}>{kw.trim()}</span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-sora)", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16 }}>{blog.title}</h1>

        {/* Meta */}
        {blog.publishDate && (
          <div style={{ fontSize: 13, color: "var(--textM)", marginBottom: 32 }}>
            Published {new Date(blog.publishDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        )}

        {/* Cover image */}
        {isValidUrl(blog.imageUrl) && (
          <div style={{ borderRadius: "var(--rL)", overflow: "hidden", marginBottom: 40, aspectRatio: "16/9", position: "relative" }}>
            <img src={blog.imageUrl} alt={blog.title} style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
          </div>
        )}

        {/* Meta description as lead */}
        {blog.metaDescription && (
          <p style={{
            fontSize: 18, fontWeight: 600, color: "var(--text2)", marginBottom: 32,
            lineHeight: 1.6, borderLeft: "3px solid #2563eb", paddingLeft: 16,
          }}>{blog.metaDescription}</p>
        )}

        {/* Content */}
        <div style={{ fontFamily: "var(--font-dm-sans)" }}>
          {blog.content ? renderContent(blog.content) : (
            <p style={{ color: "var(--textM)", fontStyle: "italic" }}>No content available for this post.</p>
          )}
        </div>

        {/* Back link */}
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--bd)" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "#60a5fa", textDecoration: "none", fontWeight: 700, fontSize: 15,
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
