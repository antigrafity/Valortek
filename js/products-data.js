/* =========================================================
   Valortek — capability catalog (single source of truth)
   Positioning: System Integrator & Enterprise Technology
   Solutions Partner.

   Content source: PT. Valortek Ratanika Utama — Corporate
   Website Content (Section 4: Solutions & Services).

   Used by:
   - solutions.html : grouped listing (short capability cards)
   - solution.html  : full capability detail (via ?id=)
   - shared mega menu (js/main.js)

   Fields consumed by catalog.js:
   sub, name, tagline, short, full,
   capabilities  -> Key Capabilities
   challenges    -> Business Challenges Addressed
   value         -> Customer Value
   useCases      -> Example Applications / Use Cases
   integration   -> Integration Perspective
   cta           -> CTA button label
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  {
    id: 'capabilities',
    name: 'Integrated Technology Capabilities',
    tagline: 'Seven core capabilities designed to address specific enterprise needs while remaining part of a broader system integration model. An engagement may focus on one capability or combine several into a connected solution.',
    img: 'assets/img/cat-software.jpg'
  },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- 4.1 Data ---------- */
  {
    id: 'data', cat: 'capabilities', sub: 'Data Foundation', name: 'Data Foundation', img: 'assets/img/cap-data.jpg',
    icon: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    tagline: 'Turn enterprise data into a connected, accessible, and usable foundation for operations and decision-making.',
    short: 'Connect, organize, manage, and improve access to enterprise data so information can support operations, applications, analytics, and decision-making.',
    full: 'Organizations generate and depend on growing volumes of information, but value is limited when data is fragmented, inconsistent, difficult to access, or disconnected from the systems and teams that need it. Valortek helps organizations structure, integrate, manage, and enable data so it can support operational processes, analytics, digital services, and informed decision-making.',
    capabilities: [
      'Data Integration — connect information from relevant systems and sources so it can be used across the wider technology environment.',
      'Data Management — support more structured approaches to organizing, maintaining, governing, and using enterprise data.',
      'Data Platforms — help design and integrate environments that bring together data for access, processing, sharing, and downstream use.',
      'Data Accessibility — improve how authorized users, applications, and analytical functions access the information they require.',
      'Data Quality — support processes and controls that improve consistency, completeness, reliability, and usability of important data.',
      'Data Enablement — prepare data to support analytics, digital workflows, geospatial use cases, visualization, and other enterprise capabilities.'
    ],
    challenges: [
      'Information spread across disconnected systems or business units.',
      'Difficulty obtaining a consistent view of important operational or business data.',
      'Manual data movement and repetitive reconciliation between systems.',
      'Limited confidence in data quality or consistency.',
      'Slow access to information needed for reporting, analysis, or decisions.',
      'New digital or analytical initiatives constrained by fragmented data foundations.'
    ],
    value: 'A more connected data environment can improve information access, reduce fragmentation, support more consistent decision-making, and create a stronger foundation for analytics and digital initiatives. The objective is not simply to store more data, but to make relevant data easier to trust, connect, use, and govern within the organization.',
    useCases: [
      'Integrating data from multiple enterprise systems into a more unified information environment.',
      'Improving access to operational and management information across authorized teams.',
      'Preparing and connecting data for dashboards, analytics, reporting, or planning.',
      'Combining enterprise data with geospatial information for location-aware insight.',
      'Supporting digital workflow modernization with more consistent information flows.',
      'Improving data quality and usability for downstream applications and decision-support needs.'
    ],
    integration: 'Data solutions often become more valuable when connected to analytics, digital workflows, geospatial information, visualization, and security requirements. Valortek considers how the data environment will support the broader technology ecosystem rather than treating data as an isolated repository.',
    cta: 'Discuss Your Data Requirements'
  },

  /* ---------- 4.2 Geospatial ---------- */
  {
    id: 'geospatial', cat: 'capabilities', sub: 'Geospatial Intelligence', name: 'Geospatial Intelligence', img: 'assets/img/cap-geospatial.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    tagline: 'Add location intelligence to the way your organization understands assets, operations, environments, and relationships.',
    short: 'Use location-based information, mapping, spatial analysis, and geospatial visualization to understand assets, environments, operations, and relationships in place and space.',
    full: 'Many business and operational questions have a spatial dimension: where assets are located, how locations relate to one another, where activity is concentrated, how service areas are structured, or how physical environments affect operations. Valortek helps organizations use geospatial data, mapping, spatial information, and location intelligence as part of broader enterprise solutions.',
    capabilities: [
      'Geospatial Data — organize and integrate location-based information relevant to assets, facilities, service areas, operations, or planning.',
      'Mapping — present spatial information in map-based interfaces that make geographic relationships easier to understand.',
      'Spatial Information Integration — connect geospatial information with enterprise, operational, and analytical data.',
      'Location Intelligence — use spatial context to enrich analysis, planning, monitoring, and decision-making.',
      'Geospatial Visualization — create clear visual representations of location-based information for operational and management use.',
      'Enterprise Integration — connect geospatial capabilities with data platforms, analytics, digital workflows, and visualization environments.'
    ],
    challenges: [
      'Limited visibility into the location and spatial relationships of assets or activities.',
      'Geographic information maintained separately from enterprise systems and business data.',
      'Difficulty understanding patterns that are clearer when viewed spatially.',
      'Planning and operational decisions made without sufficient location context.',
      'Complex geographic information that is difficult for non-specialist users to interpret.'
    ],
    value: 'By bringing spatial context into the enterprise information environment, organizations can gain a clearer view of where assets, activities, customers, facilities, resources, or service areas are located and how they relate. This can improve planning, operational visibility, resource coordination, and decision-making.',
    useCases: [
      'Asset and facility mapping connected with enterprise records.',
      'Location-based operational dashboards and management views.',
      'Spatial analysis to identify patterns, relationships, or areas requiring attention.',
      'Integration of location information with business and analytical data.',
      'Geospatial visualization for infrastructure, service coverage, logistics, or planning contexts.',
      'Interactive maps that support users in exploring complex information geographically.'
    ],
    integration: 'Geospatial capabilities can be integrated with enterprise data, analytics, digital workflows, visualization, and security controls to create a more complete view of assets, operations, locations, and relationships.',
    cta: 'Discuss Your Geospatial Requirements'
  },

  /* ---------- 4.3 Analytics ---------- */
  {
    id: 'analytics', cat: 'capabilities', sub: 'Analytics & Insight', name: 'Analytics & Insight', img: 'assets/img/cap-analytics.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/></svg>',
    tagline: 'Transform connected data into insight that supports better visibility, planning, and decisions.',
    short: 'Turn data into useful insight through business intelligence, performance visibility, trend analysis, monitoring, and decision-support capabilities.',
    full: 'Data creates value when people can interpret it and use it. Valortek helps organizations build analytics capabilities that turn enterprise information into clearer insight for decision-making, performance monitoring, operational visibility, business intelligence, trend identification, planning, and continuous improvement.',
    capabilities: [
      'Business Intelligence — organize and present relevant information to support management and operational decisions.',
      'Performance Monitoring — track indicators and operational measures that help teams understand current performance.',
      'Operational Visibility — bring together information from multiple sources to provide a clearer view of activities and conditions.',
      'Trend Identification — analyze historical and current information to identify patterns, changes, and areas requiring attention.',
      'Decision Support — structure information and analytical views so decision-makers can evaluate options with stronger context.',
      'Planning & Improvement — use evidence and analytical insight to support planning, prioritization, and organizational improvement.'
    ],
    challenges: [
      'Large volumes of data without clear, decision-ready insight.',
      'Manual or slow reporting processes.',
      'Limited visibility across functions, locations, or operational activities.',
      'Difficulty identifying trends, exceptions, or performance gaps.',
      'Decision-making based on fragmented or inconsistent information.',
      'Analytics initiatives disconnected from operational systems and workflows.'
    ],
    value: 'Effective analytics can help decision-makers see what is happening, understand why it matters, identify patterns, and act with stronger information. The value comes from connecting the analytical layer with reliable data, appropriate context, clear visualization, and the processes in which decisions are made.',
    useCases: [
      'Executive and management dashboards.',
      'Operational performance monitoring and reporting.',
      'Cross-functional analysis using integrated enterprise data.',
      'Trend, exception, and pattern analysis.',
      'Geospatial analytics combining business and location information.',
      'Analytical views embedded within digital processes or operational applications.'
    ],
    integration: 'Analytics depends on the quality and accessibility of underlying data and often needs to connect with operational systems, digital processes, geospatial information, and visualization interfaces. We design analytics as part of that wider environment.',
    cta: 'Turn Data Into Useful Insight'
  },

  /* ---------- 4.4 Digital Transformation ---------- */
  {
    id: 'digital', cat: 'capabilities', sub: 'Digital Transformation', name: 'Digital Transformation', img: 'assets/img/cap-digital.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/><circle cx="12" cy="12" r="3"/></svg>',
    tagline: 'Modernize technology, processes, information flows, and digital experiences with integration at the center.',
    short: 'Modernize processes, technology environments, information flows, and digital experiences through practical, integrated change aligned with organizational priorities.',
    full: 'Digital transformation is not simply replacing manual work with digital tools. It is the coordinated improvement of processes, technology environments, information flows, user experiences, and operating models so an organization can work more effectively. Valortek supports transformation initiatives by helping organizations connect modernization priorities with the systems, data, integration, analytics, security, and resilience required to make change sustainable.',
    capabilities: [
      'Process Modernization — review and improve workflows so technology supports more efficient and consistent ways of working.',
      'Technology Modernization — help evolve technology environments to support current needs, integration requirements, and future digital capabilities.',
      'Digital Workflows — connect information, users, and systems through structured digital processes.',
      'Systems Integration — enable new and existing technologies to exchange information and operate as part of a broader environment.',
      'Data-Driven Operations — connect digital processes with reliable data and analytical insight.',
      'Digital Experiences — improve how employees, customers, or stakeholders interact with digital services and information.'
    ],
    challenges: [
      'Manual processes that limit speed, consistency, or visibility.',
      'Disconnected systems and duplicated information handling.',
      'Legacy processes that make it difficult to introduce new digital capabilities.',
      'Digital initiatives implemented without sufficient integration to existing environments.',
      'Limited data visibility across end-to-end processes.',
      'Modernization programs that need stronger security, resilience, and governance considerations.'
    ],
    value: 'A well-integrated transformation program can improve operational efficiency, information flow, user experience, visibility, and adaptability. Valortek focuses on practical modernization — connecting the changes that matter to the processes, systems, data, security, and people that make the organization work.',
    useCases: [
      'Digitizing and integrating multi-step business workflows.',
      'Connecting new digital applications with existing enterprise systems.',
      'Improving information flow across departments or operational functions.',
      'Modernizing reporting and management visibility as part of process change.',
      'Building data and analytics into redesigned digital operations.',
      'Strengthening security and resilience as technology environments are modernized.'
    ],
    integration: 'Digital transformation frequently spans processes, data, applications, user experiences, integration, analytics, security, and resilience. Valortek helps connect these components so modernization creates a coherent operating environment rather than a collection of isolated digital projects.',
    cta: 'Discuss Your Digital Transformation Priorities'
  },

  /* ---------- 4.5 Cyber Resilience ---------- */
  {
    id: 'resilience', cat: 'capabilities', sub: 'Cyber Resilience', name: 'Cyber Resilience', img: 'assets/img/cap-resilience.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    tagline: 'Strengthen the organization\u2019s ability to prepare, protect, detect, respond, recover, and adapt.',
    short: 'Strengthen the organization\u2019s ability to prepare for disruption, protect critical capabilities, detect issues, respond effectively, recover, and adapt.',
    full: 'Cyber resilience is the ability to continue operating through technology-related disruption and to recover effectively when incidents occur. It goes beyond preventive security by considering how critical processes, systems, information, people, and recovery capabilities work together before, during, and after disruption. Valortek helps organizations approach resilience as part of the broader technology and business continuity environment.',
    capabilities: [
      'Prepare — understand important systems, information, dependencies, recovery needs, and resilience priorities.',
      'Protect — apply appropriate safeguards within the wider technology environment to reduce exposure and limit impact.',
      'Detect — support visibility and monitoring approaches that help identify issues requiring attention.',
      'Respond — clarify processes, coordination, and technology requirements that support timely and structured response.',
      'Recover — support the ability to restore critical capabilities and information in line with business priorities.',
      'Adapt — use lessons, changing risks, and operational experience to improve resilience over time.'
    ],
    challenges: [
      'Critical business processes that depend heavily on interconnected technology.',
      'Unclear dependencies between systems, data, operations, and recovery requirements.',
      'Security programs focused on prevention without sufficient attention to continuity and recovery.',
      'Need for stronger coordination between technology operations, security, and business continuity activities.',
      'Difficulty prioritizing which capabilities must be restored first following disruption.'
    ],
    value: 'A resilient organization is better prepared to manage disruption without relying on the assumption that every incident can be prevented. By connecting security, continuity, recovery, system dependencies, and operational priorities, organizations can improve their ability to sustain critical activities and restore capabilities in a controlled manner.',
    useCases: [
      'Reviewing technology dependencies that support critical business processes.',
      'Strengthening coordination between cyber security, IT operations, and continuity requirements.',
      'Improving recovery priorities for systems and information.',
      'Integrating resilience considerations into digital transformation initiatives.',
      'Reviewing gaps in protection, detection, response, and recovery capabilities.',
      'Supporting continuous resilience improvement as technology environments evolve.'
    ],
    integration: 'Cyber resilience works across technology, operations, security, continuity, and recovery. We consider resilience in relation to the systems and information the organization depends on, and how those dependencies interact across the wider environment.',
    cta: 'Strengthen Your Cyber Resilience'
  },

  /* ---------- 4.6 Immersive & Visualization Solutions ---------- */
  {
    id: 'immersive', cat: 'capabilities', sub: 'Immersive & Visualization', name: 'Immersive & Visualization Solutions', img: 'assets/img/cap-immersive.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    tagline: 'Make complex information easier to understand through interactive, spatial, and immersive visual experiences.',
    short: 'Make complex information, environments, processes, and scenarios easier to understand through interactive, 3D, digital, and immersive visualization.',
    full: 'Some information is difficult to understand through tables, documents, or conventional interfaces alone. Immersive and visualization solutions can help users explore complex environments, relationships, processes, data, and scenarios in more intuitive ways. Valortek helps integrate visualization capabilities with the information and systems that give those visual experiences meaning.',
    capabilities: [
      '3D Visualization — represent environments, assets, concepts, or information in three-dimensional visual form.',
      'Interactive Visualization — allow users to explore information dynamically rather than through static presentation alone.',
      'Immersive Experiences — create engaging digital environments that support understanding, communication, training, planning, or stakeholder engagement.',
      'Virtual Environments — represent spaces, systems, or scenarios in digital environments that users can navigate or review.',
      'Data Visualization — translate complex data into clear visual forms that support interpretation and decision-making.',
      'Simulation-Oriented Visualization — visualize scenarios, processes, or changing conditions to support analysis, demonstration, planning, or learning.'
    ],
    challenges: [
      'Complex information that is difficult to communicate through conventional reports or dashboards.',
      'Need to understand environments, assets, or processes spatially and interactively.',
      'Stakeholder engagement that benefits from more intuitive digital presentation.',
      'Training or planning scenarios that require visual context.',
      'Large or multi-dimensional datasets that need clearer visual interpretation.'
    ],
    value: 'Visualization can reduce cognitive complexity by presenting information in forms that are easier to explore and understand. When connected to enterprise data, analytics, geospatial information, or digital applications, visual and immersive experiences can provide a more intuitive interface to complex business and operational information.',
    useCases: [
      'Interactive 3D representation of facilities, assets, or environments.',
      'Immersive environments for orientation, learning, communication, or stakeholder engagement.',
      'Data-rich visualization combining operational and contextual information.',
      'Geospatial and 3D visualization of location-based information.',
      'Interactive scenario or process visualization for planning and analysis.',
      'Visual interfaces that make complex analytical information easier for decision-makers to interpret.'
    ],
    integration: 'Visualization can sit on top of data, analytics, geospatial information, digital applications, and simulation-oriented environments. Its value increases when the visual experience is connected to reliable information and the workflows in which users make decisions.',
    cta: 'Explore Visualization Possibilities'
  },

  /* ---------- 4.7 Cyber Security ---------- */
  {
    id: 'cyber', cat: 'capabilities', sub: 'Cyber Security', name: 'Cyber Security', img: 'assets/img/cap-cyber.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    tagline: 'Protect enterprise information, applications, infrastructure, and digital operations as part of the wider technology environment.',
    short: 'Protect information, applications, infrastructure, and digital operations through security assessment, architecture, integration, monitoring, risk management, and continuous improvement.',
    full: 'Cyber security supports the confidentiality, integrity, and availability of the technology and information an organization depends on. Valortek approaches security as an integrated enterprise requirement — one that must align with systems, data, applications, users, operational processes, and business priorities rather than exist as an isolated technical layer.',
    capabilities: [
      'Security Assessment — review relevant technology environments, requirements, risks, and control gaps to support informed security improvement.',
      'Security Architecture — help define how security controls and principles should fit within the broader solution and technology environment.',
      'Protection — support appropriate safeguards for information, applications, infrastructure, identities, and digital operations.',
      'Monitoring — support visibility into relevant security events and conditions requiring attention.',
      'Risk Management — connect security priorities with business context, technology dependencies, and practical risk considerations.',
      'Security Integration — integrate security requirements into digital platforms, data environments, applications, and broader technology solutions.',
      'Security Operations — support structured approaches to ongoing security activities, coordination, and operational improvement.',
      'Security Improvement — help organizations review gaps, strengthen controls, and evolve their security posture over time.'
    ],
    challenges: [
      'Growing technology dependencies and expanding digital environments.',
      'Security controls implemented inconsistently across systems or initiatives.',
      'Limited visibility into security conditions across the technology environment.',
      'New digital or integration projects that need security embedded from the design stage.',
      'Difficulty prioritizing security improvements against business and operational requirements.',
      'Need for stronger connection between cyber security and continuity or resilience planning.'
    ],
    value: 'Integrated security helps organizations protect important technology and information while enabling business operations. The objective is to apply appropriate security measures in the right places, align them with the wider architecture, and improve the organization\u2019s ability to manage risk as technology environments change.',
    useCases: [
      'Security reviews for existing or planned technology environments.',
      'Security architecture for integrated enterprise solutions.',
      'Security requirements embedded within digital transformation initiatives.',
      'Improving monitoring and operational visibility for security-relevant events.',
      'Integrating security considerations with data, applications, infrastructure, and user access.',
      'Connecting cyber security improvement with broader cyber resilience objectives.'
    ],
    integration: 'Cyber security should be integrated into the technology environment rather than added as an isolated layer. We consider how security requirements interact with data, applications, integration, digital transformation, operations, resilience, and user needs.',
    cta: 'Discuss Your Cyber Security Requirements'
  },
];
