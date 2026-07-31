import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "Overmolded Wire Harness | Superior Harness & Assembly",
  description: "Custom overmolded wire harnesses with in-house TPE/PUR tooling. IP67/IP68 sealed strain relief. Pull-force and IP validated.",
}

const CAPS = [
  { title: "In-House Mold Tooling", desc: "Custom mold design and fabrication for your specific connector geometry and cable diameter. Tool modifications and reshoots handled in-house — no external tooling lead time or markup." },
  { title: "TPE Liquid-Injection Overmold", desc: "Thermoplastic elastomer injected around the wire-to-connector interface at precise temperature and pressure. Shore-A hardness selected per your flex and temperature requirements." },
  { title: "PUR & Nylon Options", desc: "Polyurethane overmold for marine UV and chemical resistance. Nylon for high-temperature industrial applications. Material selected based on operating environment, not availability." },
  { title: "IP67/IP68 Strain Relief", desc: "Overmold geometry designed to simultaneously seal against moisture ingress and relieve mechanical strain on the conductor-to-terminal interface. IP rating validated by immersion test on every new program." },
  { title: "Pull-Force Validation", desc: "Every overmolded termination pull-tested to the minimum retention force specified by IPC/WHMA-A-620. Overmold adhesion to the cable jacket verified to prevent delamination under repeated flex." },
  { title: "Color & Geometry", desc: "Overmold color matched per RAL or Pantone. Ergonomic grip geometries, boot shapes, and strain relief angles designed to your housing or customer specification." },
]

const SPECS = [
  { k: "IP Rating", v: "IP67 standard · IP68 with extended mold geometry · IP69K on quote" },
  { k: "Overmold Materials", v: "TPE (65–95 Shore-A), PUR (85–95 Shore-A), Nylon 6/6, custom compounds" },
  { k: "Cable Diameter Range", v: "4 mm to 25 mm OD — tooling designed per actual cable OD" },
  { k: "Operating Temperature", v: "−40 °C to +125 °C TPE · −40 °C to +150 °C with Nylon" },
  { k: "Color Options", v: "Black standard · Custom RAL / Pantone on tooled runs of 500+ units" },
  { k: "Pull-Force Test", v: "IPC/WHMA-A-620 conductor retention — 100% of overmolded units" },
  { k: "IP Validation", v: "Immersion 1 m / 30 min on first article · AQL sampling on production" },
  // Old: { k: "Tooling Lead Time", v: "New tool: 5–7 business days · Modification: 2–3 business days" },
  { k: "Tooling Lead Time", v: "New tool: 2–3 weeks · Modification: 1–2 weeks" },
  { k: "Production Lead Time", v: "10–15 business days after first-article approval" },
  { k: "MOQ", v: "25 units with existing tooling · 50 units for new tooling" },
]

const PROCESS = [
  { n: "01", title: "Geometry Submission", desc: "Submit your connector housing, cable OD, and strain relief angle. Engineering generates mold concept in 24 hours for review before steel is cut." },
  { n: "02", title: "Tooling Fabrication", desc: "Mold cut from aluminum tooling block in-house. {/* Old: 5–7 day lead time */}2–3 week lead time from approved drawing to first shot, with no external fabrication dependency." },
  { n: "03", title: "First Article Shot", desc: "Initial overmold applied to production harness. Dimensions, Shore-A hardness, and adhesion to jacket verified before first-article approval." },
  { n: "04", title: "IP & Pull Validation", desc: "First article: immersion 1 m / 30 min, then pull-force test on every conductor. Material adhesion check at 3× expected service temperature." },
  { n: "05", title: "Production Run", desc: "Overmold applied on 50T press with calibrated temperature and pressure. Each unit pull-tested before moving to final inspection and label." },
  { n: "06", title: "Pack & Ship", desc: "COC with first-article IP report and pull-force data. Custom packaging to prevent overmold deformation in shipment. Same-day ship on in-stock programs." },
]

