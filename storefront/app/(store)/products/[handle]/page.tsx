import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProducts, getProductByHandle } from "@/lib/sheets"
import { ProductSchema } from "@/components/ProductSchema"
import ProductDetailClient from "@/components/ProductDetailClient"

// Pre-render all product pages at build time; revalidate hourly via ISR
export const revalidate = 3600

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ handle: p.handle }))
}

interface PageProps {
  params: Promise<{ handle: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params
  const product = await getProductByHandle(handle)
  if (!product) return { title: "Product Not Found" }

  return {
    title: product.name,
    description: product.description || undefined,
    openGraph: {
      title: product.name,
      description: product.description || undefined,
      images: product.imageUrl ? [{ url: product.imageUrl }] : [],
    },
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { handle } = await params
  const product = await getProductByHandle(handle)

  if (!product) notFound()

  return (
    <>
      <ProductSchema product={product} />
      <ProductDetailClient product={product} />
    </>
  )
}
