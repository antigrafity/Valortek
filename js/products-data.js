/* =========================================================
   Valortek — Cybersecurity Solutions & Services portfolio
   Single source of truth for solutions.html (listing) and
   solution.html (detail), plus the Solutions mega menu.

   Positioning: Cybersecurity Solutions & Services provider.
   Products/technology from principals are positioned as
   technology components/enablers — the value is in the
   end-to-end solutions and services built around them.
   Wording follows the approved concept document.
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  {
    id: 'advisory',
    name: 'Cybersecurity Advisory & Consulting',
    tagline: 'The entry point to understand an organization\u2019s condition, risks, needs, and targets \u2014 turning insight into a clear security strategy and roadmap.',
    img: 'assets/img/cat-cyber.jpg'
  },
  {
    id: 'solutions',
    name: 'Cybersecurity Solutions & Integration',
    tagline: 'Designing and integrating security systems that fit each customer\u2019s architecture \u2014 from network and endpoint to identity, data, and Zero Trust.',
    img: 'assets/img/cat-infra.jpg'
  },
  {
    id: 'operations',
    name: 'Security Operations Services',
    tagline: 'Continuous monitoring, detection, analysis, response, and reporting through SOC, managed SIEM, and managed security services.',
    img: 'assets/img/cat-data.jpg'
  },
  {
    id: 'infrastructure',
    name: 'Secure IT Infrastructure',
    tagline: 'Building secure, resilient, and manageable IT foundations across network, data center, compute, storage, virtualization, and cloud.',
    img: 'assets/img/cat-connected.jpg'
  },
  {
    id: 'resilience',
    name: 'Cyber Resilience & Recovery',
    tagline: 'Helping organizations maintain operational continuity and recover services quickly when disruptions or incidents occur.',
    img: 'assets/img/cat-immersive.jpg'
  },
  {
    id: 'lifecycle',
    name: 'Implementation & Lifecycle Services',
    tagline: 'Supporting customers across the full lifecycle of implementing and operating solutions \u2014 from deployment and integration to maintenance and optimization.',
    img: 'assets/img/cat-software.jpg'
  },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- A. Cybersecurity Advisory & Consulting ---------- */
  {
    id: 'it-cyber-assessment', cat: 'advisory', sub: 'Assessment', name: 'IT & Cybersecurity Assessment',
    tagline: 'Understand your current security posture, risks, and priorities.',
    short: 'Structured assessment of IT and cybersecurity condition, gaps, and priorities.',
    full: 'IT & Cybersecurity Assessment is the entry point to understanding an organization\u2019s condition, risks, needs, and targets. We evaluate the current state of IT and security controls, identify gaps against good practice, and prioritize actions so that every subsequent design and implementation decision is grounded in a clear picture of risk and readiness.',
    capabilities: [
      'Security maturity assessment',
      'IT infrastructure assessment',
      'Vulnerability assessment',
      'Gap analysis against security good practice'
    ],
    useCases: [
      'Baseline of current security posture',
      'Prioritizing security investments',
      'Preparation for audit and compliance'
    ]
  },
  {
    id: 'audit-compliance', cat: 'advisory', sub: 'Compliance', name: 'Security Audit & Compliance Support',
    tagline: 'Align security controls with standards and regulatory expectations.',
    short: 'Audit readiness and compliance support against relevant standards.',
    full: 'Security Audit & Compliance Support helps organizations align their security controls with applicable standards and regulatory expectations. We review controls, document evidence, and support audit readiness so security governance is demonstrable and defensible.',
    capabilities: [
      'Security audit support',
      'Compliance readiness review',
      'Controls documentation and evidence',
      'Remediation guidance'
    ],
    useCases: [
      'Regulatory compliance preparation',
      'Internal and external audit support',
      'Security governance improvement'
    ]
  },
  {
    id: 'strategy-roadmap', cat: 'advisory', sub: 'Strategy', name: 'Cybersecurity Strategy & Roadmap',
    tagline: 'A clear, prioritized path to improve security maturity over time.',
    short: 'Security strategy, governance, and architecture direction with a phased roadmap.',
    full: 'Cybersecurity Strategy & Roadmap translates assessment findings into a prioritized, phased plan. We define security governance and risk management approaches, shape target security architecture and design, and set a roadmap that aligns security investment with business and operational objectives.',
    capabilities: [
      'Cybersecurity strategy and roadmap',
      'Security governance and risk management',
      'Security architecture and design'
    ],
    useCases: [
      'Multi-year security planning',
      'Security governance and risk programs',
      'Target architecture definition'
    ]
  },

  /* ---------- B. Cybersecurity Solutions & Integration ---------- */
  {
    id: 'network-security', cat: 'solutions', sub: 'Network', name: 'Network Security Solutions',
    tagline: 'Protect the network perimeter and internal segments.',
    short: 'Network security controls integrated into the customer architecture.',
    full: 'Network Security Solutions build and integrate the controls that protect network traffic, perimeters, and internal segments according to the customer\u2019s architecture. We design, deploy, and integrate the technology so security is consistent and manageable across the environment.',
    capabilities: [
      'Perimeter and internal network security',
      'Secure segmentation',
      'Security platform integration'
    ],
    useCases: [
      'Network security modernization',
      'Segmentation and traffic control',
      'Consolidation of security tooling'
    ]
  },
  {
    id: 'endpoint-security', cat: 'solutions', sub: 'Endpoint', name: 'Endpoint Security Solutions',
    tagline: 'Secure the devices where users and data meet.',
    short: 'Endpoint protection integrated with monitoring and response.',
    full: 'Endpoint Security Solutions protect the devices where users, applications, and data interact. We deploy and integrate endpoint protection so it works together with monitoring and response capabilities for consistent visibility and control.',
    capabilities: [
      'Endpoint protection deployment',
      'Integration with detection and response',
      'Policy and configuration management'
    ],
    useCases: [
      'Endpoint protection rollout',
      'Threat detection at the endpoint',
      'Standardized device security'
    ]
  },
  {
    id: 'identity-access', cat: 'solutions', sub: 'Identity', name: 'Identity & Access Security',
    tagline: 'Ensure the right people have the right access.',
    short: 'Identity and access controls to govern authentication and authorization.',
    full: 'Identity & Access Security establishes controls that govern who can access what, under which conditions. We design and integrate identity and access management so authentication and authorization are strong, auditable, and aligned with least-privilege principles.',
    capabilities: [
      'Identity and access management integration',
      'Authentication and authorization controls',
      'Least-privilege access design'
    ],
    useCases: [
      'Access governance',
      'Strengthening authentication',
      'Privileged access control'
    ]
  },
  {
    id: 'data-security', cat: 'solutions', sub: 'Data', name: 'Data Security & Protection',
    tagline: 'Protect sensitive data across its lifecycle.',
    short: 'Data protection controls integrated across the environment.',
    full: 'Data Security & Protection focuses on safeguarding sensitive information across its lifecycle. We design and integrate controls that protect data at rest, in transit, and in use so information stays confidential and intact.',
    capabilities: [
      'Data protection controls',
      'Encryption and access controls',
      'Integration across systems'
    ],
    useCases: [
      'Sensitive data protection',
      'Data loss prevention',
      'Regulatory data safeguards'
    ]
  },
  {
    id: 'zero-trust', cat: 'solutions', sub: 'Zero Trust', name: 'Zero Trust Security Architecture',
    tagline: 'Never trust, always verify \u2014 by design.',
    short: 'Zero Trust architecture and security operations system integration.',
    full: 'Zero Trust Security Architecture applies a \u201cnever trust, always verify\u201d model across the environment. We design the architecture, integrate the security operations system, and connect security platforms so verification and least privilege are enforced consistently.',
    capabilities: [
      'Zero Trust architecture design',
      'Security operations system integration',
      'Security platform integration',
      'Cybersecurity system integration'
    ],
    useCases: [
      'Zero Trust adoption',
      'Consolidating security platforms',
      'End-to-end security integration'
    ]
  },

  /* ---------- C. Security Operations Services ---------- */
  {
    id: 'soc', cat: 'operations', sub: 'SOC', name: 'Security Operations Center (SOC)',
    tagline: 'Continuous monitoring, detection, and response.',
    short: 'SOC services providing monitoring, detection, analysis, and reporting.',
    full: 'The Security Operations Center (SOC) provides continuous monitoring, detection, analysis, response, and reporting. Whether operated as managed security operations or supporting your own team, the SOC gives ongoing visibility into threats and the ability to respond quickly.',
    capabilities: [
      'Security monitoring',
      'Managed security operations',
      'Threat detection and monitoring',
      'Security analytics'
    ],
    useCases: [
      'Continuous security monitoring',
      'Managed detection and response',
      'Centralized security reporting'
    ]
  },
  {
    id: 'managed-siem', cat: 'operations', sub: 'SIEM', name: 'Managed SIEM',
    tagline: 'Centralized security analytics, fully managed.',
    short: 'Managed SIEM for log collection, correlation, and threat analytics.',
    full: 'Managed SIEM centralizes security event collection, correlation, and analytics as a managed service. We operate the platform, tune detections, and turn raw telemetry into actionable insight so security signals are not lost in the noise.',
    capabilities: [
      'Log collection and correlation',
      'Security analytics and detection tuning',
      'Managed operation and reporting'
    ],
    useCases: [
      'Centralized threat detection',
      'Compliance-driven logging',
      'Security analytics without in-house overhead'
    ]
  },
  {
    id: 'incident-response', cat: 'operations', sub: 'Response', name: 'Incident Response',
    tagline: 'Contain, investigate, and recover from incidents.',
    short: 'Incident response to contain and remediate security events.',
    full: 'Incident Response provides the capability to contain, investigate, and remediate security incidents. Combined with managed security services, it ensures that when something happens, there is a defined and practiced path back to normal operations.',
    capabilities: [
      'Incident containment and investigation',
      'Managed security services',
      'Post-incident reporting and improvement'
    ],
    useCases: [
      'Responding to active incidents',
      'Reducing incident impact',
      'Strengthening response readiness'
    ]
  },

  /* ---------- D. Secure IT Infrastructure ---------- */
  {
    id: 'secure-network-infra', cat: 'infrastructure', sub: 'Network', name: 'Secure Network Infrastructure',
    tagline: 'A secure, resilient network foundation.',
    short: 'Secure and manageable network infrastructure design and deployment.',
    full: 'Secure Network Infrastructure builds the foundation for a secure, resilient, and manageable network. We design and deploy the underlying infrastructure with security and monitoring built in from the start.',
    capabilities: [
      'Secure network infrastructure design',
      'Infrastructure monitoring',
      'Resilient, manageable architecture'
    ],
    useCases: [
      'Network foundation modernization',
      'Secure connectivity',
      'Manageable, monitored networks'
    ]
  },
  {
    id: 'secure-datacenter', cat: 'infrastructure', sub: 'Data Center', name: 'Secure Data Center Infrastructure',
    tagline: 'Compute, storage, and virtualization built to be secure.',
    short: 'Secure data center, compute, storage, and virtualization foundations.',
    full: 'Secure Data Center Infrastructure delivers the compute, storage, and virtualization foundations that host critical workloads. We build these environments to be secure, resilient, and manageable, with monitoring across the stack.',
    capabilities: [
      'Server and compute infrastructure',
      'Storage infrastructure',
      'Virtualization',
      'Infrastructure monitoring'
    ],
    useCases: [
      'Secure data center build',
      'Workload consolidation',
      'Virtualized environment security'
    ]
  },
  {
    id: 'cloud-hybrid', cat: 'infrastructure', sub: 'Cloud', name: 'Cloud / Hybrid Infrastructure',
    tagline: 'Secure operations across cloud and on-premise.',
    short: 'Secure cloud and hybrid infrastructure with backup and disaster recovery.',
    full: 'Cloud / Hybrid Infrastructure extends secure operations across cloud and on-premise environments. We design and integrate cloud and hybrid foundations, including backup and disaster recovery, so services stay available and protected.',
    capabilities: [
      'Cloud and hybrid infrastructure',
      'Backup and disaster recovery',
      'Infrastructure monitoring'
    ],
    useCases: [
      'Cloud adoption and migration',
      'Hybrid environment security',
      'Backup and recovery readiness'
    ]
  },

  /* ---------- E. Cyber Resilience & Recovery ---------- */
  {
    id: 'resilience-assessment', cat: 'resilience', sub: 'Resilience', name: 'Cyber Resilience Assessment',
    tagline: 'Measure your ability to withstand and recover.',
    short: 'Assessment of resilience posture and continuity readiness.',
    full: 'Cyber Resilience Assessment evaluates how well an organization can maintain operations and recover services during disruptions or incidents. We review resilience architecture and continuity readiness to identify where recovery can be strengthened.',
    capabilities: [
      'Cyber resilience assessment',
      'Resilience architecture review',
      'Business continuity support'
    ],
    useCases: [
      'Resilience posture review',
      'Continuity planning',
      'Recovery readiness improvement'
    ]
  },
  {
    id: 'disaster-cyber-recovery', cat: 'resilience', sub: 'Recovery', name: 'Disaster & Cyber Recovery',
    tagline: 'Restore services quickly after disruption.',
    short: 'Disaster recovery and cyber recovery capabilities and testing.',
    full: 'Disaster & Cyber Recovery establishes the capability to restore services after disruption or a cyber incident. We help plan, build, and test recovery so that when the unexpected happens, the path back to operations is proven.',
    capabilities: [
      'Disaster recovery',
      'Cyber recovery',
      'Recovery planning and testing'
    ],
    useCases: [
      'Recovery capability build-out',
      'Recovery testing and validation',
      'Minimizing downtime after incidents'
    ]
  },
  {
    id: 'incident-recovery', cat: 'resilience', sub: 'Continuity', name: 'Incident Response & Recovery',
    tagline: 'Keep operating through disruption.',
    short: 'Combined incident response and recovery to sustain operations.',
    full: 'Incident Response & Recovery combines rapid response with structured recovery so organizations can keep operating through disruption. We align response actions with continuity and recovery plans to protect ongoing operations.',
    capabilities: [
      'Incident response and recovery',
      'Business continuity support',
      'Resilience architecture'
    ],
    useCases: [
      'Operational continuity during incidents',
      'Coordinated response and recovery',
      'Resilience-by-design'
    ]
  },

  /* ---------- F. Implementation & Lifecycle Services ---------- */
  {
    id: 'implementation-deployment', cat: 'lifecycle', sub: 'Implementation', name: 'Solution Implementation & Deployment',
    tagline: 'From design to a running, integrated solution.',
    short: 'Implementation, deployment, integration, and configuration services.',
    full: 'Solution Implementation & Deployment delivers designed solutions into running systems. We handle deployment, system integration, configuration, security hardening, and migration so solutions go live cleanly and securely.',
    capabilities: [
      'Solution implementation and system deployment',
      'System integration and configuration',
      'Security hardening',
      'Migration'
    ],
    useCases: [
      'New solution rollout',
      'Secure system deployment',
      'Migration and integration projects'
    ]
  },
  {
    id: 'testing-training', cat: 'lifecycle', sub: 'Enablement', name: 'Testing, Validation & Training',
    tagline: 'Verify it works \u2014 and enable your team to run it.',
    short: 'Testing, validation, training, and knowledge transfer.',
    full: 'Testing, Validation & Training ensures solutions perform as intended and that your team can operate them confidently. We validate deployments and provide training and knowledge transfer for administrators, technical teams, and end users.',
    capabilities: [
      'Testing and validation',
      'Training and knowledge transfer',
      'Operational readiness'
    ],
    useCases: [
      'Go-live validation',
      'Team enablement',
      'Sustainable operations'
    ]
  },
  {
    id: 'maintenance-optimization', cat: 'lifecycle', sub: 'Support', name: 'Maintenance & Optimization',
    tagline: 'Keep systems running, secure, and improving.',
    short: 'Technical support, maintenance, upgrade, and optimization.',
    full: 'Maintenance & Optimization keeps solutions dependable over time. We provide technical support, preventive and corrective maintenance, and ongoing upgrade and optimization to sustain performance, security, and continuous improvement.',
    capabilities: [
      'Technical support',
      'Preventive and corrective maintenance',
      'Upgrade and optimization'
    ],
    useCases: [
      'Ongoing support and SLAs',
      'Performance and security tuning',
      'Continuous improvement of security maturity'
    ]
  },
];