const USECASES = [
  { title: "EV Charging Connectors", desc: "Overmolded cable-side charging connectors for Level 2 and DC fast-charge. IP67 rated. Ergonomic grip geometry designed to IEC 62196 handle dimensions." },
  { title: "Industrial Actuator Wiring", desc: "Overmolded strain relief on servo and motor cables entering actuator housings. IP67/IP68 sealing prevents coolant and chip debris ingress in CNC environments." },
  { title: "Marine & Watercraft", desc: "PUR overmold for UV and saltwater resistance on bilge pump, depth finder, and navigation instrument wiring. IP68 rated for full submersion below the waterline." },
  { title: "Medical Handpieces", desc: "Soft-touch TPE overmold on surgical and dental handpiece cable assemblies. Autoclave-compatible materials available. Meets biocompatibility requirements for patient-adjacent use." },
  { title: "Agriculture & Outdoor Equipment", desc: "Overmolded Deutsch DT connectors for tractor control wiring. IP69K spray-down rated. TPE selected for flexibility at −40 °C cold starts and UV stability for rooftop cab routing." },
  { title: "Consumer Electronics", desc: "Overmolded USB, audio, and power cable assemblies with customer-branded geometry. UL 94V-0 flame-retardant material options. High-volume tooling managed in-house." },
]

const FAQS = [
  // Old: { q: "How long does tooling take?", a: "New aluminum tooling cut in-house: 5–7 business days from drawing approval to first shot. Tooling modifications: 2–3 business days. We own the tooling and store it at no charge for active programs — you are not paying a tooling shop lead time or markup." },
  { q: "How long does tooling take?", a: "New aluminum tooling cut in-house: 2–3 weeks from drawing approval to first shot. Tooling modifications: 1–2 weeks. We own the tooling and store it at no charge for active programs — you are not paying a tooling shop lead time or markup." },
  { q: "What is the minimum run size for overmolded assemblies?", a: "25 units for programs with existing compatible tooling. 50 units for new tooling to amortize the first-article validation cost. Below 25 units, we recommend a boot and adhesive approach — same IP rating without the tooling investment. We will recommend the best approach for your volume when you submit the RFQ." },
  { q: "What Shore-A hardness do you overmold at?", a: "Standard TPE overmold is 65–95 Shore-A depending on the flex requirement. Softer hardness (65–75A) for handpiece and consumer cable applications where tactile feel matters. Harder (85–95A) for industrial and automotive where abrasion resistance and dimensional stability take priority. We select the hardness based on your service profile, not a catalog default." },
  { q: "Can you match an existing overmold geometry from a sample?", a: "Yes. Send a sample part and we will reverse-engineer the overmold geometry, measure the hardness, and identify the material compound. We then design a compatible mold and produce a first-article sample for your approval before production. This is the fastest path when a competitor part needs to be reproduced without drawings." },
  { q: "Does overmolding replace a connector seal?", a: "Overmolding replaces the connector seal for applications where the overmold covers the entire connector-to-cable interface. For applications where the connector must mate and unmate repeatedly, a peripheral seal inside the connector is still required — the overmold provides strain relief and environmental protection on the cable side only. We will specify the correct sealing method for your mating cycle count." },
  { q: "What IP rating can you achieve with overmolding?", a: "IP67 is standard with TPE overmold designed to the cable OD and connector geometry. IP68 is achievable with extended overmold geometry and deeper seal engagement — validated by immersion test at the depth and duration you specify. IP69K requires liquid-injection TPE with stainless backshell — available on request for washdown applications." },
]

