import { readFileSync, writeFileSync } from 'fs'

const BASE = 'storefront/app/(store)/products'

const PAGE_IMAGES = {
  'custom-wire-harness': [
    ['/images/wire-harness-multi-branch.png', 'Multi-branch wire harness'],
    ['/images/crimp-terminal-closeup.png', 'Precision crimp terminals'],
    ['/images/harness-routing-board.png', 'Harness routing board'],
  ],
  'cable-assembly': [
    ['/images/cable-assembly-variety.png', 'Cable assembly variety'],
    ['/images/cable-assembly-test-fixture.png', 'Cable assembly test fixture'],
    ['/images/connector-types-lineup.png', 'Connector types lineup'],
  ],
  'coaxial-rf-microwave': [
    ['/images/coaxial-hero.png', 'Coaxial RF cable assemblies'],
    ['/images/rf-cable-sma-bnc.png', 'SMA and BNC RF connectors'],
    ['/images/coaxial-cross-section.png', 'Coaxial cable cross section'],
  ],
  'ethernet-usb': [
    ['/images/cat8-cable-rj45.png', 'Cat8 ethernet cable with RJ45'],
    ['/images/usb-c-cable-assembly.png', 'USB-C cable assembly'],
    ['/images/patch-panel-neat.png', 'Patch panel cable management'],
  ],
  'fiber-optic-twinax': [
    ['/images/fiber-optic-lc-connectors.png', 'LC fiber optic connectors'],
    ['/images/twinax-dac-cable.png', 'Twinax DAC cable with SFP+'],
    ['/images/fiber-optic-bundle.png', 'Fiber optic cable bundle'],
  ],
  'high-voltage-harness': [
    ['/images/hv-orange-harness.png', 'High voltage orange harness'],
    ['/images/hipot-test-setup.png', 'Hipot dielectric withstand test'],
    ['/images/hv-battery-interconnect.png', 'HV battery interconnect cables'],
  ],
  'medical-cable-assemblies': [
    ['/images/medical-device-cable.png', 'Medical device cable assembly'],
    ['/images/cleanroom-cable-assembly.png', 'Cleanroom cable assembly'],
    ['/images/biocompatible-cable-coil.png', 'Biocompatible cable coil'],
  ],
  'overmolded-harness': [
    ['/images/overmold-tpe-closeup.png', 'TPE overmold strain relief closeup'],
    ['/images/overmold-tooling.png', 'Aluminum overmold tooling'],
    ['/images/ip68-water-immersion.png', 'IP68 water immersion validation'],
  ],
  'power-battery': [
    ['/images/battery-cable-ring-terminals.png', 'Battery cable with ring terminals'],
    ['/images/power-cable-large-gauge.png', 'Large gauge power cable cross section'],
    ['/images/ev-charging-handle-cable.png', 'EV charging handle cable'],
  ],
  'prototype-npi': [
    ['/images/prototype-harness-bench.png', 'Prototype harness on workbench'],
    ['/images/first-article-measurement.png', 'First article inspection measurement'],
    ['/images/npi-drawing-review.png', 'NPI drawing review'],
  ],
  'shielded-hermetic': [
    ['/images/hermetic-connector-glass.png', 'Hermetic glass-to-metal sealed connector'],
    ['/images/braided-shield-termination.png', 'Braided shield termination'],
    ['/images/mil-spec-circular-connector.png', 'MIL-spec circular connector'],
  ],
  'waterproof-harness': [
    ['/images/waterproof-deutsch-dt.png', 'Waterproof Deutsch DT connector'],
    ['/images/ip67-spray-test.png', 'IP67 water spray test'],
    ['/images/outdoor-harness-installed.png', 'Outdoor waterproof harness installed'],
  ],
}

const buildGallery = (images) =>
  `\n      <div className="pp-ov-gallery">\n` +
  images.map(([src, alt]) =>
    `        <img src="${src}" alt="${alt}" className="pp-ov-gallery__img" loading="lazy" />`
  ).join('\n') +
  `\n      </div>`

const MARKER = '<div className="pp-ov-divider"'

for (const [slug, images] of Object.entries(PAGE_IMAGES)) {
  const path = `${BASE}/${slug}/page.tsx`
  let text
  try { text = readFileSync(path, 'utf8') } catch {
    console.log(`SKIP (not found): ${path}`)
    continue
  }

  if (text.includes('pp-ov-gallery')) {
    console.log(`SKIP (already done): ${slug}`)
    continue
  }

  const idx = text.indexOf(MARKER)
  if (idx === -1) {
    console.log(`SKIP (no divider marker): ${slug}`)
    continue
  }

  text = text.slice(0, idx) + buildGallery(images) + '\n      ' + text.slice(idx)
  writeFileSync(path, text)
  console.log(`DONE: ${slug}`)
}
