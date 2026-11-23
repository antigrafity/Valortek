/* =========================================================
   Valortek — capability catalog (single source of truth)
   Positioning: Data, Geospatial, Analytics & Visualization
   solutions for business decision-making.

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
    name: 'Data & Insight Building Blocks',
    tagline: 'Seven building blocks that take information from scattered sources to clear, trusted business insight. Most projects start with the data foundation and add the blocks they need.',
    img: 'assets/img/cat-software.jpg'
  },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- Data Foundation ---------- */
  {
    id: 'data', cat: 'capabilities', sub: 'Data Foundation', name: 'Data Foundation', img: 'assets/img/cap-data.jpg',
    icon: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
    tagline: 'One trusted place for the data your business runs on.',
    short: 'Consolidate data from applications, files, and business units into a governed platform with consistent definitions and quality checks.',
    full: 'Reports only agree when the data underneath them agrees. We consolidate information from your applications, spreadsheets, and departmental systems into a single data platform, define common terms, and put quality rules in place, so every team works from the same numbers.',
    capabilities: [
      'Data Consolidation — bring data from ERP, CRM, finance, operational applications, and files into one platform.',
      'Data Warehouse & Data Lake — design storage that fits your data volume, reporting needs, and budget.',
      'Master Data — create consistent records for customers, products, locations, and facilities across systems.',
      'Data Quality Rules — detect duplicates, gaps, and inconsistencies before they reach a report.',
      'Data Governance — define ownership, definitions, access rights, and retention policies.',
      'Data Catalog — document what data exists, where it comes from, and how it may be used.'
    ],
    challenges: [
      'Different departments report different figures for the same metric.',
      'Staff spend hours each month copying and reconciling spreadsheets.',
      'Nobody is sure which version of a dataset is correct.',
      'New dashboards or applications are delayed because data is hard to obtain.',
      'Data ownership and access rights are unclear.'
    ],
    value: 'A governed data foundation reduces manual reconciliation, shortens reporting cycles, and gives management confidence that the numbers they see are accurate. It also makes every later project, from dashboards to maps, faster and cheaper to deliver.',
    useCases: [
      'Consolidating sales, finance, and operational data for monthly management reporting.',
      'Creating a single customer or facility register shared by several departments.',
      'Replacing spreadsheet-based reporting with automated data pipelines.',
      'Preparing clean, structured data for dashboards and geospatial applications.',
      'Setting up data access policies that match organizational roles.'
    ],
    integration: 'The data foundation feeds every other building block. Analytics, maps, 3D views, and digital forms all draw from it, which is why we usually start here.',
    cta: 'Discuss Your Data Foundation'
  },

  /* ---------- Geospatial ---------- */
  {
    id: 'geospatial', cat: 'capabilities', sub: 'Geospatial Solutions', name: 'Geospatial Solutions', img: 'assets/img/cap-geospatial.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    tagline: 'Put your business data on the map.',
    short: 'Web GIS, spatial databases, and map-based applications that present facilities, service areas, and infrastructure in their geographic context.',
    full: 'Many business questions are really questions about place: which branches perform best, where demand is growing, which facilities need maintenance, or how far customers are from a service point. We build GIS platforms and map-based applications that connect your business records to an accurate map, so these questions can be answered visually.',
    capabilities: [
      'Web GIS Platforms — browser-based maps that authorized staff can view and update without specialist software.',
      'Spatial Databases — store and manage location data alongside your business records.',
      'Mobile Data Collection — capture field data and photos with location directly into the platform.',
      'Spatial Analysis — catchment areas, coverage, distance, and density analysis for planning.',
      'Asset & Facility Registers — map-based inventories of buildings, land, utilities, and equipment.',
      'Map Integration — connect maps with dashboards, workflows, and existing enterprise applications.'
    ],
    challenges: [
      'Facility and land records are kept in tables with no map reference.',
      'Location data is held by a separate team and is hard for others to use.',
      'Planning decisions about new sites or service areas rely on assumptions.',
      'Field data arrives late, on paper, or without accurate coordinates.',
      'Existing maps are static files that are quickly out of date.'
    ],
    value: 'Seeing data in its geographic context makes patterns obvious that are invisible in tables. Organizations use it to plan new locations, prioritize maintenance, balance service coverage, and present information clearly to stakeholders.',
    useCases: [
      'Branch, outlet, or service-point performance mapping.',
      'Land, building, and utility asset registers with maintenance history.',
      'Market and catchment-area analysis for expansion planning.',
      'Infrastructure and project progress mapping for management reporting.',
      'Mobile field surveys that update the central map directly.'
    ],
    integration: 'Maps become far more useful when they draw on the data foundation and feed analytics dashboards and 3D visualization. We design them to work together from the start.',
    cta: 'Discuss Your Mapping Needs'
  },

  /* ---------- Analytics ---------- */
  {
    id: 'analytics', cat: 'capabilities', sub: 'Analytics & Insight', name: 'Analytics & Insight', img: 'assets/img/cap-analytics.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/></svg>',
    tagline: 'Answers to management questions, without waiting for a report.',
    short: 'Dashboards, KPI tracking, trend analysis, and alerts that answer the questions management actually asks, without waiting for manual reports.',
    full: 'Good analytics starts with the questions people need answered, not with charts. We work with each team to define its key questions and KPIs, then build dashboards and analytical models on top of your data foundation that update automatically and can be trusted.',
    capabilities: [
      'KPI Definition — agree on clear, measurable indicators with each business owner.',
      'Executive Dashboards — concise views of organizational performance for leadership.',
      'Operational Dashboards — daily views for managers and teams, with drill-down to detail.',
      'Trend & Variance Analysis — compare actuals with targets, history, and forecasts.',
      'Automated Alerts — notify the right people when a KPI moves outside its expected range.',
      'Self-Service Reporting — let trained users explore data without IT support.'
    ],
    challenges: [
      'Monthly reports take days to prepare and are outdated on arrival.',
      'Management meetings are spent debating whose numbers are right.',
      'Performance problems are noticed too late to act on.',
      'Existing dashboards are rarely used because they do not answer real questions.',
      'Analysts spend more time preparing data than analyzing it.'
    ],
    value: 'Well-designed analytics shortens the time between something happening and someone acting on it. It also frees analysts from repetitive reporting so they can focus on deeper questions.',
    useCases: [
      'Executive performance dashboards for board and management meetings.',
      'Sales, revenue, and cost tracking by region, product, or branch.',
      'Project portfolio and budget monitoring.',
      'Service-level and customer-satisfaction reporting.',
      'Location-based performance analysis combined with geospatial data.'
    ],
    integration: 'Analytics depends on clean data from the foundation and becomes more powerful when combined with maps and visualization. We build all three on a shared data model.',
    cta: 'Turn Your Data Into Answers'
  },

  /* ---------- Immersive & Visualization ---------- */
  {
    id: 'immersive', cat: 'capabilities', sub: 'Immersive & Visualization', name: 'Immersive & Visualization Solutions', img: 'assets/img/cap-immersive.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    tagline: 'Make complex facilities and projects easy to understand.',
    short: '3D models, digital twins, and interactive presentations that make complex facilities and projects easy to understand at a glance.',
    full: 'Some information is hard to grasp from tables or flat maps: the layout of a large facility, the progress of a construction project, or how a planned development will look on site. We create 3D models, digital twins, and interactive presentations connected to your data, so stakeholders can understand them quickly.',
    capabilities: [
      '3D Modeling — accurate models of buildings, facilities, and sites.',
      'Digital Twins — 3D models linked to live data such as occupancy, maintenance status, or energy use.',
      'Interactive Presentations — touch-screen and web experiences for exhibitions, showrooms, and stakeholder briefings.',
      'Virtual Tours — navigable walkthroughs of facilities and planned developments.',
      'Data Visualization Design — custom charts and visual layouts for complex datasets.',
      'Large-Format Displays — content designed for meeting rooms, lobbies, and visitor centers.'
    ],
    challenges: [
      'Stakeholders struggle to understand technical drawings or plans.',
      'Facility information is spread across drawings, documents, and systems.',
      'Project progress is hard to communicate to management and investors.',
      'Onboarding new staff to large or complex sites takes too long.',
      'Standard charts cannot convey the full picture of complex data.'
    ],
    value: 'Visual, interactive information shortens explanations, improves stakeholder buy-in, and reduces misunderstandings in planning and facility management.',
    useCases: [
      'Digital twins of office buildings, campuses, or industrial facilities for facility management.',
      '3D visualization of property and infrastructure development projects.',
      'Interactive company or product presentations for exhibitions and showrooms.',
      'Virtual site tours for staff onboarding and visitor orientation.',
      'Visual dashboards for meeting rooms and executive briefings.'
    ],
    integration: 'Visualization is most valuable when connected to the data foundation, maps, and analytics, so what people see is always current.',
    cta: 'Explore Visualization Options'
  },

  /* ---------- Digital Transformation ---------- */
  {
    id: 'digital', cat: 'capabilities', sub: 'Digital Transformation', name: 'Digital Transformation', img: 'assets/img/cap-digital.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/><circle cx="12" cy="12" r="3"/></svg>',
    tagline: 'Capture data digitally, at the source.',
    short: 'Replace paper forms and spreadsheet workflows with digital data capture, so information enters the platform clean and on time.',
    full: 'Most data quality problems start at the point of entry: paper forms, emailed spreadsheets, and manual re-typing. We digitize these workflows with web and mobile forms, approvals, and integrations, so information is captured once, validated immediately, and flows straight into your data platform.',
    capabilities: [
      'Digital Forms — web and mobile forms with validation, photos, and location.',
      'Workflow & Approvals — route requests and documents to the right people automatically.',
      'Process Mapping — document current workflows and identify where data is lost or delayed.',
      'Application Integration — connect new digital workflows with existing systems.',
      'Document Digitization — convert archives into searchable, structured records.',
      'User Adoption Support — training and guides that help teams switch from paper to digital.'
    ],
    challenges: [
      'Reports depend on paper forms or spreadsheets sent by email.',
      'The same data is typed into several systems by different people.',
      'Approvals are slow and hard to trace.',
      'Archived documents are difficult to search.',
      'Previous digital initiatives were not adopted by users.'
    ],
    value: 'Digital capture improves data quality at the source, shortens process cycle times, and gives management real-time visibility into workflows that used to be invisible.',
    useCases: [
      'Mobile inspection and maintenance checklists.',
      'Digital request, approval, and procurement workflows.',
      'Field survey forms that update maps and dashboards automatically.',
      'Digitization of land, asset, or personnel records.',
      'Integration of new applications with existing finance or HR systems.'
    ],
    integration: 'Digital workflows feed clean data into the foundation, and their performance can be measured through analytics dashboards.',
    cta: 'Discuss Your Workflow Needs'
  },

  /* ---------- Cyber Security ---------- */
  {
    id: 'cyber', cat: 'capabilities', sub: 'Cyber Security', name: 'Cyber Security', img: 'assets/img/cap-cyber.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    tagline: 'Protect the data you have worked hard to organize.',
    short: 'Role-based access, encryption, and security reviews that protect business data and keep it accessible only to authorized users.',
    full: 'Consolidating data creates value, and it also raises the stakes for protecting it. We design security into every data platform we deliver and help organizations review and strengthen protection for their existing data and applications, in line with good practice and applicable regulations such as Indonesia’s Personal Data Protection Law (UU PDP).',
    capabilities: [
      'Access Management — role-based permissions so users see only the data they need.',
      'Data Protection — encryption, masking, and secure handling of personal and sensitive data.',
      'Security Assessment — review of applications, data platforms, and configurations against good practice.',
      'Compliance Support — help aligning data practices with UU PDP and internal policies.',
      'Audit Logging — records of who accessed or changed data, and when.',
      'Security Awareness — practical guidance for staff who handle business data.'
    ],
    challenges: [
      'Too many people have access to sensitive data.',
      'Personal data is stored without clear protection or retention rules.',
      'There is no record of who accessed or changed important data.',
      'Preparing for UU PDP compliance without a clear starting point.',
      'Security is considered only after a system goes live.'
    ],
    value: 'Built-in security protects the organization’s reputation, supports regulatory compliance, and gives stakeholders confidence to share and use data more widely.',
    useCases: [
      'Access control design for a new data platform or dashboard.',
      'Personal data inventory and protection review.',
      'Security assessment of existing business applications.',
      'Audit trail implementation for sensitive records.',
      'Data protection policies and staff guidance.'
    ],
    integration: 'Security is applied across every building block, from the data foundation to dashboards and mobile forms, rather than added at the end.',
    cta: 'Review Your Data Security'
  },

  /* ---------- Cyber Resilience ---------- */
  {
    id: 'resilience', cat: 'capabilities', sub: 'Cyber Resilience', name: 'Cyber Resilience', img: 'assets/img/cap-resilience.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>',
    tagline: 'Keep your data and dashboards available when something goes wrong.',
    short: 'Backup, recovery, and continuity planning so your data platform and dashboards stay available when something goes wrong.',
    full: 'Once teams rely on a data platform every day, downtime and data loss become business problems. We help organizations plan backups, test recovery, and prepare continuity procedures so critical data and reporting can be restored quickly after a system failure, outage, or other disruption.',
    capabilities: [
      'Backup Strategy — define what to back up, how often, and where.',
      'Recovery Testing — regularly verify that data and systems can actually be restored.',
      'Continuity Planning — documented procedures for keeping key reporting running during an outage.',
      'Dependency Mapping — identify which systems and data each business process relies on.',
      'Recovery Priorities — agree which data and services must be restored first.',
      'Post-Event Review — learn from each disruption and improve the plan.'
    ],
    challenges: [
      'Backups exist but have never been tested.',
      'It is unclear how long recovery would take after a system failure.',
      'Critical reports stop when a single server or application is unavailable.',
      'No agreed order for restoring systems after an outage.',
      'Continuity plans are outdated or exist only on paper.'
    ],
    value: 'Tested backup and recovery reduce downtime, protect against data loss, and give management confidence that critical information will be available when it is needed.',
    useCases: [
      'Backup and recovery design for a new data platform.',
      'Recovery testing for existing business applications.',
      'Continuity procedures for management reporting.',
      'Mapping system dependencies for critical business processes.',
      'Annual review and update of recovery plans.'
    ],
    integration: 'Resilience complements cyber security: security reduces the chance of a problem, resilience reduces its impact. We plan both together for every platform we deliver.',
    cta: 'Strengthen Your Recovery Plan'
  },
];