export default function OvermoldedHarnessPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>Overmolded Harness</div>
          <div className="pp-hero__qa"><div className="pp-hero__qa-label">Quick Answer</div><div className="pp-hero__qa-text">Custom TPE/PUR overmolded wire harnesses with in-house aluminum tooling. IP67/IP68 sealed strain relief. Pull-force validated per IPC/WHMA-A-620. {/* Old: New tooling in 5–7 days. */}New tooling in 2–3 weeks.</div></div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">Overmolded Wire Harness</div>
              <h1 className="pp-hero__h">Custom Mold.<span className="muted">In-House.</span><span className="accent">IP-Sealed.</span></h1>
              <p className="pp-hero__desc">Overmolded strain relief and sealed terminations with custom tooling fabricated in-house. TPE, PUR, and Nylon compounds. IP67/IP68 validated. Pull-force tested on every unit.</p>
              <div className="pp-hero__ctabar"><Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link><Link href="/contact" className="pp-hero__cta-secondary">Talk to an Engineer</Link></div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__img">
                <img src="/images/over-molding.webp" alt="" style={{ width: "100%", height: "auto", display: "block",  objectFit: "contain" }} />
              </div>
              <div className="pp-hero__stats-grid">
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">IP68</div><div className="pp-hero__stat-lbl">Top Seal Rating</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">{/* Old: 5–7 Days */}2–3 Weeks</div><div className="pp-hero__stat-lbl">New Tooling</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">100%</div><div className="pp-hero__stat-lbl">Pull-Force Tested</div></div>
              <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">In-House</div><div className="pp-hero__stat-lbl">Mold Tooling</div></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
        <div className="pp-meaning__inner">
          <div className="pp-meaning__label">What Overmolding Does Here</div>
          <h2 className="pp-meaning__h">Strain Relief and Sealing.<br />One Operation.</h2>
          <div className="pp-meaning__cols">
            <p className="pp-meaning__text">An overmold is not a cosmetic finish. It is a structural element that prevents the conductor-to-terminal crimp from experiencing the bending moment when the cable is flexed or pulled. A cable that enters a connector without overmolded strain relief will fatigue at the terminal — even at low flex counts — because the full mechanical load is transferred to a 1 mm crimp barrel instead of being distributed over 50 mm of elastomer. That is the primary failure mode overmolding solves.</p>
            <p className="pp-meaning__text">The secondary function is sealing. A properly designed overmold eliminates the gap between the cable jacket OD and the connector housing — sealing the back of the connector to IP67 or IP68 without relying on a rubber boot that can slide, crack, or be omitted during field maintenance. If your harness needs sealing at the connector face as well, we add a peripheral seal — see <Link href="/products/waterproof-harness" className="pp-meaning__link">waterproof harness</Link> for the full sealing system.</p>
          </div>
        
      
      <div className="pp-ov-gallery">
        <img src="/images/overmold-tpe-closeup.webp" alt="TPE overmold strain relief closeup" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/overmold-tooling.webp" alt="Aluminum overmold tooling" className="pp-ov-gallery__img" loading="lazy" />
        <img src="/images/ip68-water-immersion.webp" alt="IP68 water immersion validation" className="pp-ov-gallery__img" loading="lazy" />
      </div>
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
      </div>
