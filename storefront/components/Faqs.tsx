const FAQS = [
  {
    q: "What is the difference between a custom wire harness and a cable assembly?",
    a: "While often used interchangeably, a wire harness typically groups multiple wires together for organization within an enclosure, whereas a cable assembly features a durable outer sheath to protect the wires from harsh environmental conditions. We specialize in designing and manufacturing both, depending on your application's requirements.",
  },
  {
    q: "What specific wire processing capabilities do you offer?",
    a: "We utilize state-of-the-art equipment to provide precision wire processing. Our capabilities include automatic cut and strip wire processing, press and terminal applicator services, ultrasonic wire splicing, and highly accurate connector loading to ensure flawless performance.",
  },
  {
    q: "How do you ensure the quality of your wire harnesses?",
    a: "Quality assurance is built into every step of our manufacturing process. With over 30 years of combined team experience, we perform rigorous inspections, including precise connector loading verification, to ensure that every wiring system we produce meets exact drawings and strict safety specifications.",
  },
  {
    q: "What industries typically use your custom wiring solutions?",
    a: "Our precision-engineered wire harnesses are relied upon by a diverse range of high-demand industries. We supply reliable wiring systems for automotive applications, electric vehicles (EV), robotics, medical devices, and heavy industrial equipment.",
  },
  {
    q: "Can you handle both small prototype orders and high-volume production?",
    a: "Yes, we offer highly flexible manufacturing. Whether you need a low-volume run of prototypes to test a new product design, or a continuous, high-volume production run, we have the scalable capacity and equipment to support your needs at every stage.",
  },
  {
    q: "What information do I need to provide to get a quote?",
    a: "To provide the most accurate quote, we typically need your engineering drawings, exact wire specifications (gauge, length, etc.), connector types, and the required volume. If you only have a concept, our experienced team can also assist in finalizing the design for manufacturing.",
  },
]

function PlusIcon() {
  return (
    <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  )
}

export default function Faqs() {
  return (
    <section className="faq-sec">
      <div className="W">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="D3" style={{ marginBottom: 16 }}>Frequently Asked Questions</h2>
          <p style={{ color: "var(--text2)", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
            Find answers to common questions about our manufacturing capabilities, processes, and custom wiring solutions.
          </p>
        </div>
        
        <div className="faq-grid">
          {FAQS.map((faq, i) => (
            <details key={i} className="faq-details" name="faq-accordion">
              <summary className="faq-summary">
                {faq.q}
                <PlusIcon />
              </summary>
              <div className="faq-content">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
