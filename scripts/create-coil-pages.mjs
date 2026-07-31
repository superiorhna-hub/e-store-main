import { mkdirSync, writeFileSync } from 'fs'

const BASE = 'storefront/app/(store)/products'

const PAGES = [
  {
    slug: 'industrial-coil-cable',
    title: 'Industrial Coil Cables',
    meta: 'Heavy-duty industrial coiled cables for factory automation, material handling, and machine tool applications. PUR jacket, oil and abrasion resistant.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Industrial. Tough. Retractable.',
    desc: 'Heavy-duty coiled cables engineered for factory floors, machine tools, and material handling equipment. PUR construction with high oil resistance, abrasion resistance, and reliable retraction through millions of cycles.',
    stats: [['PUR Jacket', 'Oil Resistant'], ['High Cycle', 'Rated'], ['IP67', 'Capable'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Built for the Factory Floor',
    ovH: 'Industrial Coil Cables Endure Where Others Fail.',
    ovP1: 'Industrial coiled cables face conditions that destroy standard cable designs: coolant spray, metal chips, stamping vibration, and repeated dragging across steel surfaces. PUR jacket formulations provide the chemical resistance and cut resistance required. The coil construction itself provides controlled cable management that reduces snag and trip hazards common with loose cable management systems.',
    ovP2: 'We build industrial coiled cables to your exact coil OD, retracted length, and connector specification. Shielded constructions for signal cables in high-noise environments. Hybrid power and signal in a single coiled cable for clean machine integration.',
    CAPS: [
      { title: 'Oil & Coolant Resistant PUR', desc: 'PUR jacket formulated for resistance to cutting oils, coolant, hydraulic fluid, and cleaning solvents common in machining environments.' },
      { title: 'High-Abrasion Construction', desc: 'Reinforced jacket wall thickness and reinforced strain relief zones for applications with regular contact against machine surfaces.' },
      { title: 'EMI Shielded Options', desc: 'Braided and foil-braid shielding within the coiled construction for signal cables running near VFDs and servo drives.' },
      { title: 'Hybrid Power + Signal', desc: 'Single coiled cable carrying power conductors and signal conductors. Reduces cable count and simplifies machine integration.' },
      { title: 'Custom Connector Ends', desc: 'M8, M12, circular DIN, and custom overmolded connectors. IP67 sealing on both ends for wet washdown environments.' },
      { title: 'High-Cycle Rating', desc: 'Coil constructions rated for 500,000+ retract/extend cycles at elevated temperature for continuous-duty industrial applications.' },
    ],
    SPECS: [
      { k: 'Jacket Material', v: 'PUR (standard), TPE chemical-resistant grades' },
      { k: 'Conductor Count', v: '2 to 20 conductors' },
      { k: 'Wire Gauge', v: '28 AWG to 12 AWG' },
      { k: 'Retracted Length', v: '0.2 m to 1.5 m' },
      { k: 'Extended Length', v: '0.6 m to 5 m' },
      { k: 'Coil OD', v: '30 mm to 90 mm' },
      { k: 'Temperature Range', v: '-40°C to +90°C (PUR grade)' },
      { k: 'Lead Time', v: 'Prototype: 5–10 days · Production: 10–20 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Application Review', desc: 'Chemical exposure, flex cycle, temperature, and connector requirements confirmed before material selection.' },
      { n: '02', title: 'Material Selection', desc: 'PUR grade selected for chemical resistance profile. Conductor gauge and strand count matched to current and flex requirements.' },
      { n: '03', title: 'Connector Termination', desc: 'Connectors terminated before coiling. IP-rated connectors potted or overmolded to spec.' },
      { n: '04', title: 'Coil Heat-Set', desc: 'Cable wound on mandrel and heat-set at controlled temperature and time. Coil OD and pitch verified to drawing.' },
      { n: '05', title: 'Dimensional & Electrical Test', desc: 'Retracted/extended length, coil OD verified. Full continuity and hi-pot test on every unit.' },
      { n: '06', title: 'COC & Ship', desc: 'Certificate of conformance included. Coil packed in orientation to maintain memory during transit.' },
    ],
    USECASES: [
      { title: 'Machine Tools & CNC', desc: 'Coiled cables for servo connections, spindle feedback, and pendant controls on CNC machining centers and lathes.' },
      { title: 'Material Handling', desc: 'Coiled power and control cables for conveyor drives, automated guided vehicles, and overhead cranes.' },
      { title: 'Stamping & Press', desc: 'Vibration-resistant coiled cables for die protection sensors and position feedback in stamping applications.' },
      { title: 'Welding Automation', desc: 'Coiled teach pendant cables and sensor cables for welding robots and positioners.' },
      { title: 'Factory Pendants', desc: 'Coiled cable assemblies for operator control pendants on production machinery.' },
      { title: 'Washdown Environments', desc: 'IP67-rated coiled assemblies for food processing, pharmaceutical, and clean-in-place equipment.' },
    ],
  },
  {
    slug: 'medical-coil-cable',
    title: 'Medical Coiled Cable Assembly',
    meta: 'Biocompatible medical coiled cable assemblies for diagnostic devices, patient monitoring, and handheld medical tools. UL/RoHS compliant PUR construction.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Clean. Biocompatible. Retractable.',
    desc: 'Medical-grade coiled cable assemblies for diagnostic devices, patient monitoring equipment, and handheld clinical tools. Biocompatible PUR jackets, disinfectant-resistant, and built to IEC 60601 strain relief requirements.',
    stats: [['Biocompatible', 'PUR Jacket'], ['IEC 60601', 'Strain Relief'], ['Disinfectant', 'Resistant'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Medical-Grade Coil Cable Construction',
    ovH: 'Coiled Cables Built to Clinical Standards.',
    ovP1: 'Medical coiled cables must survive repeated cleaning with hospital disinfectants, maintain coil memory through thousands of daily use cycles, and meet IEC 60601 requirements for strain relief and electrical safety. PUR jacket materials with biocompatible formulations provide the chemical resistance and flex memory required without shedding particles or degrading under standard cleaning protocols.',
    ovP2: 'We build medical coiled cables for diagnostic probes, patient monitoring leads, handheld scanners, and clinical device connections. Custom coil OD, retracted length, and connector types. Shielded constructions for signal integrity. RoHS and REACH compliance documentation available.',
    CAPS: [
      { title: 'Biocompatible PUR Jacket', desc: 'Jacket materials selected for biocompatibility and resistance to IPA, bleach solutions, and quaternary ammonium disinfectants used in clinical settings.' },
      { title: 'IEC 60601 Strain Relief', desc: 'Overmolded strain relief boots designed and tested to IEC 60601-1 requirements for cable pull-out force and bend strain.' },
      { title: 'Shielded Signal Conductors', desc: 'Individual conductor shielding and overall braided shield for EMI sensitive patient monitoring leads and diagnostic signal cables.' },
      { title: 'Custom Coil Geometry', desc: 'Coil OD, retracted length, extended length, and lead lengths to your drawing. Geometry stable through service life.' },
      { title: 'RoHS & REACH Documentation', desc: 'Full material compliance documentation for regulatory submissions. UL-listed wire available on request.' },
      { title: 'Disinfectant Test Data', desc: 'Standard constructions tested against common hospital disinfectants for jacket integrity and markings retention.' },
    ],
    SPECS: [
      { k: 'Jacket Material', v: 'Biocompatible PUR, TPE grades' },
      { k: 'Conductor Count', v: '2 to 15 conductors' },
      { k: 'Wire Gauge', v: '30 AWG to 22 AWG' },
      { k: 'Retracted Length', v: '0.15 m to 1.0 m' },
      { k: 'Extended Length', v: '0.5 m to 3.5 m' },
      { k: 'Coil OD', v: '20 mm to 55 mm' },
      { k: 'Compliance', v: 'RoHS, REACH; UL-listed wire available' },
      { k: 'Lead Time', v: 'Prototype: 7–12 days · Production: 14–21 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Clinical Requirements Review', desc: 'Cleaning protocol, flex cycle, connector type, and regulatory requirements reviewed before design begins.' },
      { n: '02', title: 'Biocompatible Material Selection', desc: 'Jacket material selected for disinfectant resistance and biocompatibility profile. Conductor gauge for signal or power requirement.' },
      { n: '03', title: 'Connector Termination', desc: 'Medical connectors (Lemo, ODU, or custom) terminated and overmolded with IEC 60601 compliant strain relief.' },
      { n: '04', title: 'Heat-Set Coil Forming', desc: 'Cable coiled on mandrel and heat-set. Coil OD and retraction ratio verified to drawing.' },
      { n: '05', title: 'Electrical & Pull-Out Test', desc: 'Continuity, isolation, and strain relief pull-out force tested per IEC 60601-1. Results recorded on COC.' },
      { n: '06', title: 'Compliance Documentation & Ship', desc: 'Certificate of conformance, material compliance declaration, and test records shipped with each order.' },
    ],
    USECASES: [
      { title: 'Diagnostic Probes', desc: 'Coiled cables for ultrasound transducers, ECG leads, and handheld diagnostic devices.' },
      { title: 'Patient Monitoring', desc: 'Coiled patient lead cables for bedside monitors, portable monitoring units, and telemetry devices.' },
      { title: 'Handheld Surgical Tools', desc: 'Coiled cable assemblies for powered surgical handpieces and electrosurgical unit connections.' },
      { title: 'Endoscopy', desc: 'Compact coiled cables for endoscopy light source connections and accessory port cables.' },
      { title: 'Laboratory Equipment', desc: 'Coiled cables for bench-top analyzers, pipettes, and laboratory automation equipment.' },
      { title: 'Point-of-Care Devices', desc: 'Coiled assemblies for portable POC diagnostic devices and handheld clinical analyzers.' },
    ],
  },
  {
    slug: 'hi-flex-robotic-coil-cable',
    title: 'Hi-Flex Robotic Coil Cable',
    meta: 'High-flex coiled cable assemblies for robotic arms, collaborative robots, and servo-driven automation. Rated for 10M+ flex cycles in coiled configuration.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Flex-Rated. Coiled. Robotic-Ready.',
    desc: 'High-flex coiled cable assemblies designed for robotic arm umbilicals, collaborative robot connections, and servo-driven automation where continuous flexing in the coiled state is required alongside retraction functionality.',
    stats: [['10M+ Flex', 'Cycle Rating'], ['PUR Hi-Flex', 'Construction'], ['Shielded', 'EMI Rated'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Coiled Cables That Flex and Retract Indefinitely',
    ovH: 'Hi-Flex Coil Cable for Continuous-Motion Automation.',
    ovP1: 'Standard coiled cables fail prematurely in robotic applications because they are designed for retraction, not continuous flexing. A hi-flex robotic coil cable uses fine-stranded conductors, a PUR jacket with high flex memory, and shielding constructions rated for tens of millions of cycles. The coil geometry provides both retraction function and controlled cable management in the robot cell.',
    ovP2: 'We build hi-flex robotic coil cables for collaborative robot arms, SCARA robots, linear axis umbilicals, and servo-axis service loops. Shielded constructions for encoder signals and bus protocols. Hybrid power and signal in a single compact coil.',
    CAPS: [
      { title: 'Fine-Stranded Hi-Flex Conductors', desc: 'Conductor strand count and wire gauge optimized for flex cycle life. Fine stranding reduces metal fatigue in continuous-flex coil applications.' },
      { title: 'PUR Hi-Flex Jacket', desc: 'PUR jacket formulation selected for flex memory and high cycle life rather than general chemical resistance. Maintains coil spring return through 10M+ cycles.' },
      { title: 'Shielded Bus Protocol Options', desc: 'Individually shielded pairs for Ethernet-based protocols (EtherCAT, PROFINET) within the coiled construction. Impedance controlled on request.' },
      { title: 'Encoder & Power Hybrid', desc: 'Single coiled cable combining servo power conductors, brake conductors, and encoder feedback for clean robot arm integration.' },
      { title: 'Custom Robot Flange Connectors', desc: 'M8, M12, RJ45, and circular connectors selected and overmolded to robot OEM specification. Compatible with major cobot platforms.' },
      { title: 'Service Loop Geometry', desc: 'Coil geometry designed as a service loop rather than a stretched extension cable. Coil OD and hang length optimized for robot work envelope.' },
    ],
    SPECS: [
      { k: 'Jacket Material', v: 'Hi-Flex PUR' },
      { k: 'Conductor Count', v: '4 to 25 conductors + drain wires' },
      { k: 'Wire Gauge', v: '28 AWG to 16 AWG' },
      { k: 'Flex Cycle Rating', v: '5M to 10M+ cycles in coil configuration' },
      { k: 'Coil OD', v: '25 mm to 80 mm' },
      { k: 'Retracted Length', v: '0.3 m to 1.2 m' },
      { k: 'Extended Length', v: '1.0 m to 4.0 m' },
      { k: 'Lead Time', v: 'Prototype: 7–12 days · Production: 14–21 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Robot Application Review', desc: 'Flex cycle requirement, robot protocol, connector type, and geometry constraints reviewed before design.' },
      { n: '02', title: 'Hi-Flex Cable Selection', desc: 'Strand count and PUR grade selected for cycle life. Shielding architecture specified for signal types.' },
      { n: '03', title: 'Connector & Overmold', desc: 'Robot-compatible connectors terminated and overmolded. Overmold geometry provides flex relief, not hard-stop strain relief.' },
      { n: '04', title: 'Mandrel Coil & Heat-Set', desc: 'Cable coiled on mandrel to OD and pitch. Heat-set at temperature and duration optimized for hi-flex PUR.' },
      { n: '05', title: 'Flex & Dimensional Test', desc: 'Sample units flex-cycled at accelerated rate. All units checked for retracted/extended length and coil OD.' },
      { n: '06', title: 'Robot Compatibility Test & Ship', desc: 'Cable assembly verified against robot platform connector footprint. COC with cycle test data shipped with order.' },
    ],
    USECASES: [
      { title: 'Collaborative Robot Arms', desc: 'Umbilical coil cables for UR, FANUC CRX, ABB YuMi, and other collaborative robot platforms.' },
      { title: 'SCARA & Cartesian Robots', desc: 'Coiled service loops for SCARA pick-and-place robots and Cartesian axis systems.' },
      { title: 'Linear Servo Axes', desc: 'Coiled umbilical cables for linear motor stages and servo-driven gantry systems.' },
      { title: 'Robot End-Effectors', desc: 'Coiled cables supplying power, signals, and pneumatics to robotic grippers and end-of-arm tooling.' },
      { title: 'Robot Cell Infrastructure', desc: 'Cell boundary coil cables providing safe retractable connections between fixed infrastructure and moving robots.' },
      { title: 'Automated Test Equipment', desc: 'Coiled probe cables and measurement leads for automated electrical test systems.' },
    ],
  },
  {
    slug: 'trailer-vehicle-coil-cable',
    title: 'Trailer and Vehicle Coil Cable',
    meta: 'Trailer and vehicle coiled cable assemblies for brake lights, ABS, and auxiliary power connections. SAE and ISO compliant. Weatherproof PUR construction.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Road-Ready. Weather-Proof. Retractable.',
    desc: 'Heavy-duty coiled cable assemblies for trailer connections, towing vehicles, and mobile equipment. SAE J560 and ISO 11446 compliant constructions for brake, ABS, and auxiliary power. Built to survive outdoor weathering and road salt exposure.',
    stats: [['SAE J560', 'Compliant'], ['IP67 / IP69K', 'Weatherproof'], ['Road Salt', 'Resistant'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Vehicle and Trailer Coil Cable Construction',
    ovH: 'Coiled Cables Engineered for Road Conditions.',
    ovP1: 'Trailer and vehicle coiled cables must handle UV exposure, road salt, temperature swings from -40°C to +90°C, and repeated stretching during trailer coupling and uncoupling. PUR jacket construction is standard for this application because of its resistance to ozone, UV, and road chemicals while maintaining coil spring return through thousands of coupling cycles.',
    ovP2: 'We build SAE J560 7-way trailer cables, ISO 11446 brake/ABS assemblies, and custom auxiliary coiled power cables to your specification. Plug and socket options in SAE, ISO, and custom configurations. Weatherproof overmolded ends standard.',
    CAPS: [
      { title: 'SAE J560 & ISO 11446 Compliant', desc: 'Standard 7-way SAE J560 and ISO trailer plug/socket configurations available as fully assembled coiled cables.' },
      { title: 'UV & Ozone Resistant PUR', desc: 'PUR jacket formulation rated for outdoor UV and ozone exposure. Maintains flexibility at -40°C for cold-weather towing.' },
      { title: 'Weatherproof Connector Ends', desc: 'Overmolded or grommet-sealed connector ends with IP67 or IP69K rating for dirt, dust, and pressure washing.' },
      { title: 'Road Salt Resistance', desc: 'Jacket and connector materials selected for resistance to road salts and de-icing chemicals used in northern climates.' },
      { title: 'ABS & Air Brake Lines', desc: 'Coiled ABS sensor cables and air brake signal cables for heavy commercial vehicle and trailer applications.' },
      { title: 'Custom Auxiliary Power', desc: 'Custom coiled power cables for trailer-mounted accessories: refrigeration, liftgates, and auxiliary lighting.' },
    ],
    SPECS: [
      { k: 'Jacket Material', v: 'UV-resistant PUR, TPE' },
      { k: 'Standard Configurations', v: 'SAE J560 7-way, ISO 11446, custom' },
      { k: 'Wire Gauge', v: '16 AWG to 10 AWG for power; 22 AWG for signal' },
      { k: 'Retracted Length', v: '0.3 m to 0.8 m' },
      { k: 'Extended Length', v: '1.5 m to 4.5 m' },
      { k: 'Temperature Range', v: '-40°C to +90°C' },
      { k: 'IP Rating', v: 'IP67 standard; IP69K on request' },
      { k: 'Lead Time', v: 'Prototype: 5–10 days · Production: 10–20 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Configuration Review', desc: 'Trailer standard (SAE/ISO), power requirements, and connector pinout reviewed against application.' },
      { n: '02', title: 'Material & Gauge Selection', desc: 'UV PUR jacket grade confirmed. Power conductor gauges verified for current carrying capacity per SAE J1127.' },
      { n: '03', title: 'Connector Assembly', desc: 'SAE, ISO, or custom connectors assembled and overmolded. Weatherproof boot geometry confirmed.' },
      { n: '04', title: 'Coil Heat-Set', desc: 'Cable coiled and heat-set on mandrel. Cold-temperature retraction tested at -40°C on sample units.' },
      { n: '05', title: 'Weatherproof & Electrical Test', desc: 'IP67 immersion test and electrical continuity test on all units. Hi-pot test on power conductors.' },
      { n: '06', title: 'COC & Ship', desc: 'Test records and certificate of conformance included with every shipment.' },
    ],
    USECASES: [
      { title: 'Semi-Truck & Trailer', desc: 'SAE J560 7-way coiled umbilicals for class 8 tractor-trailer brake light and ABS connections.' },
      { title: 'Agricultural Towing', desc: 'Coiled implement cables for tractors towing hay equipment, grain carts, and tillage implements.' },
      { title: 'Recreational Towing', desc: 'Coiled trailer cables for boat trailers, RV hitches, and horse trailer electrical connections.' },
      { title: 'Construction Equipment', desc: 'Coiled cables for construction site trailers, lowboy haulers, and portable equipment connections.' },
      { title: 'Utility & Service Vehicles', desc: 'Coiled power and signal cables for utility trailers and service body vehicle connections.' },
      { title: 'Military Vehicles', desc: 'MIL-spec coiled trailer cables for military tactical vehicle towing applications.' },
    ],
  },
  {
    slug: 'custom-oem-coil-cable',
    title: 'Custom OEM Coil Cable Assemblies',
    meta: 'Custom OEM coiled cable assemblies to your drawing. Any retraction ratio, connector, coil OD, and jacket material. Prototype to production volumes.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Your Spec. Your Connectors. Custom Coil.',
    desc: 'Fully custom OEM coiled cable assemblies built to your drawing or sample. Any coil geometry, connector, jacket material, and conductor configuration. NPI support through full production with consistent first-article approval process.',
    stats: [['Any Connector', 'Type'], ['Drawing or', 'Sample Match'], ['NPI to', 'Production'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'OEM Custom Coil Cable Engineering',
    ovH: 'We Build What You Design — Exactly.',
    ovP1: 'Custom OEM coil cable assembly programs begin with your drawing, sketch, or sample part. We reverse-engineer or review your design, issue a DFM report identifying any manufacturability concerns, and build a first article for your approval before production begins. Every dimension on your drawing becomes a controlled characteristic on our inspection record.',
    ovP2: 'From single-piece NPI builds to production orders of thousands, the process does not change. Same first article approval, same inspection records, same COC. We support OEM programs with consistent documentation, stable lead times, and direct engineering contacts.',
    CAPS: [
      { title: 'Drawing-to-Part Builds', desc: 'We build to your PDF, DXF, or native CAD drawing. GD&T characteristics captured on first article inspection report.' },
      { title: 'Sample Reverse Engineering', desc: 'Send a sample assembly. We generate a wire list and drawing for your approval before building to spec.' },
      { title: 'DFM Review Included', desc: 'DFM review at no charge with every quote. We flag connector selection, strain relief, coil OD, and testability issues.' },
      { title: 'Any Connector Type', desc: 'Any commercial or custom connector type. We have no connector brand restriction and source to your BOM.' },
      { title: 'Full Material Traceability', desc: 'Cable, connector, and overmold material lot traceability recorded for every production run. Available on request.' },
      { title: 'Consistent Production Certification', desc: 'COC on every shipment. PPAP Level 1–3 available for automotive and tier-1 OEM programs.' },
    ],
    SPECS: [
      { k: 'Build Basis', v: 'Customer drawing, sample, or co-developed spec' },
      { k: 'Conductor Count', v: '2 to 30 conductors' },
      { k: 'Jacket Material', v: 'PUR, TPE, PVC — per OEM spec' },
      { k: 'Coil OD', v: '20 mm to 100 mm' },
      { k: 'Retracted Length', v: 'To drawing' },
      { k: 'Extended Length', v: 'To drawing' },
      { k: 'Certification', v: 'COC standard; PPAP on request' },
      { k: 'Lead Time', v: 'NPI: 7–14 days · Production: 14–28 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Drawing or Sample Review', desc: 'Customer drawing or sample reviewed. Questions raised before quoting. DFM concerns flagged in quote response.' },
      { n: '02', title: 'First Article Build', desc: 'First article built to drawing. Full dimensional and electrical inspection recorded on FAIR report.' },
      { n: '03', title: 'Customer Approval', desc: 'FAIR and samples submitted to customer for approval. Any corrections incorporated before production release.' },
      { n: '04', title: 'Production Release', desc: 'Approved FAIR stored. Production router and inspection plan created for production quantities.' },
      { n: '05', title: 'Production Build & QC', desc: 'Production built to released router. In-process inspection at each stage. 100% electrical test before ship.' },
      { n: '06', title: 'COC & Ship', desc: 'Certificate of conformance, lot records, and (if required) PPAP documentation shipped with every order.' },
    ],
    USECASES: [
      { title: 'Industrial Equipment OEMs', desc: 'Coiled cable assemblies for machine builder OEM programs supplying industrial automation and processing equipment.' },
      { title: 'Medical Device OEMs', desc: 'Custom coiled cables for medical device OEMs requiring full regulatory documentation and material traceability.' },
      { title: 'Automotive Tier-1 Suppliers', desc: 'PPAP-supported coiled cable programs for automotive tier-1 suppliers and OEM tooling and equipment.' },
      { title: 'Consumer Electronics OEMs', desc: 'Custom coiled cables for consumer product OEMs with specific aesthetic and performance requirements.' },
      { title: 'Defense Contractors', desc: 'Coiled cable assemblies to MIL-spec for defense equipment OEMs and prime contractors.' },
      { title: 'Startup & NPI Programs', desc: 'Single-piece prototypes to full production for startup companies and new product introduction programs.' },
    ],
  },
  {
    slug: 'overmolded-coil-cable',
    title: 'Overmolded Coil Cable Solutions',
    meta: 'Overmolded coiled cable assemblies with integrated strain relief, connector boots, and breakout overmolds. Custom colors and materials.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Overmolded. Protected. Retractable.',
    desc: 'Coiled cable assemblies with overmolded connector ends, integrated strain relief boots, and custom breakout overmolds. Overmolding adds environmental protection, mechanical strain relief, and product identity to standard coiled cable constructions.',
    stats: [['Custom Boot', 'Geometry'], ['IP67 Capable', 'Sealing'], ['Any Connector', 'Overmolded'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Why Overmold the Ends of a Coil Cable',
    ovH: 'Overmolded Strain Relief Extends Coil Cable Life.',
    ovP1: 'The failure point of a coiled cable is almost always at the transition between the straight lead section and the coiled section, or at the connector termination. Overmolding this transition zone with a tapered TPE or PUR boot distributes the bending stress over a longer length, eliminating the sharp bend radius that causes premature conductor fatigue. Well-designed overmold geometry increases cable life by a factor of 3–5× in high-cycle applications.',
    ovP2: 'We design and build custom overmold tooling for coiled cable assemblies. Straight and angled boots, bayonet locking features, ergonomic grip geometry, and custom brand colors are all achievable. IP67 sealing at the connector interface is standard with through-molded connector bodies.',
    CAPS: [
      { title: 'Tapered Flex Relief Boots', desc: 'Boot geometry tapered from rigid at the connector to flexible at the cable. Taper angle engineered to match cable OD and flex requirement.' },
      { title: 'Through-Molded IP Sealing', desc: 'Overmold material flowed through and around the connector shell to seal the cable entry. IP67 capable without separate grommet seals.' },
      { title: 'Custom Tooling Ownership', desc: 'Tooling built to your part number. Stored and maintained at our facility. Tooling cost amortized into production pricing on request.' },
      { title: 'Color Branding', desc: 'Boot color in any standard or Pantone-matched color. Two-shot overmolding for dual-color boots is available.' },
      { title: 'Angled & Ergonomic Ends', desc: 'Right-angle boots, angled entry connectors, and ergonomic grip shapes for handheld device applications.' },
      { title: 'Breakout Overmolds', desc: 'Y-body and multi-way breakout overmolds for coiled cables splitting into multiple branch connections.' },
    ],
    SPECS: [
      { k: 'Overmold Material', v: 'TPE (standard), PUR, nylon, polypropylene' },
      { k: 'Boot Entry Angle', v: 'Straight, 45°, 90° available' },
      { k: 'IP Rating', v: 'IP67 through-molded standard' },
      { k: 'Color Options', v: 'Standard colors or Pantone-matched' },
      { k: 'Tooling Lead Time', v: 'New tool: 3–5 weeks; repeat orders from stock tooling' },
      { k: 'Production MOQ', v: '100 units with tooling; lower quantities at prototype rate' },
      { k: 'Coil Integration', v: 'All coil OD and retracted/extended lengths' },
      { k: 'Certification', v: 'COC standard; UL or VDE recognized on request' },
    ],
    PROCESS: [
      { n: '01', title: 'Overmold Design Review', desc: 'Boot geometry, material, color, and IP requirement defined. Parting line and gate location reviewed with customer.' },
      { n: '02', title: 'Tool Design & Build', desc: 'Aluminum or steel tool designed in CAD and machined. Sample shots and dimensional check before production approval.' },
      { n: '03', title: 'Cable & Connector Prep', desc: 'Coiled cable built and connector terminated before overmolding. Connector held in tool fixture during injection.' },
      { n: '04', title: 'Injection Overmolding', desc: 'TPE or PUR injected over connector and cable entry. Flash removed and boot inspected for voids and completeness.' },
      { n: '05', title: 'Pull-Out & IP Test', desc: 'Connector pull-out force tested. IP67 test on sealed ends. Electrical test on every unit.' },
      { n: '06', title: 'COC & Ship', desc: 'Tooling records, COC, and IP test results shipped with production order documentation.' },
    ],
    USECASES: [
      { title: 'Handheld Device Cables', desc: 'Overmolded coil cables for barcode scanners, portable test equipment, and handheld industrial tools.' },
      { title: 'Medical Device Connections', desc: 'Ergonomic overmolded boots for medical probes and patient monitoring leads.' },
      { title: 'Industrial Pendant Cables', desc: 'Ruggedized overmolded coil cables for machine operator pendants and control devices.' },
      { title: 'Consumer Electronics', desc: 'Aesthetic overmolded coil cables for consumer product charging and accessory cables.' },
      { title: 'Outdoor Equipment', desc: 'IP67 overmolded coil cables for outdoor power tools and agricultural equipment.' },
      { title: 'Telecom & Headsets', desc: 'Soft-touch overmolded coil cables for professional headsets and communication devices.' },
    ],
  },
  {
    slug: 'signal-coil-cable',
    title: 'Signal Coil Cable',
    meta: 'Shielded signal coiled cables for sensor connections, encoder feedback, data acquisition, and low-voltage instrumentation. Custom conductor count and shielding.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Shielded. Signal-Clean. Retractable.',
    desc: 'Shielded coiled signal cables for sensor connections, encoder feedback, analog instrumentation, and low-voltage data acquisition. EMI shielding preserved within the coiled construction. Custom conductor count, gauge, and shielding architecture.',
    stats: [['Braided EMI', 'Shield'], ['Multi-Conductor', 'Signal Pairs'], ['Low Capacitance', 'Options'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Signal Integrity in a Coiled Cable',
    ovH: 'Shielded Signal Coil Cables Without Compromise.',
    ovP1: 'Standard coiled cables are designed for power and control. Signal coiled cables require shielding to be effective in the coiled geometry. Braided shield coverage must remain above 85% even in the compressed coil state. Foil shields can crack at the inner coil radius. We design the shielding architecture specifically for the coil construction, not as an afterthought.',
    ovP2: 'We build signal coiled cables for encoder feedback, analog sensor connections, CAN bus, RS-485, and custom multi-conductor instrumentation assemblies. Individually shielded pairs within an overall braided shield available for multi-signal constructions.',
    CAPS: [
      { title: 'Coil-Rated Braided Shield', desc: 'Shield coverage percentage maintained in coiled state. Shield wire size and weave angle optimized for flex in coiled geometry.' },
      { title: 'Individually Shielded Pairs', desc: 'Individual foil or braid shield on signal pairs within the coiled cable for multi-signal constructions requiring pair-level isolation.' },
      { title: 'Low-Capacitance Options', desc: 'Low-capacitance insulation on signal conductors for analog and high-frequency digital signal pairs.' },
      { title: 'Twisted Pair Construction', desc: 'Signal pairs twisted to specification for common-mode noise rejection in differential signal lines.' },
      { title: 'Multi-Protocol Support', desc: 'Constructions verified for RS-485, CAN bus, EtherCAT, and analog ±10V signal transmission.' },
      { title: 'Custom Conductor Count', desc: '2 to 20 conductors plus drain wires and shield in a single coiled assembly.' },
    ],
    SPECS: [
      { k: 'Jacket Material', v: 'PUR (standard), TPE' },
      { k: 'Shielding', v: 'Overall braid (standard); individual pair foil + drain available' },
      { k: 'Shield Coverage', v: '85% min at full extension; verified in coiled state' },
      { k: 'Conductor Count', v: '2 to 20 conductors' },
      { k: 'Wire Gauge', v: '30 AWG to 22 AWG signal; 22 AWG to 16 AWG power' },
      { k: 'Signal Protocols', v: 'Analog, RS-485, CAN, EtherCAT, encoder' },
      { k: 'Retracted / Extended', v: 'To specification' },
      { k: 'Lead Time', v: 'Prototype: 7–12 days · Production: 14–21 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Signal Architecture Review', desc: 'Signal type, shielding requirement, conductor count, and protocol verified before cable design is released.' },
      { n: '02', title: 'Shield Design for Coil', desc: 'Braid weave angle and wire size selected to maintain shield coverage in the coiled state. Foil shields used only on inner pairs.' },
      { n: '03', title: 'Connector Termination', desc: 'Shielded connectors terminated with controlled shield pigtail or 360° backshell termination. Drain wire routing specified.' },
      { n: '04', title: 'Coil Heat-Set', desc: 'Cable wound and heat-set. Shield coverage verified on sample units at both retracted and extended state.' },
      { n: '05', title: 'Electrical & EMI Test', desc: 'Continuity, isolation, and shield continuity tested on all units. Impedance testing on request for controlled-impedance constructions.' },
      { n: '06', title: 'COC & Ship', desc: 'Shield test data included in COC. Packaging maintains coil memory and protects shield integrity during transit.' },
    ],
    USECASES: [
      { title: 'Encoder Feedback Cables', desc: 'Shielded coiled cables for servo motor encoder feedback connections on CNC machines and robotics.' },
      { title: 'Sensor Connections', desc: 'Coiled signal cables for proximity sensors, pressure transducers, and load cells on industrial equipment.' },
      { title: 'Data Acquisition', desc: 'Multi-conductor shielded coil cables for portable data acquisition systems and instrumentation.' },
      { title: 'CAN & RS-485 Bus', desc: 'Coiled CAN bus and RS-485 cables for field device connections in automation systems.' },
      { title: 'Test & Measurement', desc: 'Coiled shielded cables for benchtop test instruments and portable measurement equipment.' },
      { title: 'Process Instrumentation', desc: 'Coiled analog signal cables for 4–20 mA loop and ±10V process instrumentation.' },
    ],
  },
  {
    slug: 'aviation-coil-cable',
    title: 'Aviation Coil Cables',
    meta: 'Aviation-grade coiled cable assemblies for aircraft ground support, avionics test, and airfield equipment. MIL-spec wire options, lightweight construction.',
    cat: 'Coil / Spiral Cable',
    tagline: 'Aviation-Grade. Lightweight. Retractable.',
    desc: 'Aviation-grade coiled cable assemblies for aircraft ground support equipment, avionics test stations, and airfield infrastructure. MIL-spec wire options, lightweight insulation, and wide operating temperature range from -55°C to +125°C.',
    stats: [['MIL-Spec', 'Wire Options'], ['-55°C to', '+125°C'], ['Lightweight', 'Construction'], ['&lt;24 H', 'Quote Reply']],
    ovTitle: 'Aviation-Grade Coil Cable Standards',
    ovH: 'Coiled Cables Built for Aviation Environments.',
    ovP1: 'Aviation coiled cables operate across an extreme temperature range, must be lightweight to minimize aircraft weight penalty, and must meet fire and smoke generation requirements for any cabin or equipment bay use. MIL-W-22759 and MIL-C-17 compliant wire constructions are available within the coiled cable assembly. Jacket materials selected for aviation chemical resistance.',
    ovP2: 'We build aviation coiled cables for ground support equipment, avionics bench test, cockpit handset cords, and airfield communications. Circular MIL connectors, D-Sub, and custom configurations. Documentation for aircraft program use available on request.',
    CAPS: [
      { title: 'MIL-Spec Wire Options', desc: 'MIL-W-22759 and MIL-C-17 compliant wire available within coiled assembly for aviation programs requiring traceability.' },
      { title: 'Wide Temperature Range', desc: 'Jacket and insulation materials selected for operation from -55°C to +125°C to match aviation environment specifications.' },
      { title: 'Lightweight Construction', desc: 'Thin-wall insulation and lightweight jacket options for weight-sensitive aviation and UAV applications.' },
      { title: 'Circular MIL Connectors', desc: 'MIL-DTL-38999, MIL-DTL-26482, and other circular MIL connectors assembled and overmolded to coil ends.' },
      { title: 'Fire & Smoke Requirements', desc: 'Jacket material flame retardancy and smoke generation data available. FAR 25.853 compliant materials on request.' },
      { title: 'Aviation Documentation', desc: 'Material certs, C of C, traceability records, and FAA 8130-3 tag (for applicable parts) available for aviation programs.' },
    ],
    SPECS: [
      { k: 'Wire Type', v: 'Commercial PUR (standard); MIL-W-22759 on request' },
      { k: 'Temperature Range', v: '-55°C to +125°C' },
      { k: 'Connector Options', v: 'MIL-DTL-38999, MIL-DTL-26482, D-Sub, custom' },
      { k: 'Conductor Count', v: '2 to 20 conductors' },
      { k: 'Weight Rating', v: 'Standard; lightweight thin-wall insulation option' },
      { k: 'Flame Rating', v: 'VW-1; FAR 25.853 materials on request' },
      { k: 'Documentation', v: 'COC standard; FAA 8130-3 on applicable parts' },
      { k: 'Lead Time', v: 'Prototype: 10–15 days · Production: 20–30 days' },
    ],
    PROCESS: [
      { n: '01', title: 'Aviation Requirements Review', desc: 'Temperature range, applicable MIL-spec, connector type, and documentation requirements reviewed before quoting.' },
      { n: '02', title: 'Wire & Material Selection', desc: 'MIL-spec or commercial wire selected per program requirement. Jacket material confirmed for temperature and flame rating.' },
      { n: '03', title: 'Connector Assembly', desc: 'MIL circular connectors or custom connectors assembled with correct insert arrangement and contact type per drawing.' },
      { n: '04', title: 'Coil Heat-Set', desc: 'Cable coiled and heat-set. Low-temperature retraction verified at -55°C on sample units.' },
      { n: '05', title: 'Electrical & Environmental Test', desc: 'Continuity, isolation, and hi-pot test. Temperature cycling on qualification lots. All results recorded.' },
      { n: '06', title: 'Aviation Documentation & Ship', desc: 'COC, material certs, lot traceability, and FAA 8130-3 (if applicable) packaged with shipment.' },
    ],
    USECASES: [
      { title: 'Ground Support Equipment', desc: 'Coiled cable assemblies for aircraft ground power units, hydraulic test rigs, and maintenance equipment.' },
      { title: 'Avionics Test Stations', desc: 'Coiled test cables for avionics bench test equipment and ATE systems.' },
      { title: 'Cockpit Handsets', desc: 'Coiled handset cords for aircraft crew communications and cockpit voice communication systems.' },
      { title: 'Airfield Lighting & Comm', desc: 'Coiled cable assemblies for airfield lighting control, NAVAID connections, and communications.' },
      { title: 'UAV & Drone Systems', desc: 'Lightweight coiled cables for UAV ground control stations, tethered drones, and payload connections.' },
      { title: 'Defense Aviation', desc: 'MIL-spec coiled cable assemblies for military aircraft programs and defense ground support equipment.' },
    ],
  },
]

function buildPage(p) {
  const statsJsx = p.stats.map(([val, lbl]) =>
    `                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">${val}</div><div className="pp-hero__stat-lbl">${lbl}</div></div>`
  ).join('\n')

  const capsArr = p.CAPS.map(c =>
    `  { title: "${c.title}", desc: "${c.desc}" },`
  ).join('\n')

  const specsArr = p.SPECS.map(s =>
    `  { k: "${s.k}", v: "${s.v}" },`
  ).join('\n')

  const processArr = p.PROCESS.map(pr =>
    `  { n: "${pr.n}", title: "${pr.title}", desc: "${pr.desc}" },`
  ).join('\n')

  const usecasesArr = p.USECASES.map(u =>
    `  { title: "${u.title}", desc: "${u.desc}" },`
  ).join('\n')

  return `import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "${p.title} | Superior Harness & Assembly",
  description: "${p.meta}",
}

const CAPS = [
${capsArr}
]

const SPECS = [
${specsArr}
]

const PROCESS = [
${processArr}
]

const USECASES = [
${usecasesArr}
]

const FAQS = [
  { q: "What is the minimum order quantity?", a: "One unit for prototype and NPI programs. Production orders have no volume minimum — pricing reflects quantity. Prototypes typically ship within 5–10 business days." },
  { q: "How do I submit a drawing for quote?", a: "Email drawings, schematics, or sample parts to info@superiorharness.com, or use the quote form on this site. We accept PDF, DXF, and native CAD formats. Quotes issued within 24 hours." },
  { q: "What quality standards do you work to?", a: "IPC/WHMA-A-620 Class 2 and Class 3 for wire harnesses. IPC-A-610 for PCB assemblies. All assemblies electrically tested 100% before shipment. FAI and COC available on all programs." },
  { q: "Can you reverse-engineer from a sample?", a: "Yes. Send a sample assembly and we generate a wire list or drawing for your approval before production. This is our most common NPI scenario." },
  { q: "Do you offer design-for-manufacture review?", a: "Yes — DFM review is included at no charge with every quote. We flag issues with routing, gauge sizing, connector selection, and testability before any tooling is committed." },
]

export default function Page() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero__inner">
          <div className="pp-hero__crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/products">Products</Link><span>/</span>
            ${p.title}
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">${p.desc}</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">${p.cat}</div>
              <h1 className="pp-hero__h">
                ${p.tagline.split('. ').map((s, i) => i === 0 ? s + '.' : `<span className="muted">${s}.</span>`).join('\n                ')}
              </h1>
              <p className="pp-hero__desc">${p.desc}</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet &rarr;</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__stats-grid">
${statsJsx}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
            <div className="pp-meaning__inner">
              <div className="pp-meaning__label">${p.ovTitle}</div>
              <h2 className="pp-meaning__h">${p.ovH}</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">${p.ovP1}</p>
                <p className="pp-meaning__text">${p.ovP2}</p>
              </div>

              <div className="pp-ov-gallery">
                <img src="/images/ur-coiled-cable-extended.webp" alt="${p.title} coil cable extended" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coiled-cable-handheld-scanner.webp" alt="${p.title} application" className="pp-ov-gallery__img" loading="lazy" />
                <img src="/images/coil-cable-variety.webp" alt="${p.title} variety" className="pp-ov-gallery__img" loading="lazy" />
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
          <section className="pp-caps">
            <div className="pp-caps__inner">
              <div className="pp-caps__label">Manufacturing Capability Block</div>
              <h2 className="pp-caps__h">Six Processes.<br />One Assembly.</h2>
              <div className="pp-caps-grid">
                {CAPS.map(c => (
                  <div key={c.title} className="pp-caps-grid__cell">
                    <svg className="pp-caps-grid__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                    <div className="pp-caps-grid__title">{c.title}</div>
                    <div className="pp-caps-grid__desc">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "specs", label: "Specifications", content: (
          <section className="pp-specs">
            <div className="pp-specs__inner">
              <div className="pp-specs__label">Specification Sheet</div>
              <h2 className="pp-specs__h">${p.title} Envelope.</h2>
              <table className="pp-spec-table">
                <tbody>
                  {SPECS.map(s => (
                    <tr key={s.k}><td className="spec-key">{s.k}</td><td className="spec-val">{s.v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )},
        { id: "process", label: "Process", content: (
          <section className="pp-process">
            <div className="pp-process__inner">
              <div className="pp-process__label">Production Flow</div>
              <h2 className="pp-process__h">Spec to Ship.<br />Six Steps.</h2>
              <div className="pp-process-grid">
                {PROCESS.map(p => (
                  <div key={p.n} className="pp-process-grid__cell">
                    <div className="pp-process-grid__num">{p.n}</div>
                    <div className="pp-process-grid__title">{p.title}</div>
                    <div className="pp-process-grid__desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "applications", label: "Applications", content: (
          <section className="pp-usecases">
            <div className="pp-usecases__inner">
              <div className="pp-usecases__label">Application Map</div>
              <h2 className="pp-usecases__h">Industries We Serve.</h2>
              <div className="pp-usecases-grid">
                {USECASES.map(u => (
                  <div key={u.title} className="pp-usecases-grid__cell">
                    <div className="pp-usecases-grid__title">{u.title}</div>
                    <div className="pp-usecases-grid__desc">{u.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )},
        { id: "resources", label: "Resources", content: (
          <>
            <section className="pp-quote">
              <div className="pp-quote__inner">
                <div className="pp-quote__card">
                  <div className="pp-quote__label">Operations Note</div>
                  <p className="pp-quote__text">&ldquo;Every assembly we build starts with your specification — not a closest match, not a catalog default. If your drawing has a note, we build to it. If a note is ambiguous, we call before we cut.&rdquo;</p>
                  <div className="pp-quote__attr">
                    <div className="pp-quote__avatar">SHA</div>
                    <div>
                      <div className="pp-quote__name">Production Team</div>
                      <div className="pp-quote__role">Superior Harness &amp; Assembly &middot; Canton, MI</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FAQAccordion label="${p.title} FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Coil / Spiral Cable Solutions</div>
                    <div className="pp-related-grid__desc">Full range of coil cable types and constructions.</div>
                    <Link href="/products/coil-spiral-cable" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Overmolded Cable Assembly</div>
                    <div className="pp-related-grid__desc">Overmolded connector terminations with custom strain relief.</div>
                    <Link href="/products/overmolded-harness" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">Custom Wire Harness</div>
                    <div className="pp-related-grid__desc">Custom wire harness assemblies for any application.</div>
                    <Link href="/products/custom-wire-harness" className="pp-related-grid__link">Read More &rarr;</Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )},
      ]} />
    </div>
  )
}
`
}

for (const p of PAGES) {
  const dir = `${BASE}/${p.slug}`
  mkdirSync(dir, { recursive: true })
  const content = buildPage(p)
  writeFileSync(`${dir}/page.tsx`, content)
  console.log(`DONE: ${p.slug}`)
}

console.log(`\nCreated ${PAGES.length} coil cable pages.`)
