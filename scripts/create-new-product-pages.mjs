import { mkdirSync, writeFileSync, existsSync } from 'fs'

const BASE = 'storefront/app/(store)/products'

const PAGES = {
  'multi-branch-harness': {
    title: "Multi-Branch Wire Harnesses",
    metaDesc: "Custom multi-branch wire harnesses with Y-splits, star topologies, and 100+ circuit trees. IPC/WHMA-A-620 production. Build-to-print.",
    quickAnswer: "Complex multi-branch harnesses with any topology — Y-split, star, ring, or hybrid. Routed on custom boards to your drawing. 100% electrically tested.",
    cat: "Wire Harness",
    heroH: ["Multi-Branch.", "Any Topology."],
    heroDesc: "We build multi-branch wire harnesses from simple Y-splits to 100+ circuit star assemblies. Custom routing boards, full IPC/WHMA-A-620 compliance, and 100% electrical test on every unit.",
    stats: [["2+", "Branches Min"], ["100+", "Circuit Trees"], ["100%", "Elec. Tested"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Multi-Branch Means Here",
    ovH: "Topology Is the Hard Part. We Handle It.",
    ovP1: "A multi-branch harness is defined by its geometry: wires leave a common trunk and terminate at two or more distinct endpoints. Every split, every branch length, and every connector location is governed by your drawing — not a default assumption. We build on custom routing boards pinned to your exact branch lengths and tolerances, so the harness installs correctly on the first attempt.",
    ovP2: "Complex topologies with star junctions, ring circuits, and mixed-gauge trunks are standard for us. If your application requires any combination of waterproofing, high voltage, or overmolded strain relief on top of a multi-branch harness, we build that stack as a single assembly program.",
    CAPS: [
      { title: "Custom Routing Boards", desc: "Every multi-branch harness is assembled on a dedicated routing board pinned to your exact branch geometry, connector positions, and bend radii." },
      { title: "Multi-Trunk Topology", desc: "Y-splits, star junctions, ring circuits, and 100+ circuit trees are all within standard scope. Complex geometry is documented and repeatable." },
      { title: "Mixed-Gauge Trunks", desc: "Trunk conductors and branch conductors can differ in gauge, insulation type, and color. Material control is tracked per the wire list throughout production." },
      { title: "Loom & Braid Breakout", desc: "Main trunk and individual branches are sleeved independently per your print. Breakout points are taped, heat-shrunken, or molded to spec." },
      { title: "100% Electrical Test", desc: "Every assembly tested on a dedicated fixture. All continuity, resistance, and hi-pot parameters confirmed before shipment. No sampling." },
      { title: "FAI & Documentation", desc: "First article inspection report available on all programs. Traveler, COC, and lot traceability on every order." },
    ],
    SPECS: [
      { k: "Wire Gauge Range", v: "28 AWG to 2/0 AWG" },
      { k: "Branch Count", v: "2 to 50+ branches per assembly" },
      { k: "Circuit Count", v: "Up to 200+ circuits per harness tree" },
      { k: "Standards", v: "IPC/WHMA-A-620 Class 2 & 3" },
      { k: "Connector Types", v: "Molex, TE Connectivity, Deutsch, Amphenol, JST, custom" },
      { k: "Breakout Protection", v: "Tape, heat-shrink, nylon braid, PET expandable, overmold" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–18 business days" },
      { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Drawing Review", desc: "We review your schematic or routing diagram for buildability. DFM comments issued within 24 hours on complex geometries." },
      { n: "02", title: "Board Build", desc: "Custom routing board pinned to your branch lengths, connector locations, and bend radii. Board approved before first unit." },
      { n: "03", title: "Trunk Assembly", desc: "Main trunk conductors cut, stripped, and assembled first. Branch breakout points established per drawing." },
      { n: "04", title: "Branch Routing", desc: "Each branch routed to length, terminated, and sleeved independently before integration into the trunk." },
      { n: "05", title: "Electrical Test", desc: "Dedicated test fixture confirms continuity at every terminal across all branches. Hi-pot available for safety-critical circuits." },
      { n: "06", title: "Inspect & Ship", desc: "Visual inspection per IPC/WHMA-A-620. Labeled, packed, and shipped with COC." },
    ],
    USECASES: [
      { title: "Automotive Body Control", desc: "Multi-branch harnesses for lighting, door modules, and body control units. Complex topologies with 20+ branches are standard scope." },
      { title: "Industrial Machinery", desc: "Control panel trunk harnesses feeding multiple I/O modules, sensors, and actuators across a machine." },
      { title: "Agricultural Equipment", desc: "Heavy-duty multi-branch harnesses routed through chassis with sealed connectors at each branch terminus." },
      { title: "Robotics Systems", desc: "Multi-circuit trunk harnesses distributing power and signal to multiple axes, sensors, and end-effectors." },
      { title: "Medical Imaging", desc: "Multi-branch cable trees connecting imaging sensors, motors, and control boards with full traceability." },
      { title: "Defense Platforms", desc: "IPC/WHMA-A-620 Class 3 multi-branch assemblies for vetronics and ground vehicle applications." },
    ],
    relatedPages: [
      { href: "/products/custom-wire-harness", title: "Custom Wire Harness", desc: "Single-trunk build-to-print harnesses from 28 AWG through 2/0 AWG." },
      { href: "/products/high-flex-robotic-harness", title: "High-Flex Robotic Harnesses", desc: "Continuous-flex rated harnesses designed for drag-chain and robotic arm routing." },
      { href: "/products/waterproof-harness", title: "Waterproof Harness", desc: "Add IP67/IP68 sealed connectors and wire seals to any multi-branch design." },
    ],
  },

  'high-flex-robotic-harness': {
    title: "High-Flex Robotic Harnesses",
    metaDesc: "Continuous-flex wire harnesses for robotic arms, drag chains, and high-cycle automation. 10M+ cycle rated, built to your spec.",
    quickAnswer: "High-cycle flex harnesses rated for 10M+ bend cycles. Built for drag chains, robotic arms, and gantry systems. Custom routing and connector selection.",
    cat: "Wire Harness",
    heroH: ["High-Flex.", "High-Cycle."],
    heroDesc: "Wire harnesses engineered for continuous-flex applications: drag chains, robotic arm cables, servo umbilicals, and gantry feeders. Material selection and construction optimized for mechanical longevity.",
    stats: [["10M+", "Bend Cycles"], ["360°", "Flex Routing"], ["100%", "Elec. Tested"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Makes a Harness High-Flex",
    ovH: "Construction Determines Cycle Life. Material Selection Is the Work.",
    ovP1: "A standard wire harness will fail in a high-cycle flex application within months. Conductor fatigue, insulation cracking, and connector fretting are the failure modes. We prevent them by selecting fine-stranded or rope-lay conductors, high-flex insulation materials (TPE, PUR, silicone), and connectors with proven fretting resistance. The result is a harness rated for the mechanical envelope of your machine, not a generic standard.",
    ovP2: "We build high-flex harnesses for drag-chain systems, robotic arm umbilicals, servo cable assemblies, and gantry feeder cables. If your application requires EMI shielding on top of high-flex construction — as is common in servo and encoder applications — we build the shielded construction into the same assembly program.",
    CAPS: [
      { title: "Fine-Stranded Conductors", desc: "Rope-lay and fine-stranded copper conductors selected for flex cycle life. Gauge and strand count specified per your flex radius and cycle requirement." },
      { title: "High-Flex Insulation", desc: "TPE, PUR, and silicone insulation options for continuous-flex environments. Material selected per operating temperature and chemical exposure." },
      { title: "Drag-Chain Configuration", desc: "Harnesses configured for controlled lay and fixed-end bend radius per your drag-chain spec. No loose conductors, no random loops." },
      { title: "EMI Shielding Integration", desc: "Braided shield, spiral shield, or foil-braid constructions integrated into the flex harness where EMI immunity is required." },
      { title: "Connector Fretting Resistance", desc: "Connector series and contact plating selected for resistance to fretting corrosion in high-vibration, high-cycle environments." },
      { title: "Cycle Testing", desc: "Flex cycle endurance testing available. Test radius and cycle count per your spec or published conductor datasheet limits." },
    ],
    SPECS: [
      { k: "Wire Gauge Range", v: "28 AWG to 10 AWG" },
      { k: "Conductor Type", v: "Fine-stranded (Class 5/6), rope-lay copper" },
      { k: "Insulation", v: "TPE, PUR, silicone, PTFE" },
      { k: "Bend Radius", v: "As low as 5× OD for continuous-flex" },
      { k: "Shielding", v: "Braided, spiral, foil-braid, or unshielded" },
      { k: "Connector Series", v: "Molex, TE Connectivity, Amphenol, Lemo, M12, M8" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–18 business days" },
      { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Flex Profile Review", desc: "We review your bend radius, cycle count, speed, and routing path. Material recommendations issued with the quote." },
      { n: "02", title: "Conductor Selection", desc: "Fine-stranded or rope-lay conductors specified per flex demand. Insulation and jacket material locked to your environment." },
      { n: "03", title: "Assembly", desc: "Harness assembled with attention to lay direction, bundle geometry, and fixed-end configuration for drag-chain routing." },
      { n: "04", title: "Shield Termination", desc: "Shield braid or foil terminated per drawing — drain wire, backshell clamp, or 360° crimp ring as specified." },
      { n: "05", title: "Electrical Test", desc: "Continuity and isolation confirmed on every unit. Shield continuity and resistance tested separately where specified." },
      { n: "06", title: "Marking & Ship", desc: "Cable marked per your drawing. Packed to prevent kinking during transit. COC included." },
    ],
    USECASES: [
      { title: "Robotic Arm Umbilicals", desc: "6-axis and SCARA robot cable bundles routed through the arm body. Material and geometry engineered to the arm's full motion envelope." },
      { title: "Drag Chain Cables", desc: "Energy chain harnesses for linear axes, gantries, and transfer systems. Fixed-end and moving-end configuration built per chain spec." },
      { title: "Servo & Encoder Cables", desc: "Power and feedback cables for servo drives. Shielded constructions with connectors selected for fretting resistance at the motor termination." },
      { title: "Collaborative Robots", desc: "Lightweight, flexible harnesses for cobot joints and tool changers. Space-constrained routing and low-outgassing materials available." },
      { title: "Semiconductor Equipment", desc: "High-cycle flex harnesses for wafer handling, probing, and pick-and-place equipment in cleanroom environments." },
      { title: "Medical Robotics", desc: "Sterilizable and autoclave-resistant flex harnesses for surgical robots and diagnostic automation." },
    ],
    relatedPages: [
      { href: "/products/custom-wire-harness", title: "Custom Wire Harness", desc: "Standard wire harnesses for non-flex applications." },
      { href: "/products/multi-branch-harness", title: "Multi-Branch Wire Harnesses", desc: "Complex branch topology harnesses for distribution networks." },
      { href: "/products/shielded-hermetic", title: "Shielded / Hermetic", desc: "Shielded cable assemblies for EMI-sensitive robotic applications." },
    ],
  },

  'control-panel-wiring': {
    title: "Control Panel Wiring Assemblies",
    metaDesc: "Custom control panel wiring assemblies and machine wiring harnesses. Built to your panel layout, ladder diagram, or schematic. IPC/WHMA-A-620 production.",
    quickAnswer: "Control panel wiring harnesses and inter-panel cable assemblies built to your schematic or layout drawing. Labeled, dressed, and ready to install.",
    cat: "Wire Harness",
    heroH: ["Panel-Ready.", "Install-Ready."],
    heroDesc: "We build control panel wiring assemblies — from single wire bundles to full inter-panel harness sets — per your layout drawing or schematic. Every wire labeled, every terminal torqued, ready to bolt in.",
    stats: [["1", "Unit Min"], ["100%", "Labeled"], ["100%", "Elec. Tested"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Control Panel Wiring Means",
    ovH: "Wired to Your Diagram. Labeled. Ready to Install.",
    ovP1: "Control panel wiring assemblies are not generic harnesses — they are built to the specific layout, wire gauge, ferrule type, and terminal block assignment shown in your panel drawing or ladder diagram. Every wire is cut to length, ferrule-crimped or ring-terminated, labeled with your wire number scheme, and dressed per your routing specification.",
    ovP2: "We supply finished wiring assemblies for new panel builds, retrofit programs, and panel replication projects. If you need the same panel wired repeatedly — across a machine build program or a field replacement stock program — we produce consistent, labeled assemblies to your standard.",
    CAPS: [
      { title: "Ferrule & Ring Termination", desc: "End-sleeve ferrules, ring terminals, fork terminals, and blade terminals crimped to your torque and pull-force specification." },
      { title: "Wire Labeling", desc: "Heat-shrink printed labels, pre-printed sleeves, or wire markers applied per your numbering scheme — NEMA, IEC, or custom." },
      { title: "DIN Rail & Terminal Block Termination", desc: "Wires terminated directly to DIN rail terminal blocks per your panel layout. Block type and pitch matched to your BOM." },
      { title: "Conduit & Duct Routing", desc: "Wire bundles dressed through cable duct, conduit, or spiral wrap per panel layout. Tie-wrap and strain-relief positions per drawing." },
      { title: "Inter-Panel Cable Assemblies", desc: "Multi-conductor cables and harnesses connecting separate panels or control enclosures. Connectors, glands, and conduit as specified." },
      { title: "Documentation Package", desc: "Wire list, COC, and point-to-point test report included. As-built drawing available on request." },
    ],
    SPECS: [
      { k: "Wire Gauge Range", v: "22 AWG to 4/0 AWG" },
      { k: "Insulation", v: "THHN, MTW, SIS, XLPE, PVC" },
      { k: "Standards", v: "IPC/WHMA-A-620, NFPA 79, UL 508A awareness" },
      { k: "Termination Types", v: "Ferrule, ring, fork, blade, direct terminal block" },
      { k: "Labeling", v: "Heat-shrink printed, pre-printed sleeve, wrap-around marker" },
      { k: "Connector Options", v: "Amp CPC, Deutsch, Molex, custom gland/conduit fitting" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 7–21 business days" },
      { k: "MOQ", v: "1 panel set · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Drawing Intake", desc: "Panel layout, ladder diagram, and wire list received. DFM review confirms gauge sizing, ferrule selection, and label format." },
      { n: "02", title: "Material Kitting", desc: "Wire, ferrules, terminals, labels, duct, and connectors kitted per BOM. No substitutions without written approval." },
      { n: "03", title: "Cut & Label", desc: "Wires cut to length and labeled per your scheme before assembly. Print verification step confirms every label against wire list." },
      { n: "04", title: "Terminate & Dress", desc: "Ferrules and terminals crimped, wires routed through duct and conduit, dressed and tied per panel layout drawing." },
      { n: "05", title: "Point-to-Point Test", desc: "Every wire continuity verified against the wire list. Resistance and isolation spot-checked per your spec." },
      { n: "06", title: "Pack & Ship", desc: "Assemblies packed flat or on a carrier to prevent label damage. Wire list and COC included in shipment." },
    ],
    USECASES: [
      { title: "Machine Tool Controls", desc: "Control panel wiring for CNC machines, presses, and assembly equipment. Built to NFPA 79 and UL 508A panel standards." },
      { title: "Process Automation", desc: "PLC and DCS panel wiring for process control applications. Termination to terminal blocks, I/O modules, and field devices." },
      { title: "Motor Control Centers", desc: "MCC wiring assemblies for motor starter and VFD panels. Heavy gauge power wiring with labeled and tested inter-panel cables." },
      { title: "OEM Equipment", desc: "Repeatable panel wiring kits for OEM machine builders. Same labeled assembly every unit — eliminates per-panel field wiring variability." },
      { title: "Field Retrofit", desc: "Replacement wiring assemblies for panel retrofits. Matched to original wire list with updated labels and modern ferrule termination." },
      { title: "Custom Enclosures", desc: "Wiring harnesses for custom enclosure builds including NEMA 4X, IP66, and explosion-proof applications." },
    ],
    relatedPages: [
      { href: "/products/custom-wire-harness", title: "Custom Wire Harness", desc: "Standard wire harnesses for chassis and equipment wiring." },
      { href: "/products/multi-branch-harness", title: "Multi-Branch Wire Harnesses", desc: "Complex multi-drop harnesses for distribution from a single trunk." },
      { href: "/products/electromechanical", title: "Electromechanical Assemblies", desc: "Complete electromechanical assemblies including wiring, hardware, and housings." },
    ],
  },

  'usb-overmolded': {
    title: "USB Overmolded Cable Assemblies",
    metaDesc: "Custom USB-A, USB-B, USB-C and Micro-USB overmolded cable assemblies. Any length, custom colors, strain relief overmolding. Production quantities.",
    quickAnswer: "USB-A, USB-B, USB-C, and Micro-USB overmolded cable assemblies. Custom lengths, colors, and strain relief shapes. Certified USB 2.0 and USB 3.x constructions.",
    cat: "Overmolded Cable Assembly",
    heroH: ["USB.", "Overmolded."],
    heroDesc: "Custom USB cable assemblies with overmolded strain relief connectors. Any connector combination, any length, any color. USB 2.0, USB 3.x, and USB4 constructions available.",
    stats: [["USB 2/3/4", "Certified"], ["Custom", "Length & Color"], ["IP54+", "Rated Options"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What USB Overmolding Adds",
    ovH: "Strain Relief That Lasts the Product Life.",
    ovP1: "Injection-molded overmolding encapsulates the connector body and cable transition in a single elastomer part, eliminating the mechanical weak point at the cable entry. The result is a USB cable that can withstand repeated bending, pulling, and twisting at the connector end — the failure mode that kills standard terminated cables. Overmolded USB assemblies are specified wherever the cable is a user-accessible part of a product.",
    ovP2: "We build USB-A, USB-B, USB-B mini, USB-B micro, and USB-C overmolded assemblies in any combination. Cable shielding, twisted-pair data conductors, and power conductor gauges are selected per the USB standard revision. Custom overmold colors, printed branding, and cable sleeve colors are available for OEM product integration.",
    CAPS: [
      { title: "All USB Connector Types", desc: "USB-A (Standard, Flat), USB-B, Micro-B, Mini-B, USB-C (2.0, 3.1, 3.2, Gen 2). Any connector combination on a single cable." },
      { title: "Custom Overmold Shape", desc: "Straight, right-angle, and angled overmold geometries. Boot length, diameter, and durometer specified per application." },
      { title: "Cable Construction", desc: "USB 2.0 (data pair + power), USB 3.x (additional SuperSpeed pair sets), and USB4 constructions with proper impedance and shielding." },
      { title: "Custom Color & Branding", desc: "Overmold color matched to Pantone or RAL specification. Printed logo or text molded into boot surface available on production quantities." },
      { title: "Certification Compliance", desc: "USB-IF compliant constructions. Cable impedance, capacitance, and insertion loss tested per USB specification." },
      { title: "Strain Relief Geometry", desc: "Tapered, reinforced, and spring-reinforced strain relief designs available. Boot flexibility matched to application cycle life." },
    ],
    SPECS: [
      { k: "Connector Types", v: "USB-A, USB-B, Micro-B, Mini-B, USB-C (2.0/3.1/3.2/Gen2)" },
      { k: "Data Speeds", v: "USB 2.0 (480 Mbps) to USB4 (40 Gbps)" },
      { k: "Cable OD", v: "3.5 mm to 7 mm depending on standard and power rating" },
      { k: "Overmold Material", v: "TPE, PVC, TPU, silicone" },
      { k: "Color Options", v: "Black, white, grey, and custom Pantone/RAL match" },
      { k: "Length Range", v: "0.3 m to 5 m standard · custom on request" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
      { k: "MOQ", v: "50 units prototype · 250 units production" },
    ],
    PROCESS: [
      { n: "01", title: "Spec Review", desc: "USB standard version, connector types, length, and color specified. DFM review flags impedance or shielding concerns." },
      { n: "02", title: "Cable Prep", desc: "Cable cut to length, stripped, and conductors prepared per USB standard. Shielding dressed and terminated to connector body." },
      { n: "03", title: "Connector Termination", desc: "Contacts crimped and inserted into connector housing. Solder cup or SMT termination per connector design." },
      { n: "04", title: "Overmold Injection", desc: "Connector body and cable transition encapsulated in single-shot TPE overmold. Full encapsulation with no parting line gaps." },
      { n: "05", title: "Electrical Test", desc: "Continuity, USB enumeration test, and insertion loss verification per USB specification." },
      { n: "06", title: "Pack & Ship", desc: "Assembled in poly bags or retail packaging. Individual labels with part number and date code. COC included." },
    ],
    USECASES: [
      { title: "Consumer Electronics", desc: "Charging and data cables for smartphones, tablets, and wearables. OEM color and branding integration available." },
      { title: "Medical Devices", desc: "USB cables for patient monitoring, diagnostic imaging, and powered medical equipment. Biocompatible overmold materials available." },
      { title: "Industrial HMI", desc: "USB cables for HMI panels, barcode scanners, and industrial computers. Rugged construction for plant-floor environments." },
      { title: "Test & Measurement", desc: "USB interface cables for lab instruments and data acquisition systems. Shielded constructions for EMI-sensitive environments." },
      { title: "POS & Kiosk Systems", desc: "High-cycle USB cables for point-of-sale terminals and public-access kiosks. Reinforced strain relief for repeated connect/disconnect cycles." },
      { title: "Audio & AV Equipment", desc: "USB-C and USB-A cables for studio audio interfaces, mixing boards, and AV equipment." },
    ],
    relatedPages: [
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "Multi-conductor overmolded wire harnesses for any connector family." },
      { href: "/products/circular-connector", title: "Circular Connector Assemblies", desc: "M8, M12, and circular overmolded connector assemblies for industrial use." },
      { href: "/products/strain-relief-molding", title: "Custom Strain Relief Molding", desc: "Custom overmold strain relief design and production for any cable assembly." },
    ],
  },

  'circular-connector': {
    title: "Circular Connector Cable Assemblies",
    metaDesc: "Custom circular connector cable assemblies: M8, M12, MIL-DTL-38999, Amphenol, Lemo, Fischer, and more. Overmolded and standard termination.",
    quickAnswer: "M8, M12, MIL-spec, and custom circular connector cable assemblies. Overmolded or backshell termination. Any pin count, coding, and contact configuration.",
    cat: "Overmolded Cable Assembly",
    heroH: ["Circular.", "Precision."],
    heroDesc: "Circular connector cable assemblies for industrial, defense, and medical applications. M8, M12, MIL-DTL-38999, Lemo, Fischer, Amphenol, and custom circular families. Overmolded or backshell.",
    stats: [["M8 to 127mm", "Shell Sizes"], ["IP67/IP68", "Rated"], ["100%", "Tested"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "Why Circular Connectors Demand Precision",
    ovH: "Contact Count and IP Rating Are Set at Assembly Time.",
    ovP1: "Circular connector assemblies are defined by two parameters that cannot be corrected after assembly: contact arrangement and environmental sealing. Every contact must be correctly crimped and inserted in the precise cavity position — a single transposed contact causes a field failure. Every seal must be properly seated for the IP rating to hold. Our production process treats these as zero-defect requirements with 100% verification.",
    ovP2: "We build assemblies across the full circular connector family: M8 and M12 (A, B, D, X, S coding) for industrial sensors and actuators; MIL-DTL-38999 Series I–IV for aerospace and defense; Lemo and Fischer for medical and instrumentation; Amphenol PT and MS circular for industrial and military. Overmolded strain relief or machined metal backshell per application.",
    CAPS: [
      { title: "Full Circular Connector Families", desc: "M8, M12, MIL-DTL-38999 Series I–IV, Amphenol PT, Lemo, Fischer, and custom shell sizes. Any pin count and contact arrangement." },
      { title: "Precision Contact Insertion", desc: "Every contact crimped per connector manufacturer specification and inserted into the correct cavity position. Insertion verified with a go/no-go probe." },
      { title: "IP67/IP68 Sealing", desc: "O-ring face seals, wire seals, and back-potting completed per connector IP rating requirement. No seal omissions." },
      { title: "Overmolded Strain Relief", desc: "Single-shot TPE or PUR overmold encapsulating backshell and cable for rugged field applications." },
      { title: "Metal Backshell Termination", desc: "Machined or cast metal backshell assembly with cable clamp, EMI braid termination, and jackscrew or bayonet coupling." },
      { title: "100% Contact Test", desc: "Every assembly tested for continuity at every contact, insertion force, and environmental seal integrity." },
    ],
    SPECS: [
      { k: "Connector Families", v: "M8, M12, MIL-DTL-38999 (Series I–IV), Amphenol PT, Lemo, Fischer" },
      { k: "Contact Count", v: "2 to 128 contacts per connector" },
      { k: "Contact Types", v: "Crimp, solder, press-fit" },
      { k: "IP Rating", v: "IP67, IP68, IP69K available" },
      { k: "Shell Material", v: "Zinc alloy, stainless steel, aluminium, composite" },
      { k: "Cable Types", v: "Multi-conductor, shielded, high-flex, armored" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
      { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Connector & Contact Spec", desc: "Connector family, pin count, coding, and contact size confirmed. Contact crimp tooling verified before first article." },
      { n: "02", title: "Cable Prep", desc: "Cable stripped to length, conductors dressed, and shield prepared per connector and environmental requirement." },
      { n: "03", title: "Contact Crimp & Insert", desc: "Contacts crimped per manufacturer spec and inserted per cavity assignment. Every cavity position verified with probe." },
      { n: "04", title: "Seal & Backshell", desc: "Wire seals and O-rings installed. Backshell or overmold applied and torqued or cured per spec." },
      { n: "05", title: "Electrical & IP Test", desc: "Continuity at all contacts, resistance, and environmental seal inspection. IP pressure test on sealed assemblies." },
      { n: "06", title: "Label & Ship", desc: "Part number label, lot code, and COC included. Connector mating caps fitted to protect seals in transit." },
    ],
    USECASES: [
      { title: "Factory Automation", desc: "M8 and M12 sensor cables, actuator cables, and fieldbus assemblies for production line automation equipment." },
      { title: "Aerospace & Defense", desc: "MIL-DTL-38999 assemblies for avionics, vetronics, and ground support equipment. Class 3 IPC/WHMA-A-620 production." },
      { title: "Medical Equipment", desc: "Lemo and Fischer circular assemblies for surgical instruments, imaging systems, and diagnostic devices." },
      { title: "Oil & Gas", desc: "IP68 circular connector assemblies for subsea, downhole, and wellhead instrumentation." },
      { title: "Mobile Equipment", desc: "Heavy-duty circular connectors for off-highway vehicles, construction machinery, and agricultural equipment." },
      { title: "Test & Measurement", desc: "Precision circular connector assemblies for test fixtures, environmental chambers, and measurement instrumentation." },
    ],
    relatedPages: [
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "General overmolded wire harnesses for any connector family." },
      { href: "/products/waterproof-harness", title: "Waterproof Harness", desc: "Sealed wire harnesses for outdoor and washdown environments." },
      { href: "/products/medical-cable-assemblies", title: "Medical Cable Assemblies", desc: "Medical-grade cable assemblies with biocompatible materials." },
    ],
  },

  'strain-relief-molding': {
    title: "Custom Strain Relief Molding",
    metaDesc: "Custom injection-molded strain relief for cable assemblies and connectors. TPE, PUR, silicone overmolding in any color, shape, and durometer.",
    quickAnswer: "Custom injection-molded strain relief in TPE, PUR, or silicone. Any color, durometer, and geometry. Prototyping and production tooling.",
    cat: "Overmolded Cable Assembly",
    heroH: ["Custom Strain Relief.", "Precision Mold."],
    heroDesc: "Custom injection-molded strain relief for cable-to-connector transitions. Any shape, color, and elastomer durometer. Rapid-prototype tooling and production runs.",
    stats: [["TPE / PUR / Silicone", "Materials"], ["Custom", "Color & Shape"], ["IP54+", "Achievable"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Custom Strain Relief Adds",
    ovH: "The Transition Zone Is Where Cables Fail.",
    ovP1: "The cable-to-connector interface is the highest mechanical stress point in any cable assembly. Without adequate strain relief, repeated bending concentrates at that point and causes conductor fatigue, insulation cracking, and connector body fracture. A properly designed overmolded strain relief distributes the bend radius across a graduated taper, protecting the cable for the full design life of the product.",
    // Old: ovP2: "We design and produce custom strain relief overmolds to your dimensional and material specification. Rapid prototype tooling delivers first parts in 5–7 business days. Production tooling amortizes over volume runs. Material selection — TPE durometer, PUR hardness, or silicone grade — is matched to your flex requirement, operating temperature, and chemical exposure.",
    ovP2: "We design and produce custom strain relief overmolds to your dimensional and material specification. Rapid prototype tooling delivers first parts in 2–3 weeks. Production tooling amortizes over volume runs. Material selection — TPE durometer, PUR hardness, or silicone grade — is matched to your flex requirement, operating temperature, and chemical exposure.",
    CAPS: [
      { title: "Material Engineering", desc: "TPE, PUR, silicone, and PVC overmold materials. Durometer selected per flex requirement — 40A for soft strain relief, 85A for rigid protection." },
      // Old: { title: "Rapid Prototype Tooling", desc: "Aluminum prototype tools deliver first molded samples in 5–7 business days. Tool path machined directly from your 3D model." },
      { title: "Rapid Prototype Tooling", desc: "Aluminum prototype tools deliver first molded samples in 2–3 weeks. Tool path machined directly from your 3D model." },
      { title: "Production Tooling", desc: "Steel production molds for high-volume programs. Multi-cavity tools available for cost reduction at volume." },
      { title: "Custom Color Matching", desc: "Overmold color matched to Pantone, RAL, or physical sample. Color consistency maintained within ΔE 2.0 run-to-run." },
      { title: "Insert Molding", desc: "Metal inserts, threaded bushings, and locating features molded directly into the strain relief body." },
      { title: "Over-Connector Molding", desc: "Overmolding directly over the connector body and cable jacket in a single shot. No separate boot component to assemble." },
    ],
    SPECS: [
      { k: "Overmold Materials", v: "TPE (40A–90A), PUR (70A–95A), silicone, PVC" },
      { k: "Colors", v: "Any Pantone or RAL — black, grey, and white are same-day" },
      { k: "Mold Accuracy", v: "±0.1 mm on prototype tooling, ±0.05 mm production" },
      { k: "Min. Wall Thickness", v: "1.5 mm" },
      { k: "Cable OD Range", v: "2 mm to 30 mm" },
      { k: "Insert Types", v: "Brass inserts, stainless bushings, locating pins" },
      // Old: { k: "Prototype Lead Time", v: "5–7 business days (aluminum tool)" },
      { k: "Prototype Lead Time", v: "2–3 weeks (aluminum tool)" },
      { k: "Production MOQ", v: "250 units with production tooling" },
    ],
    PROCESS: [
      { n: "01", title: "Design Review", desc: "3D model or drawing reviewed for moldability. Draft angles, wall thickness, and parting line confirmed." },
      { n: "02", title: "Tooling", desc: "Prototype aluminum tool or production steel tool machined. Tool approval sample submitted before production." },
      { n: "03", title: "Material Trial", desc: "First shots molded in specified material and color. Dimensional and hardness verification against drawing." },
      { n: "04", title: "Cable Prep & Insert", desc: "Cable assembly prepared and positioned in tool before overmold shot. Cable anchor position verified." },
      { n: "05", title: "Overmold Shot", desc: "Elastomer injected at controlled pressure and temperature. Full encapsulation with no voids at the cable transition." },
      { n: "06", title: "Inspect & Ship", desc: "Visual inspection and pull test on every unit. COC and dimensional report included on first articles." },
    ],
    USECASES: [
      { title: "Consumer Products", desc: "Strain relief molding for charging cables, headphone cables, and power adapters. Soft-touch TPE for hand-held products." },
      { title: "Medical Devices", desc: "Custom strain relief for medical cable assemblies. Biocompatible materials available. Cleanroom molding for critical applications." },
      { title: "Industrial Equipment", desc: "Heavy-duty PUR strain relief for plant floor cables. Resistant to cutting oil, coolant, and mechanical abuse." },
      { title: "Aerospace & Defense", desc: "Low-outgassing silicone overmolds for aerospace connector strain relief. MIL-spec material alternatives available." },
      { title: "Automotive", desc: "High-temperature strain relief for underhood cable assemblies. Material selected for 125°C+ continuous exposure." },
      { title: "OEM Branding", desc: "Custom-colored and logo-branded strain reliefs for OEM product integration. Turnkey mold and assembly programs." },
    ],
    relatedPages: [
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "Complete overmolded wire harness assemblies with custom strain relief." },
      { href: "/products/multi-shot-molded", title: "Multi-Shot Molded Cable", desc: "Two-shot and multi-material overmolding for complex cable assemblies." },
      { href: "/products/connector-molding", title: "Connector Molding Services", desc: "Custom connector overmolding and insert molding services." },
    ],
  },

  'multi-shot-molded': {
    title: "Multi-Shot Molded Cable Assemblies",
    metaDesc: "Two-shot and multi-shot injection molded cable assemblies. Hard/soft overmolding, co-injection, and sequential overmold programs for complex cable designs.",
    quickAnswer: "Two-shot and multi-shot overmolded cable assemblies. Hard outer shell + soft inner strain relief. Sequential overmolding for complex geometries.",
    cat: "Overmolded Cable Assembly",
    heroH: ["Multi-Shot.", "One Assembly."],
    heroDesc: "Two-shot and multi-shot injection molded cable assemblies. Combine hard structural overmold with soft strain relief in a single part — no bonding, no assembly steps.",
    stats: [["2+ Shot", "Capability"], ["Bi-material", "Construction"], ["IP67+", "Achievable"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Multi-Shot Molding Adds",
    ovH: "Two Materials. One Mold. One Assembly.",
    ovP1: "Multi-shot injection molding combines two or more materials in sequential mold shots without removing the part between shots. The result is a single overmolded part with material properties that cannot be achieved in a single shot: a rigid ABS or PA outer shell providing structural support with a soft TPE inner layer providing strain relief and grip. This eliminates secondary bonding operations and produces a part with better material adhesion and tighter tolerances.",
    ovP2: "We build two-shot overmolded cable assemblies for applications where single-material overmolds cannot meet both structural and flex requirements. Common combinations include rigid PC/ABS outer with TPE strain relief, UV-stable outer with soft-touch inner, and dual-durometer constructions for industrial cable grips and medical hand-pieces.",
    CAPS: [
      { title: "Two-Shot Tooling", desc: "Rotating-core two-shot molds for sequential overmolding. First-shot core removed and second-shot material injected without demolding the part." },
      { title: "Bi-Material Combinations", desc: "ABS+TPE, PC+TPE, PA+TPU, and custom material pairs. Material adhesion validated before production tooling commit." },
      { title: "Over-Connector Molding", desc: "Multi-shot overmolding directly over connector bodies and cable jackets. Connector geometry incorporated into first-shot tool design." },
      { title: "Color-in-Color", desc: "Inner and outer shot in different colors — no painting, no coating. Color stable for product life." },
      { title: "Insert Molding Integration", desc: "Metal inserts, threaded fasteners, and EMI shielding elements incorporated into multi-shot construction." },
      { title: "Prototype & Production", desc: "Rapid prototype tooling in 7–10 business days. Production steel tooling with multi-cavity for volume programs." },
    ],
    SPECS: [
      { k: "Shot Count", v: "2-shot standard · 3-shot on request" },
      { k: "First Shot Materials", v: "ABS, PC, PA, PC/ABS, PP" },
      { k: "Second Shot Materials", v: "TPE, TPU, silicone, PUR" },
      { k: "Part Accuracy", v: "±0.15 mm on prototype · ±0.08 mm production" },
      { k: "Cable OD Range", v: "3 mm to 25 mm" },
      { k: "Color Matching", v: "Per Pantone or RAL for each shot" },
      { k: "Prototype Lead Time", v: "7–10 business days" },
      { k: "Production MOQ", v: "500 units" },
    ],
    PROCESS: [
      { n: "01", title: "Design Review", desc: "Two-shot moldability review — draft, parting line, first-shot geometry, and bond line confirmed for both materials." },
      { n: "02", title: "First-Shot Tool", desc: "First-shot aluminum or steel tool machined. First-shot samples approved before second-shot tool commitment." },
      { n: "03", title: "Second-Shot Tool", desc: "Second-shot cavity designed around approved first-shot geometry. Tool approval sample submitted." },
      { n: "04", title: "Cable Prep & Insert", desc: "Cable assembly prepared and positioned in first-shot tool. Conductor and connector anchor locations set." },
      { n: "05", title: "Sequential Overmold", desc: "First shot molded, part transferred to second-shot position, second material injected. Bond line integrity checked." },
      { n: "06", title: "Test & Ship", desc: "Pull test, dimensional check, and visual inspection on every assembly. COC and FAI report included." },
    ],
    USECASES: [
      { title: "Medical Hand-Pieces", desc: "Dual-durometer overmolding for surgical and diagnostic hand-pieces. Rigid outer structure with soft ergonomic grip zone." },
      { title: "Consumer Electronics", desc: "Two-shot cable connectors with hard outer housing and soft strain relief. No separate boot required." },
      { title: "Industrial Controls", desc: "Cable grips and push-button connectors with hard protective shell and soft operator grip surface." },
      { title: "Automotive Charging", desc: "EV charging connector overmolds with UV-stable outer and soft TPE grip and strain relief." },
      { title: "Power Tools", desc: "Cable entry overmolds for power tools combining rigid strain relief support with vibration-damping inner layer." },
      { title: "Marine & Outdoor", desc: "UV-stable outer shell with sealed inner for marine and outdoor cable assemblies requiring IP68 rating." },
    ],
    relatedPages: [
      { href: "/products/strain-relief-molding", title: "Custom Strain Relief Molding", desc: "Single-shot overmold strain relief for cable assemblies." },
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "Standard single-shot overmolded wire harness assemblies." },
      { href: "/products/connector-molding", title: "Connector Molding Services", desc: "Custom connector overmolding and insert molding services." },
    ],
  },

  'coil-spiral-cable': {
    title: "Coil / Spiral Cable Solutions",
    metaDesc: "Custom coiled and spiral cable assemblies. Any coil OD, extended length, and retraction ratio. PUR, TPE, and PVC jacket materials.",
    quickAnswer: "Custom coiled cable assemblies in PUR, TPE, or PVC. Any retracted/extended length ratio, coil OD, and connector type. High-cycle flex rated.",
    cat: "Cable Assembly",
    heroH: ["Coiled.", "Retractable."],
    heroDesc: "Custom coiled and spiral cable assemblies for applications requiring retractable reach: handheld tools, handsets, service loops, and cable management. Any length, any connector.",
    stats: [["Custom Ratio", "Retract/Extend"], ["PUR/TPE/PVC", "Materials"], ["High-Cycle", "Flex Rated"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Makes a Coiled Cable Different",
    ovH: "Coil Geometry and Memory Are Material Properties.",
    ovP1: "A coiled cable is not a standard cable wound around a form. The coil geometry — pitch, diameter, and retraction memory — is set during a heat-forming process applied to a cable with the correct base material and wall thickness. PUR is the preferred jacket material for coiled cables because its elastic memory allows reliable retraction to the free state. TPE and PVC coils are also available where cost or chemical resistance is the primary driver.",
    ovP2: "We build coiled cable assemblies from 2-conductor power cables to 25-conductor data and signal cables with shielding. Connector types range from straight entry to overmolded right-angle boots. Custom coil diameter, retracted length, extended length, and hang length (leads at each end) are all specified to your drawing.",
    CAPS: [
      { title: "PUR, TPE & PVC Coiling", desc: "Primary jacket material selected per coil memory, flex cycle, operating temperature, and chemical resistance requirement." },
      { title: "Custom Coil Geometry", desc: "Coil OD, pitch, retracted length, extended length, and lead length specified to your drawing. Geometry stable over service life." },
      { title: "Multi-Conductor & Shielded", desc: "2 to 25+ conductors in a single coiled cable. Braided, spiral, or foil-braid shielding available within the coil construction." },
      { title: "Overmolded Connectors", desc: "Straight and right-angle overmolded strain relief on both ends. Connector family matched to application." },
      { title: "High-Cycle Flex Rating", desc: "PUR coil constructions rated for 500,000+ retract/extend cycles. Test data available on standard cable constructions." },
      { title: "Custom Color & Marking", desc: "Jacket color in any standard or custom color. Printed cable marking available on straight lead sections." },
    ],
    SPECS: [
      { k: "Jacket Material", v: "PUR (preferred), TPE, PVC" },
      { k: "Conductor Count", v: "2 to 25 conductors" },
      { k: "Wire Gauge Range", v: "28 AWG to 14 AWG" },
      { k: "Retracted Length", v: "0.15 m to 1.5 m" },
      { k: "Extended Length", v: "0.5 m to 5 m (3:1 to 4:1 ratio typical)" },
      { k: "Coil OD", v: "25 mm to 90 mm" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
      { k: "MOQ", v: "25 units prototype · 100 units production" },
    ],
    PROCESS: [
      { n: "01", title: "Coil Spec Review", desc: "Retracted length, extended length, coil OD, and connector types confirmed. Material selected per flex and temperature requirement." },
      { n: "02", title: "Cable Prep", desc: "Straight cable cut to process length and stripped at both ends. Conductors labeled per drawing." },
      { n: "03", title: "Connector Termination", desc: "Connectors terminated on both ends of the straight cable before coiling." },
      { n: "04", title: "Coil Forming", desc: "Cable wound on mandrel to specified OD and pitch, heat-set in oven at controlled temperature and duration." },
      { n: "05", title: "Dimensional Check", desc: "Retracted length, extended length, coil OD, and lead lengths verified against drawing tolerance." },
      { n: "06", title: "Electrical Test & Ship", desc: "Continuity and isolation test on every unit. COC included. Packed in coil orientation to maintain memory." },
    ],
    USECASES: [
      { title: "Handheld Tools & Scanners", desc: "Coiled cables for barcode scanners, portable test equipment, and handheld industrial tools. Extends to reach, retracts to store." },
      { title: "Vehicle & Truck Equipment", desc: "Coiled power and signal cables for truck-mounted equipment, trailers, and service connections." },
      { title: "Telephone & Communication", desc: "Coiled handset cords and coiled communication cables for headsets and panel-mount phones." },
      { title: "Service Loops", desc: "Machine coiled service loops providing controlled cable management with flex for maintenance access." },
      { title: "Safety Equipment", desc: "Coiled cables for fall arrest systems, safety lanyard sensors, and equipment tethering." },
      { title: "Medical Equipment", desc: "Coiled cables for diagnostic probes and handheld medical devices. Biocompatible PUR options available." },
    ],
    relatedPages: [
      { href: "/products/cable-assembly", title: "Cable Assembly Overview", desc: "Full range of cable assembly types and constructions." },
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "Overmolded connector terminations for coiled cable ends." },
      { href: "/products/high-flex-robotic-harness", title: "High-Flex Robotic Harnesses", desc: "Continuous-flex cable construction for high-cycle automation." },
    ],
  },

  'connector-molding': {
    title: "Connector Molding Services",
    metaDesc: "Custom connector overmolding, insert molding, and potting services. Any connector family, any elastomer, production quantities.",
    quickAnswer: "Custom injection overmolding over any connector body. Strain relief, IP sealing, and branding molded in one shot. Insert molding and potting services also available.",
    cat: "Overmolded Cable Assembly",
    heroH: ["Connector Overmolding.", "Precision Tooling."],
    heroDesc: "Injection overmolding services for connector bodies, cable transitions, and interface assemblies. Any connector family, any elastomer, prototype through production.",
    stats: [["Any Connector", "Family"], ["IP54–IP68", "Achievable"], ["Custom Tooling", "In-House"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Connector Molding Solves",
    ovH: "A Bare Connector Is a Mechanical Failure Waiting to Happen.",
    ovP1: "Bare connector terminations — crimp barrels exposed, cable jacket unsupported — are the weakest points in any wiring harness. Overmolding encapsulates the connector body and cable-to-connector transition in a single elastomer part, providing environmental sealing, strain relief, and mechanical protection. The result is an assembly that looks and performs like an integrated product, not an assembly of parts.",
    ovP2: "We provide connector overmolding as a standalone service for customers who supply finished cable assemblies or bare connector sets requiring overmolding. We also provide insert molding (metal hardware molded directly into the connector body) and potting/backfill services for sealed connector enclosures. Prototype tooling and production tooling available.",
    CAPS: [
      { title: "Over-Connector Overmolding", desc: "TPE, PUR, and silicone overmolding directly over any connector body — circular, rectangular, D-sub, or custom — with cable transition." },
      { title: "Insert Molding", desc: "Brass and stainless steel inserts, threaded bushings, and locking features molded directly into connector overmold bodies." },
      { title: "Potting & Backfill", desc: "Two-part epoxy, polyurethane, and silicone potting of connector enclosures for environmental sealing and vibration resistance." },
      // Old: { title: "In-House Tooling", desc: "Aluminum prototype tools machined in-house for 5–7 day first-article turnaround. Steel production tools for volume programs." },
      { title: "In-House Tooling", desc: "Aluminum prototype tools machined in-house for 2–3 week first-article turnaround. Steel production tools for volume programs." },
      { title: "IP67/IP68 Overmold Design", desc: "Overmold geometry designed to achieve specified IP rating. O-ring grooves, face seals, and wire entry seals integrated into overmold." },
      { title: "High-Volume Production", desc: "Multi-cavity production tools for high-volume connector overmolding. Cycle time optimized for unit cost targets." },
    ],
    SPECS: [
      { k: "Overmold Materials", v: "TPE (40A–90A), PUR, silicone, PVC, epoxy (potting)" },
      { k: "Connector Families", v: "Any — circular, rectangular, D-sub, USB, RJ45, custom" },
      { k: "IP Rating Achievable", v: "IP54 to IP68 depending on connector and overmold design" },
      { k: "Insert Types", v: "Brass inserts M2–M12, stainless bushings, custom" },
      { k: "Color Options", v: "Any Pantone or RAL" },
      // Old: { k: "Prototype Lead Time", v: "5–7 business days (aluminum tool)" },
      { k: "Prototype Lead Time", v: "2–3 weeks (aluminum tool)" },
      { k: "Production MOQ", v: "100 units with production tooling" },
      { k: "Tooling MOQ", v: "500 units to justify production steel tool" },
    ],
    PROCESS: [
      { n: "01", title: "DFM Review", desc: "Connector geometry and overmold design reviewed. Draft angles, parting line, and IP sealing approach confirmed." },
      { n: "02", title: "Tool Design", desc: "Prototype aluminum or production steel tool designed around connector geometry. Tool path NC-machined in-house." },
      { n: "03", title: "First Article", desc: "First molded samples submitted for dimensional, hardness, and IP verification. Approval before production." },
      { n: "04", title: "Cable Insert & Mold", desc: "Cable assembly or connector positioned in tool. Overmold material injected. Full encapsulation verified." },
      { n: "05", title: "Post-Mold Inspection", desc: "Visual, dimensional, and pull-test inspection on every unit. Potted assemblies pressure-tested." },
      { n: "06", title: "Pack & Ship", desc: "Assemblies individually bagged and labeled. COC and dimensional report included." },
    ],
    USECASES: [
      { title: "OEM Product Integration", desc: "Custom-colored and branded connector overmolds for OEM products. Soft-touch and ergonomic geometries." },
      { title: "Industrial Sensors", desc: "M12 and M8 connector overmolding for IP67/IP68 industrial sensor cables." },
      { title: "Medical Devices", desc: "Biocompatible TPE and silicone overmolding for medical connector assemblies. ISO 10993 material traceability." },
      { title: "Automotive", desc: "Connector overmolding for underhood, underfloor, and exterior automotive applications. High-temp materials available." },
      { title: "Defense Systems", desc: "Ruggedized connector overmolds for field equipment. Low-outgassing materials for enclosed environments." },
      { title: "Consumer Electronics", desc: "High-volume connector overmolding for charging cables, audio accessories, and wearables." },
    ],
    relatedPages: [
      { href: "/products/overmolded-harness", title: "Overmolded Harness", desc: "Complete overmolded wire harness assemblies." },
      { href: "/products/strain-relief-molding", title: "Custom Strain Relief Molding", desc: "Custom strain relief design and production." },
      { href: "/products/multi-shot-molded", title: "Multi-Shot Molded Cable", desc: "Two-shot multi-material overmolded cable assemblies." },
    ],
  },

  'pcb-assemblies': {
    title: "PCB Assemblies",
    metaDesc: "PCB assembly services: SMT, through-hole, mixed technology, and cable-to-PCB assemblies. IPC-A-610 Class 2 and Class 3. Prototype and production.",
    quickAnswer: "PCB assembly — SMT, through-hole, and mixed technology. IPC-A-610 Class 2 and Class 3. Prototype through production. Cable-to-PCB integration available.",
    cat: "Advanced Solutions",
    heroH: ["PCB Assembly.", "IPC Class 3."],
    heroDesc: "Printed circuit board assembly services for prototype and production programs. SMT, through-hole, and mixed technology. Full cable-to-PCB integration for electromechanical assemblies.",
    stats: [["IPC-A-610", "Class 2 & 3"], ["SMT + THT", "Mixed Tech"], ["AOI + X-Ray", "Inspection"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What PCB Assembly Means Here",
    ovH: "Board-Level Assembly Integrated Into the Harness Program.",
    ovP1: "We produce PCB assemblies as standalone builds and as components integrated into larger cable and harness programs. When a customer needs a harness that terminates to a PCB — a sensor interface board, a power distribution board, or a signal conditioning board — we build the PCB assembly and the harness as a single integrated program. This eliminates the coordination overhead of managing separate PCB and harness suppliers.",
    ovP2: "Our PCB assembly capability covers SMT (0402 and larger), through-hole, and mixed-technology boards. IPC-A-610 Class 2 is the production default; Class 3 is available for aerospace, defense, and medical programs. AOI and X-ray inspection are in-house. Functional test fixtures available for boards with defined test points.",
    CAPS: [
      { title: "SMT Assembly", desc: "0402 and larger component placement. Lead and lead-free solder paste. Nitrogen reflow available for oxidation-sensitive assemblies." },
      { title: "Through-Hole Assembly", desc: "Manual and selective soldering for through-hole components. Wave solder available for high-volume mixed-technology boards." },
      { title: "AOI Inspection", desc: "Automated optical inspection on all production assemblies. 100% coverage of placed components and solder joints." },
      { title: "X-Ray Inspection", desc: "X-ray inspection for BGA, QFN, and hidden-joint verification. Available on all programs." },
      { title: "Functional Test", desc: "In-circuit test and functional test fixture development available for defined-spec boards. JTAG boundary scan on request." },
      { title: "Cable-to-PCB Integration", desc: "PCB assembly and cable harness built and integrated in the same program. Connector, IDC, or solder termination to board." },
    ],
    SPECS: [
      { k: "Board Size", v: "25 mm × 25 mm to 450 mm × 600 mm" },
      { k: "Layers", v: "1 to 16 layers" },
      { k: "Smallest Component", v: "0402 (SMT) · 0.5 mm pin pitch (THT)" },
      { k: "Solder", v: "SAC305 lead-free · Sn63/Pb37 leaded (on request)" },
      { k: "IPC Standard", v: "IPC-A-610 Class 2 (default) · Class 3 on request" },
      { k: "Inspection", v: "AOI on all boards · X-ray on all BGAs and QFNs" },
      { k: "Prototype Lead Time", v: "5–10 business days" },
      { k: "MOQ", v: "1 board (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Gerber & BOM Review", desc: "Gerber files, BOM, and assembly drawing reviewed. DFM comments issued within 24 hours." },
      { n: "02", title: "Material Kitting", desc: "Components sourced per BOM. All parts verified against AVL before kitting. No unauthorized substitutions." },
      { n: "03", title: "Paste & Place", desc: "Solder paste screen-printed, components placed per pick-and-place program. Placement verified before reflow." },
      { n: "04", title: "Reflow / Solder", desc: "Reflow profile optimized per board thermal mass. Through-hole soldered after reflow on mixed-technology boards." },
      { n: "05", title: "Inspect", desc: "AOI on 100% of assemblies. X-ray on BGA and QFN. Visual IPC-A-610 inspection." },
      { n: "06", title: "Functional Test & Ship", desc: "Functional test per customer spec. COC, test report, and inspection report included." },
    ],
    USECASES: [
      { title: "Electromechanical Assemblies", desc: "PCB assemblies integrated with wire harnesses and mechanical housings for finished electromechanical products." },
      { title: "Industrial Controllers", desc: "Control boards for automation equipment, motor drives, and process control systems." },
      { title: "Medical Devices", desc: "IPC Class 3 PCB assemblies for life-critical medical devices with full lot traceability." },
      { title: "Aerospace & Defense", desc: "Class 3 PCB assemblies for avionics, vetronics, and defense systems. ITAR compliance available." },
      { title: "Sensor Modules", desc: "Small-form-factor sensor boards assembled and integrated into cable harness programs." },
      { title: "Prototype Programs", desc: "1–50 piece prototype PCB assemblies with rapid turnaround for NPI validation programs." },
    ],
    relatedPages: [
      { href: "/products/electromechanical", title: "Electromechanical Assemblies", desc: "Complete electromechanical assemblies integrating PCBs, harnesses, and hardware." },
      { href: "/products/cable-assembly", title: "Cable Assembly Overview", desc: "Cable assemblies to integrate with your PCB." },
      { href: "/products/prototype-npi", title: "Prototype Engineering Services", desc: "NPI and prototype programs with fast-turn PCB and harness builds." },
    ],
  },

  'electromechanical': {
    title: "Electromechanical Assemblies",
    metaDesc: "Electromechanical assembly services: wire harnesses, PCBs, motors, sensors, and mechanical hardware integrated into finished sub-assemblies and full products.",
    quickAnswer: "Complete electromechanical assemblies combining wire harnesses, PCBs, motors, sensors, and mechanical hardware. Box-build, sub-assembly, and finished product integration.",
    cat: "Advanced Solutions",
    heroH: ["Electromechanical.", "Box Build."],
    heroDesc: "We build electromechanical assemblies that combine wire harnesses, PCBs, actuators, sensors, and mechanical hardware into finished sub-assemblies and box-build products.",
    stats: [["Box Build", "Capability"], ["PCB + Harness", "Integrated"], ["100%", "Functionally Tested"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Electromechanical Assembly Means",
    ovH: "One Supplier From Wire Gauge to Finished Product.",
    ovP1: "An electromechanical assembly is any product that combines electrical and mechanical components — typically a wire harness or cable, a PCB or sensor, and a mechanical enclosure or structure — into a finished assembly that can be installed or deployed directly. Sourcing these from separate suppliers creates coordination overhead, mismatched interfaces, and accountability gaps. We integrate them into a single program.",
    ovP2: "Our electromechanical assembly capability covers wire harness fabrication, PCB assembly, mechanical sub-assembly, and final integration. We build to your drawings, BOMs, and assembly instructions. Functional testing at the completed assembly level verifies electrical and mechanical performance before shipment.",
    CAPS: [
      { title: "Wire Harness Integration", desc: "Build-to-print wire harnesses fabricated in-house and integrated directly into the electromechanical assembly." },
      { title: "PCB Assembly", desc: "SMT and through-hole PCB assembly integrated with harness and mechanical components in a single program." },
      { title: "Mechanical Sub-Assembly", desc: "Bracket, enclosure, and hardware sub-assembly. Sheet metal, machined, and molded components from your supply base integrated." },
      { title: "Motor & Actuator Integration", desc: "DC motors, stepper motors, solenoids, and linear actuators wired and integrated per drawing." },
      { title: "Sensor & Transducer Integration", desc: "Pressure, temperature, proximity, and motion sensors wired, calibrated, and integrated per application specification." },
      { title: "Functional System Test", desc: "Completed assembly tested for electrical function, mechanical operation, and environmental performance per your test specification." },
    ],
    SPECS: [
      { k: "Assembly Types", v: "Box-build, sub-assembly, cable-PCB integration, chassis wiring" },
      { k: "Harness Integration", v: "Up to 200+ circuit wire harnesses in-house" },
      { k: "PCB Integration", v: "SMT, through-hole, IPC-A-610 Class 2 & 3" },
      { k: "Mechanical Integration", v: "Customer-supplied or third-party sourced mechanical components" },
      { k: "Test Capability", v: "Electrical functional, hipot, environmental (per customer spec)" },
      { k: "Standards", v: "IPC-A-610, IPC/WHMA-A-620, UL 508A awareness" },
      { k: "Lead Time", v: "Prototype: 10–15 days · Production: 15–30 business days" },
      { k: "MOQ", v: "1 unit (NPI) · Production pricing at volume" },
    ],
    PROCESS: [
      { n: "01", title: "BOM & Drawing Review", desc: "Complete BOM, assembly drawings, and test specification reviewed. DFM and DFA comments issued within 48 hours." },
      { n: "02", title: "Material Kitting", desc: "All electrical, mechanical, and hardware components kitted per BOM. No substitutions without approval." },
      { n: "03", title: "Sub-Assembly Build", desc: "Wire harness, PCB, and mechanical sub-assemblies built to their individual drawings before integration." },
      { n: "04", title: "Integration Assembly", desc: "All sub-assemblies integrated into final assembly per assembly drawing and sequence." },
      { n: "05", title: "Functional Test", desc: "Completed assembly tested per functional test specification. Electrical, mechanical, and environmental parameters recorded." },
      { n: "06", title: "Label & Ship", desc: "Assembly labeled per your requirements. COC, test report, and packing list included." },
    ],
    USECASES: [
      { title: "Industrial Equipment OEMs", desc: "Complete electromechanical sub-assemblies for machine tool, packaging, and material handling equipment." },
      { title: "Medical Devices", desc: "Cable-PCB-sensor integration for diagnostic and therapeutic medical devices. Full lot traceability and Class 3 capability." },
      { title: "Defense Systems", desc: "Box-build assemblies for ground vehicle, shipboard, and portable defense systems." },
      { title: "Robotics & Automation", desc: "Electromechanical assemblies for robot joints, servo axes, and end-of-arm tooling." },
      { title: "Energy Systems", desc: "Battery management sub-assemblies, inverter wiring modules, and sensor integration for energy storage systems." },
      { title: "Test & Measurement", desc: "Complete test fixture and measurement system assemblies integrating sensing hardware and signal conditioning electronics." },
    ],
    relatedPages: [
      { href: "/products/pcb-assemblies", title: "PCB Assemblies", desc: "PCB assembly services for integration into electromechanical products." },
      { href: "/products/custom-wire-harness", title: "Custom Wire Harness", desc: "Build-to-print wire harnesses for any electromechanical product." },
      { href: "/products/robotics-automation", title: "Robotics & Automation Solutions", desc: "Specialized wiring and cable solutions for robotic systems." },
    ],
  },

  'robotics-automation': {
    title: "Robotics & Automation Solutions",
    metaDesc: "Wire harnesses, cable assemblies, and electromechanical sub-assemblies for robotics and automation systems. High-flex, EMI-shielded, and servo-rated constructions.",
    quickAnswer: "Harnesses and cable assemblies engineered for robotics: servo cables, encoder cables, drag-chain bundles, and robot umbilicals. High-flex, shielded, and IP-rated.",
    cat: "Advanced Solutions",
    heroH: ["Robotics.", "Automation."],
    heroDesc: "Wiring harnesses and cable assemblies engineered for robotic and automation systems. Servo cables, encoder cables, drag-chain bundles, and robot arm umbilicals.",
    stats: [["10M+", "Flex Cycles"], ["EMI Shielded", "Available"], ["IP67", "Rated Options"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What Robotics Wiring Demands",
    ovH: "Motion Envelopes, Cycle Counts, and EMI — All Three.",
    ovP1: "Robotic systems impose three simultaneous demands on cable assemblies: continuous flex (servo cables and drag-chain bundles bending millions of times), EMI immunity (servo drives generate high-frequency noise that corrupts encoder feedback), and mechanical ruggedness (cables routed through tight bends, around rotating joints, and across gantry axes). Standard cable assemblies fail one or more of these requirements. Our robot and automation assemblies are specified to pass all three.",
    ovP2: "We build servo power cables, encoder feedback cables, robot arm umbilicals, drag-chain cable bundles, and electromechanical assemblies for automation equipment. Material selection, shielding architecture, and connector specification are matched to the servo drive datasheet and robot arm motion profile.",
    CAPS: [
      { title: "Servo Power Cables", desc: "High-flex servo motor power cables with PUR jacket, fine-stranded conductors, and brake conductor. Connector matched to drive manufacturer specification." },
      { title: "Encoder & Feedback Cables", desc: "Shielded encoder cables with twisted signal pairs, drain wire, and 360° backshell shield termination. Matched to encoder protocol (SSI, EnDat, Hiperface, BiSS)." },
      { title: "Drag-Chain Bundles", desc: "Multi-cable drag-chain bundles configured for energy chain lay. Fixed-end and moving-end geometry per chain specification." },
      { title: "Robot Umbilicals", desc: "Multi-function umbilical cables routing power, signal, pneumatics, and fluids through 6-axis robot arms and SCARA wrists." },
      { title: "EMI Shielding Architecture", desc: "Shield braid, spiral shield, and foil-braid combinations selected per drive EMI specification. 360° termination at backshells." },
      { title: "High-Flex Construction", desc: "Fine-stranded copper conductors, high-flex PUR insulation, and controlled lay construction for 5–10M cycle life." },
    ],
    SPECS: [
      { k: "Cable Types", v: "Servo power, encoder, bus (EtherCAT, PROFINET, DeviceNet), I/O" },
      { k: "Flex Rating", v: "5–10M cycles at 5× OD bend radius" },
      { k: "Conductor Type", v: "Fine-stranded Class 5/6, rope-lay copper" },
      { k: "Shielding", v: "Braided, spiral, foil-braid, combination" },
      { k: "Connector Brands", v: "Molex, TE, Amphenol, Lemo, M12, custom backshell" },
      { k: "IP Rating", v: "IP67 on request" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
      { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "Motion Profile Review", desc: "Bend radius, cycle count, routing path, and flex speed reviewed. Conductor and jacket material specified per profile." },
      { n: "02", title: "Shield Architecture", desc: "Shield type and termination method specified per drive EMI requirement. 360° backshell or pigtail drain per drawing." },
      { n: "03", title: "Cable Prep", desc: "Fine-stranded conductors cut, stripped, and labeled. Shield braid dressed and prepared for termination." },
      { n: "04", title: "Connector Termination", desc: "Servo and encoder connectors crimped and assembled per drive and encoder manufacturer specification." },
      { n: "05", title: "Shield Termination & Dress", desc: "Shield braid terminated at 360° backshell or drain wire. Cable dressed per drag-chain or robot arm routing spec." },
      { n: "06", title: "Electrical Test & Ship", desc: "Continuity, insulation resistance, and shield continuity verified on every unit. Packed to prevent kinking." },
    ],
    USECASES: [
      { title: "Industrial Robots (6-Axis)", desc: "Servo and encoder cables for 6-axis articulated robots. Umbilical bundles routed through or around the robot body." },
      { title: "SCARA & Delta Robots", desc: "High-cycle servo cables for SCARA arms and delta pick-and-place robots. Tight bend radius and short stroke cycles." },
      { title: "Collaborative Robots", desc: "Lightweight flex cables for cobot joints and sensor integration. Low-outgassing materials for enclosed cobot cells." },
      { title: "Gantry & Linear Axes", desc: "Drag-chain cable bundles for gantry systems, linear servo axes, and automated guided vehicles." },
      { title: "Semiconductor Automation", desc: "High-cleanliness flex cables for wafer handling and probing equipment in cleanroom environments." },
      { title: "Welding Automation", desc: "Welding torch cables and robot interface harnesses for arc and spot welding automation cells." },
    ],
    relatedPages: [
      { href: "/products/high-flex-robotic-harness", title: "High-Flex Robotic Harnesses", desc: "High-cycle flex wire harnesses for robot and automation applications." },
      { href: "/products/electromechanical", title: "Electromechanical Assemblies", desc: "Complete electromechanical sub-assemblies for automation systems." },
      { href: "/products/shielded-hermetic", title: "Shielded / Hermetic", desc: "EMI-shielded cable assemblies for noise-sensitive servo systems." },
    ],
  },

  'ev-renewable-energy': {
    title: "EV & Renewable Energy Solutions",
    metaDesc: "Wire harnesses and cable assemblies for EV, solar, wind, and energy storage systems. High-voltage, orange jacket, XLPE, and IEC 62619 compliant constructions.",
    quickAnswer: "High-voltage wire harnesses and cable assemblies for EV, solar, wind, and battery storage. Orange jacket, XLPE insulation, HV connectors, and 100% hipot tested.",
    cat: "Advanced Solutions",
    heroH: ["EV & Renewable.", "High Voltage."],
    heroDesc: "Wire harnesses and cable assemblies for electric vehicles, solar inverters, battery storage systems, and wind turbines. High-voltage rated, hipot tested, and built to your specification.",
    stats: [["Up to 1000V", "DC Rating"], ["100%", "Hipot Tested"], ["Orange XLPE", "HV Standard"], ["&lt;24 H", "Quote Reply"]],
    ovLabel: "What EV and Renewable Wiring Requires",
    ovH: "High Voltage Demands a Different Set of Rules.",
    ovP1: "High-voltage wiring for EV and renewable energy systems is not a gauge-up of standard harness work. It requires XLPE insulation rated for DC voltage and elevated temperature, orange jacket to IEC 62196 and SAE J1673 orange HV cable convention, HV-rated connectors with interlock circuits, and 100% hipot testing at 1.5× rated voltage before shipment. Every one of these requirements has a safety rationale that cannot be relaxed.",
    ovP2: "We build high-voltage harnesses for EV battery interconnects, traction motor cables, charging system wiring, solar combiner box assemblies, battery management system wiring, and wind turbine control harnesses. All HV assemblies include hipot test documentation. HV interlock loop integration is available.",
    CAPS: [
      { title: "XLPE HV Insulation", desc: "XLPE and cross-linked silicone insulated conductors rated for 600V to 1000V DC service at 90°C to 150°C continuous." },
      { title: "Orange HV Jacket", desc: "Orange outer jacket per IEC 62196 and SAE J1673 conventions. Orange conduit and orange shrink tubing for HV identification." },
      { title: "HV Connector Integration", desc: "Amphenol, TE Connectivity, MULTILOCK, and Molex HV connector families. HVIL (High Voltage Interlock Loop) circuits wired per specification." },
      { title: "100% Hipot Testing", desc: "Every HV assembly hipot-tested at 1.5× rated voltage minimum. Test voltage, duration, and leakage current documented per unit." },
      { title: "Battery Interconnects", desc: "Cell-to-cell and module-to-module interconnect cables for EV battery packs and stationary storage. Nickel-plated copper lugs, torqued terminations." },
      { title: "Solar & Wind Harnesses", desc: "PV wire harnesses for string combiners and inverter connections. Wind turbine control harnesses in polyurethane jacketed constructions." },
    ],
    SPECS: [
      { k: "Voltage Rating", v: "Up to 1000V DC (600V AC)" },
      { k: "Wire Gauge Range", v: "10 AWG to 350 kcmil" },
      { k: "Insulation", v: "XLPE, XLPO, silicone (EV-rated grades)" },
      { k: "Outer Jacket", v: "Orange XLPE, PUR, TPE; black for low-voltage return conductors" },
      { k: "Standards", v: "SAE J1673, IEC 62196, UL 2202, ISO 6722-1" },
      { k: "Hipot Test", v: "100% at 1.5× rated voltage, pass/fail per unit documented" },
      { k: "Lead Time", v: "Prototype: 5–10 days · Production: 10–20 business days" },
      { k: "MOQ", v: "1 unit (NPI) · No production minimum" },
    ],
    PROCESS: [
      { n: "01", title: "HV Design Review", desc: "Voltage rating, current capacity, routing environment, and connector spec reviewed. HVIL circuit confirmed where required." },
      { n: "02", title: "Material Verification", desc: "XLPE wire and HV connectors verified against approved vendor list. No non-HV-rated material substitutions." },
      { n: "03", title: "Fabrication", desc: "HV conductors cut, stripped, and terminated. Orange jacket applied and sleeved per drawing." },
      { n: "04", title: "Connector Assembly", desc: "HV connectors assembled with per-manufacturer torque and insertion specification. HVIL contacts wired last." },
      { n: "05", title: "Hipot Test", desc: "Every assembly hipot-tested at 1.5× rated voltage. Pass/fail and leakage current recorded per unit on test report." },
      { n: "06", title: "Label & Ship", desc: "HV warning labels applied per drawing. Test report, COC, and packing list included." },
    ],
    USECASES: [
      { title: "Electric Vehicle Battery Packs", desc: "Cell-to-cell and module-to-module interconnect cables, BMS wiring harnesses, and pack-to-chassis HV cables." },
      { title: "EV Charging Systems", desc: "Charging station cable assemblies, EVSE wiring, and on-board charger input/output harnesses." },
      { title: "Solar Inverter Systems", desc: "PV string harnesses, combiner box assemblies, and DC/AC inverter connection cables. UL 4703 PV wire constructions." },
      { title: "Battery Energy Storage", desc: "HV wiring harnesses for stationary lithium-ion and flow battery energy storage systems." },
      { title: "Wind Turbines", desc: "Control and power harnesses for nacelle wiring, pitch control systems, and tower cable assemblies." },
      { title: "Industrial EV", desc: "HV harnesses for forklifts, automated guided vehicles, and heavy-duty electric vehicles." },
    ],
    relatedPages: [
      { href: "/products/high-voltage-harness", title: "High Voltage Harness", desc: "Standard HV wire harnesses for industrial and EV applications." },
      { href: "/products/power-battery", title: "Power & Battery Cables", desc: "Power cables and battery interconnects for high-current applications." },
      { href: "/products/custom-wire-harness", title: "Custom Wire Harness", desc: "Build-to-print harnesses for any voltage and application." },
    ],
  },
}

function buildPage(slug, data) {
  const {
    title, metaDesc, quickAnswer, cat, heroH, heroDesc, stats,
    ovLabel, ovH, ovP1, ovP2,
    CAPS, SPECS, PROCESS, USECASES, relatedPages
  } = data

  const heroLine1 = heroH[0]
  const heroLine2 = heroH[1]

  return `import type { Metadata } from "next"
import Link from "next/link"
import FAQAccordion from "@/components/FAQAccordion"
import ProductPageTabs from "@/components/ProductPageTabs"

export const metadata: Metadata = {
  title: "${title} | Superior Harness & Assembly",
  description: "${metaDesc}",
}

const CAPS = [
${CAPS.map(c => `  { title: "${c.title}", desc: "${c.desc}" },`).join('\n')}
]

const SPECS = [
${SPECS.map(s => `  { k: "${s.k}", v: "${s.v}" },`).join('\n')}
]

const PROCESS = [
${PROCESS.map(p => `  { n: "${p.n}", title: "${p.title}", desc: "${p.desc}" },`).join('\n')}
]

const USECASES = [
${USECASES.map(u => `  { title: "${u.title}", desc: "${u.desc}" },`).join('\n')}
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
            ${title}
          </div>
          <div className="pp-hero__qa">
            <div className="pp-hero__qa-label">Quick Answer</div>
            <div className="pp-hero__qa-text">${quickAnswer}</div>
          </div>
          <div className="pp-hero__split">
            <div>
              <div className="pp-hero__cat">${cat}</div>
              <h1 className="pp-hero__h">
                ${heroLine1}
                <span className="muted">${heroLine2}</span>
              </h1>
              <p className="pp-hero__desc">${heroDesc}</p>
              <div className="pp-hero__ctabar">
                <Link href="#quote" className="pp-hero__cta-primary">Submit Spec Sheet →</Link>
                <Link href="/capabilities" className="pp-hero__cta-secondary">See Capabilities</Link>
              </div>
            </div>
            <div className="pp-hero__right">
              <div className="pp-hero__stats-grid">
${stats.map(([val, lbl]) => `                <div className="pp-hero__stat-box"><div className="pp-hero__stat-val">${val}</div><div className="pp-hero__stat-lbl">${lbl}</div></div>`).join('\n')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductPageTabs tabs={[
        { id: "overview", label: "Overview", content: (
          <section className="pp-meaning">
            <div className="pp-meaning__inner">
              <div className="pp-meaning__label">${ovLabel}</div>
              <h2 className="pp-meaning__h">${ovH}</h2>
              <div className="pp-meaning__cols">
                <p className="pp-meaning__text">${ovP1}</p>
                <p className="pp-meaning__text">${ovP2}</p>
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
              <h2 className="pp-specs__h">${title} Envelope.</h2>
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
                      <div className="pp-quote__role">Superior Harness &amp; Assembly · Canton, MI</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FAQAccordion label="${title} FAQ" heading="Questions Engineers Ask." items={FAQS} />
            <section className="pp-related">
              <div className="pp-related__inner">
                <div className="pp-related__label">Related Products</div>
                <h2 className="pp-related__h">Also Consider.</h2>
                <div className="pp-related-grid">
${relatedPages.map(r => `                  <div className="pp-related-grid__cell">
                    <div className="pp-related-grid__title">${r.title}</div>
                    <div className="pp-related-grid__desc">${r.desc}</div>
                    <Link href="${r.href}" className="pp-related-grid__link">Read More →</Link>
                  </div>`).join('\n')}
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

for (const [slug, data] of Object.entries(PAGES)) {
  const dir = `${BASE}/${slug}`
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  const path = `${dir}/page.tsx`
  if (existsSync(path)) {
    console.log(`SKIP (exists): ${slug}`)
    continue
  }
  writeFileSync(path, buildPage(slug, data))
  console.log(`CREATED: ${slug}`)
}
