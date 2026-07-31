/**
 * Image optimization script:
 * 1. Delete unused images (not referenced in any source file)
 * 2. Convert all PNG/JPG to WebP using ImageMagick
 * 3. Update all references in .tsx/.ts/.jsx/.js/.css files
 */

import { readdirSync, readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs'
import { execSync } from 'child_process'
import { join, extname, basename } from 'path'

const IMAGES_DIR = 'storefront/public/images'
const SRC_DIRS = ['storefront/app', 'storefront/components', 'storefront/styles', 'storefront/lib']
const SRC_EXTS = ['.tsx', '.ts', '.jsx', '.js', '.css', '.md']

// ── Step 1: Collect all source file contents ──────────────────────────────────

function getAllSourceFiles() {
  const files = []
  function walk(dir) {
    try {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name)
        if (entry.isDirectory()) walk(full)
        else if (SRC_EXTS.includes(extname(entry.name))) files.push(full)
      }
    } catch {}
  }
  SRC_DIRS.forEach(walk)
  return files
}

const sourceFiles = getAllSourceFiles()
const allSourceContent = sourceFiles.map(f => readFileSync(f, 'utf8')).join('\n')

// ── Step 2: Find unused images ────────────────────────────────────────────────

// Images that are planned for use (from images.md reusable list) — keep even if not yet referenced
const KEEP_EVEN_IF_UNUSED = new Set([
  'wires-2.webp', 'multimeter.jpg', 'relay.webp', 'fuse-box.webp',
])

const allImages = readdirSync(IMAGES_DIR)
const unused = []

for (const img of allImages) {
  if (KEEP_EVEN_IF_UNUSED.has(img)) continue
  const stem = basename(img, extname(img))
  // Check if the filename stem appears anywhere in source (without extension, to catch before/after rename)
  const referencedByFull = allSourceContent.includes(`/images/${img}`)
  const referencedByStem = allSourceContent.includes(`/images/${stem}.`)
  if (!referencedByFull && !referencedByStem) {
    unused.push(img)
  }
}

console.log('\n── UNUSED IMAGES (to delete) ──────────────────────')
unused.forEach(f => console.log('  DELETE:', f))

// Delete unused
for (const img of unused) {
  const path = join(IMAGES_DIR, img)
  unlinkSync(path)
  console.log('  ✓ Deleted:', img)
}

// ── Step 3: Convert PNG/JPG to WebP ──────────────────────────────────────────

const toConvert = readdirSync(IMAGES_DIR).filter(f => /\.(png|jpg|jpeg)$/i.test(f))

console.log('\n── CONVERTING TO WEBP ──────────────────────────────')

const converted = [] // [{ from, to }]

for (const img of toConvert) {
  const srcPath = join(IMAGES_DIR, img)
  const stem = basename(img, extname(img))
  const destPath = join(IMAGES_DIR, `${stem}.webp`)

  try {
    // Use ImageMagick with quality 85 (good balance of size/quality)
    execSync(`magick "${srcPath}" -quality 85 "${destPath}"`, { stdio: 'pipe' })

    // Verify output was created
    if (existsSync(destPath)) {
      unlinkSync(srcPath)
      converted.push({ from: img, to: `${stem}.webp` })
      console.log(`  ✓ ${img} → ${stem}.webp`)
    } else {
      console.log(`  ✗ FAILED (no output): ${img}`)
    }
  } catch (err) {
    console.log(`  ✗ ERROR converting ${img}:`, err.message)
  }
}

// ── Step 4: Update references in source files ─────────────────────────────────

if (converted.length === 0) {
  console.log('\nNo conversions done, skipping reference updates.')
  process.exit(0)
}

console.log('\n── UPDATING REFERENCES ─────────────────────────────')

for (const filePath of sourceFiles) {
  let content = readFileSync(filePath, 'utf8')
  let changed = false

  for (const { from, to } of converted) {
    if (content.includes(from)) {
      content = content.replaceAll(from, to)
      changed = true
    }
  }

  if (changed) {
    writeFileSync(filePath, content, 'utf8')
    console.log('  ✓ Updated:', filePath.replace('storefront/', ''))
  }
}

console.log('\n── DONE ─────────────────────────────────────────────')
console.log(`  Deleted ${unused.length} unused images`)
console.log(`  Converted ${converted.length} images to WebP`)
