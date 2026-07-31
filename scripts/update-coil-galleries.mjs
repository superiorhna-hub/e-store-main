import { readFileSync, writeFileSync } from 'fs'

const BASE = 'storefront/app/(store)/products'

// Maps slug → 3 dedicated [src, alt] pairs
const PAGE_IMAGES = {
  'industrial-coil-cable': [
    ['/images/industrial-coil-cable-machine.webp', 'Industrial coil cable on CNC machine'],
    ['/images/oil-resistant-pur-coil.webp', 'Oil-resistant PUR coil cable'],
    ['/images/coil-cable-m12-connector.webp', 'M12 connector on industrial coil cable'],
  ],
  'medical-coil-cable': [
    ['/images/medical-coil-cable-white.webp', 'Medical coiled cable assembly'],
    ['/images/iec-60601-strain-relief.webp', 'IEC 60601 overmolded strain relief boot'],
    ['/images/medical-coil-cable-probe.webp', 'Medical coil cable connected to probe'],
  ],
  'hi-flex-robotic-coil-cable': [
    ['/images/robotic-coil-umbilical.webp', 'Robotic coiled umbilical cable'],
    ['/images/hiflex-coil-cable-bend.webp', 'Hi-flex coil cable at tight bend radius'],
    ['/images/cobot-coil-cable-ur5.webp', 'Collaborative robot with coiled cable umbilical'],
  ],
  'trailer-vehicle-coil-cable': [
    ['/images/trailer-7way-coil-cable.webp', 'SAE J560 7-way trailer coiled cable'],
    ['/images/trailer-coil-cable-truck.webp', 'Coiled trailer cable between truck and trailer'],
    ['/images/trailer-coil-cable-connectors.webp', 'Weatherproof trailer coil cable connectors'],
  ],
  'custom-oem-coil-cable': [
    ['/images/oem-coil-cable-drawing.webp', 'Engineer reviewing custom coil cable drawing'],
    ['/images/custom-coil-cable-variety.webp', 'Custom OEM coil cable assembly variety'],
    ['/images/first-article-coil-inspection.webp', 'First article coil cable inspection'],
  ],
  'overmolded-coil-cable': [
    ['/images/overmolded-coil-boot-closeup.webp', 'Overmolded coil cable TPE boot closeup'],
    ['/images/coil-cable-overmold-before-after.webp', 'Coil cable overmold before and after'],
    ['/images/overmolded-coil-color-options.webp', 'Overmolded coil cable color options'],
  ],
  'signal-coil-cable': [
    ['/images/shielded-signal-coil-cable.webp', 'Shielded signal coil cable with exposed braid'],
    ['/images/encoder-coil-cable-servo.webp', 'Encoder coil cable on servo motor'],
    ['/images/coil-cable-shielded-pairs.webp', 'Signal coil cable shielded pairs cross-section'],
  ],
  'aviation-coil-cable': [
    ['/images/aviation-coil-cable-mil-connector.webp', 'Aviation coil cable with MIL-DTL-38999 connector'],
    ['/images/ground-support-coil-cable.webp', 'Ground support coiled cable at aircraft'],
    ['/images/lightweight-aviation-coil.webp', 'Lightweight aviation coil cable assembly'],
  ],
}

const buildGallery = (images) =>
  `<div className="pp-ov-gallery">\n` +
  images.map(([src, alt]) =>
    `                <img src="${src}" alt="${alt}" className="pp-ov-gallery__img" loading="lazy" />`
  ).join('\n') +
  `\n              </div>`

// Regex to match the entire existing gallery block
const GALLERY_RE = /<div className="pp-ov-gallery">[\s\S]*?<\/div>/

for (const [slug, images] of Object.entries(PAGE_IMAGES)) {
  const path = `${BASE}/${slug}/page.tsx`
  let text
  try { text = readFileSync(path, 'utf8') } catch {
    console.log(`SKIP (not found): ${slug}`)
    continue
  }

  if (!GALLERY_RE.test(text)) {
    console.log(`SKIP (no gallery found): ${slug}`)
    continue
  }

  const updated = text.replace(GALLERY_RE, buildGallery(images))
  writeFileSync(path, updated)
  console.log(`DONE: ${slug}`)
}