</div>
      </section>
        )},
        { id: "capabilities", label: "Capabilities", content: (
          <section className="pp-caps"><div className="pp-caps__inner"><div className="pp-caps__label">Overmold Capability Block</div><h2 className="pp-caps__h">Six Overmold Capabilities.<br />One Production Line.</h2><div className="pp-caps-grid">{CAPS.map(c => (<div key={c.title} className="pp-caps-grid__cell"><svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg><div className="pp-caps-grid__title">{c.title}</div><div className="pp-caps-grid__desc">{c.desc}</div></div>))}</div></div></section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs"><div className="pp-specs__inner"><div className="pp-specs__label">Specification Sheet</div><h2 className="pp-specs__h">Overmold Envelope.</h2><table className="pp-spec-table"><tbody>{SPECS.map(s => (<tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>))}</tbody></table></div></section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process"><div className="pp-process__inner"><div className="pp-process__label">Tooling-First Flow</div><h2 className="pp-process__h">Geometry to First Shot.<br />Five Days.</h2><div className="pp-process-grid">{PROCESS.map(p => (<div key={p.n} className="pp-process-grid__cell"><div className="pp-process-grid__num">{p.n}</div><div className="pp-process-grid__title">{p.title}</div><div className="pp-process-grid__desc">{p.desc}</div></div>))}</div></div></section>
        )},
        { id: "applications", label: "Applications", content: (
          <>
        <section className="pp-usecases"><div className="pp-usecases__inner"><div className="pp-usecases__label">Application Map</div><h2 className="pp-usecases__h">Six Overmold<br />Use Cases.</h2><div className="pp-usecases-grid">{USECASES.map(u => (<div key={u.title} className="pp-usecases-grid__cell"><div className="pp-usecases-grid__title">{u.title}</div><div className="pp-usecases-grid__desc">{u.desc}</div></div>))}</div></div></section>
        <section className="pp-verticals"><div className="pp-verticals__inner"><div className="pp-verticals__label">Where It Ships</div><h2 className="pp-verticals__h">Overmold Verticals.</h2><div className="pp-verticals-grid"><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Automotive &amp; EV</div><div className="pp-verticals-grid__desc">EV charging handles, underbody connector assemblies, and door module wiring with IP69K requirement.</div><Link href="/industries/automotive-ev" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Medical Devices</div><div className="pp-verticals-grid__desc">Soft-touch TPE overmold on handpiece and imaging cables. Biocompatible and autoclave-compatible options.</div><Link href="/industries/medical-devices" className="pp-verticals-grid__link">See Industry →</Link></div><div className="pp-verticals-grid__cell"><div className="pp-verticals-grid__title">Industrial / Factory</div><div className="pp-verticals-grid__desc">IP69K servo and actuator cable overmolds for washdown and chemical splash environments.</div><Link href="/industries/industrial-factory" className="pp-verticals-grid__link">See Industry →</Link></div></div></div></section>
          </>
        )},
        { id: "resources", label: "Resources", content: (
          <>
        <section className="pp-quote"><div className="pp-quote__inner"><div className="pp-quote__card"><div className="pp-quote__label">Design Note</div><p className="pp-quote__text">&ldquo;An overmold sized to the nominal cable OD fails. The cable jacket has a ±0.3 mm OD tolerance and shrinks in cold weather. We measure the actual jacket OD on the production cable reel, design the mold cavity to that measurement, and first-shot validate before committing to production. That is why our overmolded assemblies do not leak at month six.&rdquo;</p><div className="pp-quote__attr"><div className="pp-quote__avatar">SHA</div><div><div className="pp-quote__name">Tooling Team</div><div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div></div></div></div></div></section>
        <FAQAccordion label="Overmold FAQ" heading="Six Questions Engineers Ask." items={FAQS} />
        <section className="pp-related"><div className="pp-related__inner"><div className="pp-related__label">Stack These On Top</div><h2 className="pp-related__h">Related Variants.</h2><div className="pp-related-grid"><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div className="pp-related-grid__title">Waterproof Harness</div><div className="pp-related-grid__desc">Full-system sealing with peripheral seals plus overmold for multi-mating-cycle applications.</div><Link href="/products/waterproof-harness" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><div className="pp-related-grid__title">In-House Testing</div><div className="pp-related-grid__desc">Pull-force validation, IP immersion, and hipot all run in-house on the same production floor.</div><Link href="/capabilities" className="pp-related-grid__link">Read More →</Link></div><div className="pp-related-grid__cell"><svg className="pp-related-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/></svg><div className="pp-related-grid__title">Prototype / NPI</div><div className="pp-related-grid__desc">Overmolded prototype builds in 10 days including first-article tooling and IP validation.</div><Link href="/products/prototype-npi" className="pp-related-grid__link">Read More →</Link></div></div></div></section>
          </>
        )},
      ]} />
    </div>
  )
}