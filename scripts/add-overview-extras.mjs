import { readFileSync, writeFileSync } from 'fs'

const PAGES = [
  'storefront/app/(store)/products/custom-wire-harness/page.tsx',
  'storefront/app/(store)/products/cable-assembly/page.tsx',
  'storefront/app/(store)/products/coaxial-rf-microwave/page.tsx',
  'storefront/app/(store)/products/ethernet-usb/page.tsx',
  'storefront/app/(store)/products/fiber-optic-twinax/page.tsx',
  'storefront/app/(store)/products/high-voltage-harness/page.tsx',
  'storefront/app/(store)/products/medical-cable-assemblies/page.tsx',
  'storefront/app/(store)/products/overmolded-harness/page.tsx',
  'storefront/app/(store)/products/power-battery/page.tsx',
  'storefront/app/(store)/products/prototype-npi/page.tsx',
  'storefront/app/(store)/products/shielded-hermetic/page.tsx',
  'storefront/app/(store)/products/waterproof-harness/page.tsx',
]

// JSX to insert before the closing </div> of pp-meaning__inner
const INSERT = `
      <div className="pp-ov-divider" />
      <div className="pp-ov-section-label">Key Specifications</div>
      <div className="pp-ov-keyspecs">
        {SPECS.slice(0, 4).map(s => (
          <div key={s.k} className="pp-ov-spec">
            <div className="pp-ov-spec__k">{s.k}</div>
            <div className="pp-ov-spec__v">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="pp-ov-section-label">Core Capabilities</div>
      <div className="pp-ov-caps-preview">
        {CAPS.slice(0, 3).map(c => (
          <div key={c.title} className="pp-ov-cap">
            <div className="pp-ov-cap__title">{c.title}</div>
            <div className="pp-ov-cap__desc">{c.desc}</div>
          </div>
        ))}
      </div>`

for (const page of PAGES) {
  let text
  try {
    text = readFileSync(page, 'utf8')
  } catch {
    console.log(`SKIP (not found): ${page}`)
    continue
  }

  if (text.includes('pp-ov-keyspecs')) {
    console.log(`SKIP (already done): ${page}`)
    continue
  }

  // Find start of the capabilities tab to anchor our search
  const capsTabIdx = text.indexOf('{ id: "capabilities", label: "Capabilities"')
  if (capsTabIdx === -1) {
    console.log(`SKIP (no capabilities tab): ${page}`)
    continue
  }

  // Find </section> that closes pp-meaning, just before the capabilities tab
  const sectionCloseIdx = text.lastIndexOf('</section>', capsTabIdx)
  if (sectionCloseIdx === -1) {
    console.log(`SKIP (no section close): ${page}`)
    continue
  }

  // The last </div> before </section> is the one closing pp-meaning__inner
  const innerCloseIdx = text.lastIndexOf('</div>', sectionCloseIdx)
  if (innerCloseIdx === -1) {
    console.log(`SKIP (no inner div close): ${page}`)
    continue
  }

  // Insert between pp-meaning__cols-close and pp-meaning__inner-close
  text = text.slice(0, innerCloseIdx) + INSERT + '\n' + text.slice(innerCloseIdx)

  writeFileSync(page, text)
  console.log(`DONE: ${page}`)
}
