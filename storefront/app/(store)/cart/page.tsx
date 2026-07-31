import type { Metadata } from "next"
import CartClient from "./CartClient"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your selected wire harness and cable assembly products before checkout.",
  robots: { index: false },
}

export default function CartPage() {
  return <CartClient />
}
