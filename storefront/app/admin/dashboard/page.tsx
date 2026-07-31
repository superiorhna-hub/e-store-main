import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { verifyAdminToken } from "@/lib/admin-auth"
import DashboardClient from "./DashboardClient"

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_session")?.value

  if (!token) {
    redirect("/admin")
  }

  const { valid, role } = verifyAdminToken(token)

  if (!valid || !role) {
    redirect("/admin")
  }

  return <DashboardClient role={role} />
}
