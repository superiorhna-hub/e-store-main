import fs from "fs"
import path from "path"
import os from "os"

// In Vercel serverless functions, the root is read-only, but /tmp is writable.
const isProd = process.env.NODE_ENV === "production"
const p = isProd 
  ? path.join(os.tmpdir(), "settings.json")
  : path.join(process.cwd(), "settings.json")

export function getSettings() {
  try {
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf-8"))
    }
    // Fallback to reading the bundled settings.json on Vercel if /tmp version doesn't exist yet
    const fallbackPath = path.join(process.cwd(), "settings.json")
    if (isProd && fs.existsSync(fallbackPath)) {
      return JSON.parse(fs.readFileSync(fallbackPath, "utf-8"))
    }
  } catch (e) {}
  return { showCertifications: true }
}

export function saveSettings(s: any) {
  try {
    fs.writeFileSync(p, JSON.stringify(s, null, 2))
  } catch(e) {
    console.error("Failed to write settings to:", p, e)
    throw e;
  }
}
