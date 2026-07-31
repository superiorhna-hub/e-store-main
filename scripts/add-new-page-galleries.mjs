import { readFileSync, writeFileSync } from 'fs'

const BASE = 'storefront/app/(store)/products'

// Maps slug → [src, alt] triples for the gallery
// Note: ur-coiled-cable-extended.webp = the uploaded filename (missing 'p' in 'pur')
const PAGE_IMAGES = {
  'multi-branch-harness': [
    ['/images/multi-branch-harness-flat.webp', 'Multi-branch wire harness flat layout'],
    ['/images/harness-routing-board-nails.webp', 'Harness routing board with nails'],
    ['/images/multi-branch-junction-closeup.webp', 'Multi-branch junction closeup'],
  ],
  'high-flex-robotic-harness': [
    ['/images/robot-arm-cable-routed.webp', 'Cable harness routed through robot arm'],
    ['/images/drag-chain-cable-bundle.webp', 'Cable bundle in drag chain'],
    ['/images/fine-stranded-conductor-macro.webp', 'Fine-stranded conductor macro'],
  ],
  'control-panel-wiring': [
    ['/images/control-panel-wiring-neat.webp', 'Neat control panel wiring on DIN rail'],
    ['/images/ferrule-crimping-closeup.webp', 'Ferrule crimped wire ends'],
    ['/images/wire-labels-numbered.webp', 'Numbered heat-shrink wire labels'],
  ],
  'usb-overmolded': [
    ['/images/usb-c-overmolded-ends.webp', 'USB-C overmolded cable assembly'],
    ['/images/usb-connector-variety.webp', 'USB connector type variety'],
    ['/images/usb-overmold-tooling-open.webp', 'USB overmold injection tool'],
  ],
  'circular-connector': [
    ['/images/m12-sensor-cable-pair.webp', 'M12 circular connector cable pair'],
    ['/images/mil-38999-connector-assembly.webp', 'MIL-DTL-38999 circular connector'],
    ['/images/circular-connector-pin-insert.webp', 'Circular connector pin insertion'],
  ],
  'strain-relief-molding': [
    ['/images/tpe-strain-relief-tapered.webp', 'TPE tapered strain relief overmold'],
    ['/images/overmold-mold-tool-pair.webp', 'Overmold aluminum tool pair'],
    ['/images/strain-relief-color-samples.webp', 'Strain relief color samples'],
  ],
  'multi-shot-molded': [
    ['/images/two-shot-overmold-hard-soft.webp', 'Two-shot hard/soft overmold cable'],
    ['/images/two-shot-mold-rotating-core.webp', 'Two-shot rotating core injection mold'],
    ['/images/dual-durometer-grip-cable.webp', 'Dual-durometer cable grip'],
  ],
  'coil-spiral-cable': [
    ['/images/ur-coiled-cable-extended.webp', 'PUR coiled cable extended'],
    ['/images/coiled-cable-handheld-scanner.webp', 'Coiled cable on handheld scanner'],
    ['/images/coil-cable-variety.webp', 'Coil cable variety'],
  ],
  'connector-molding': [
    ['/images/connector-overmold-before-after.webp', 'Connector overmold before and after'],
    ['/images/insert-molding-brass-inserts.webp', 'Insert molding with brass inserts'],
    ['/images/potted-connector-enclosure.webp', 'Potted connector enclosure'],
  ],
  'pcb-assemblies': [
    ['/images/pcb-smt-assembly-closeup.webp', 'SMT PCB assembly closeup'],
    ['/images/aoi-inspection-pcb.webp', 'AOI inspection of PCB'],
    ['/images/pcb-cable-integrated.webp', 'PCB with integrated cable harness'],
  ],
  'electromechanical': [
    ['/images/box-build-open-enclosure.webp', 'Open box-build electromechanical enclosure'],
    ['/images/sub-assembly-wiring.webp', 'Electromechanical sub-assembly wiring'],
    ['/images/functional-test-assembly.webp', 'Functional test of electromechanical assembly'],
  ],
  'robotics-automation': [
    ['/images/servo-encoder-cable-assembly.webp', 'Servo encoder cable assembly'],
    ['/images/drag-chain-linear-axis.webp', 'Drag chain on linear servo axis'],
    ['/images/robot-umbilical-coil.webp', 'Robot umbilical coil cable'],
  ],
  'ev-renewable-energy': [
    ['/images/ev-hv-orange-cable-assembly.webp', 'EV high-voltage orange cable assembly'],
    ['/images/solar-pv-harness-combiner.webp', 'Solar PV string harness combiner'],
    ['/images/battery-pack-interconnect.webp', 'EV battery pack interconnect cables'],
  ],
}

const buildGallery = (images) =>
  `\n              <div className="pp-ov-gallery">\n` +
  images.map(([src, alt]) =>
    `                <img src="${src}" alt="${alt}" className="pp-ov-gallery__img" loading="lazy" />`
  ).join('\n') +
  `\n              </div>`

// The marker that appears right before the divider in the generated pages
const MARKER = '<div className="pp-ov-divider" />'

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

  text = text.slice(0, idx) + buildGallery(images) + '\n              ' + text.slice(idx)
  writeFileSync(path, text)
  console.log(`DONE: ${slug}`)
}
