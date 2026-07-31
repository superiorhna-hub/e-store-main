import type { Metadata } from "next"
import TrackOrderClient from "./TrackOrderClient"

export const metadata: Metadata = {
  title: "Track Your Order",
  description:
    "Log in with Google to view real-time status updates for your wire harness and cable assembly orders.",
  robots: { index: false },
}

export default function TrackOrderPage() {
  return <TrackOrderClient />
}
