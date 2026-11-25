/* Valortek catalog.
   To add a product or service: copy one entry in VALORTEK_PRODUCTS, give it a new id,
   pick a cat from VALORTEK_CATEGORIES, and set type to 'Hardware', 'Software', or 'Service'.
   It then appears in the menu, the catalog, its own detail page, and the contact form.
   Optional fields: specs (list of [label, value]), faq (list of [question, answer]). */
window.VALORTEK_CATEGORIES = [
  { id: 'operations', name: 'Run Operations', tagline: 'Tools and devices that make daily work faster and less manual.', img: 'assets/img/cap-digital.jpg' },
  { id: 'insight', name: 'See & Decide', tagline: 'Data, maps, and AI that turn information into decisions.', img: 'assets/img/cap-analytics.jpg' },
  { id: 'customers', name: 'Serve Customers', tagline: 'Portals, kiosks, and screens for the people you sell to.', img: 'assets/img/service-software.jpg' },
  { id: 'protect', name: 'Stay Protected', tagline: 'Cloud, security, and backup that keep everything running.', img: 'assets/img/cap-resilience.jpg' },
];

window.VALORTEK_PRODUCTS = [
  {
    id: 'apps', cat: 'operations', type: 'Software', sub: 'Custom Business Applications', name: 'Custom Business Applications', img: 'assets/img/service-software.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14l-2 2 2 2M16 14l2 2-2 2"/></svg>',
    tagline: 'Software shaped around the way your team already works.',
    short: 'Web and internal applications built for your own process, for when off-the-shelf software forces you to work around it.',
    full: 'Most companies run at least one important process on a mix of spreadsheets, chat groups, and an old system nobody wants to touch. Packaged software rarely fits, so people work around it. We build applications that follow your process instead: approvals, orders, inventory, scheduling, customer portals, whatever the business actually needs. We start small, get a working version in front of real users quickly, and keep improving it from there.',
    capabilities: [
      'Internal tools for operations, finance, HR, and sales teams.',
      'Customer and partner portals with their own logins and access levels.',
      'Replacing or rebuilding an aging system without stopping daily work.',
      'Connecting the new application to the systems you already use.',
      'Clean, documented code that your own team or another vendor can maintain.',
      'Ongoing improvements after launch, based on how people actually use it.'
    ],
    challenges: [
      'A key process depends on one spreadsheet and one person who understands it.',
      'The software you bought covers 70% of the need, and the rest is done by hand.',
      'An old system is slow, hard to change, and the original developer is gone.',
      'Customers or partners keep asking for status updates by phone or chat.'
    ],
    value: 'A tool that fits the process removes the workarounds. Work moves faster, mistakes drop, and the knowledge that used to sit in one person\'s head becomes part of the system.',
    useCases: [
      'A purchase request and approval app that replaces email chains.',
      'A dealer portal where partners place orders and check stock themselves.',
      'A scheduling system for technicians, rooms, or vehicles.',
      'A rebuild of a legacy desktop application as a web application.'
    ],
    integration: 'Applications we build can feed the Data Platform & Dashboards solution directly, and pair well with Field & Mobile Apps when part of the work happens outside the office.',
    faq: [
      ['How long does a first version take?', 'For a focused tool, usually six to ten weeks to a version people can use. Bigger systems are split into phases so you are not waiting months for anything.'],
      ['Who owns the code?', 'You do. We hand over the source code, documentation, and access to everything we set up.'],
      ['Can you work with our existing developer?', 'Yes. We can take one part of the work, review existing code, or work alongside your team.']
    ],
    cta: 'Talk About Your Application'
  },
  {
    id: 'digital', cat: 'operations', type: 'Software', sub: 'Field & Mobile Apps', name: 'Field & Mobile Apps', img: 'assets/img/cap-digital.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>',
    tagline: 'For the people who do their work away from a desk.',
    short: 'Mobile apps for inspections, deliveries, sales visits, and site reports, including places where the signal is weak.',
    full: 'A lot of important information starts in the field: a technician\'s inspection, a salesperson\'s visit, a driver\'s proof of delivery. When it is collected on paper or sent as photos in a chat group, it arrives late and incomplete. We build mobile apps that make it quick to record the right information on the spot, work offline when there is no signal, and send everything to the office the moment a connection is back.',
    capabilities: [
      'Android and iOS apps, or a mobile web app when that is enough.',
      'Offline mode with automatic sync when the connection returns.',
      'Photos, signatures, barcodes, and GPS location attached to each record.',
      'Forms that check answers on entry, so data arrives complete.',
      'Supervisor view showing who did what, where, and when.',
      'Device rollout, user training, and support after launch.'
    ],
    challenges: [
      'Field reports arrive days late and need to be retyped.',
      'Photos and notes are scattered across personal phones and chat groups.',
      'Nobody can confirm a visit or inspection actually happened.',
      'Teams work in areas with poor or no mobile signal.'
    ],
    value: 'Information from the field reaches the office the same day, already in a usable format. Supervisors spend less time chasing reports and more time acting on them.',
    useCases: [
      'Equipment inspection and maintenance checklists.',
      'Proof of delivery with photo, signature, and location.',
      'Sales visit reports and outlet audits.',
      'Site progress reports for construction or installation work.'
    ],
    integration: 'Data from field apps flows straight into Data Platform & Dashboards, and can be shown on a map through Maps & Location Analytics.',
    faq: [
      ['Does it work without internet?', 'Yes. Records are saved on the device and sent automatically when the phone is back online.'],
      ['Do we need to buy new phones?', 'Usually not. The apps run on ordinary Android or iOS phones your team already has.'],
      ['Can we change the forms later?', 'Yes. Most form changes can be made without releasing a new version of the app.']
    ],
    cta: 'Discuss a Field App'
  },
  {
    id: 'data', cat: 'insight', type: 'Software', sub: 'Data Platform & Dashboards', name: 'Data Platform & Dashboards', img: 'assets/img/cap-analytics.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/></svg>',
    tagline: 'One set of numbers that everyone agrees on.',
    short: 'Bring data from your applications and spreadsheets into one place, then turn it into dashboards that update on their own.',
    full: 'When finance, sales, and operations each bring a different number to the same meeting, the problem is rarely the people. It is that the data lives in separate places and gets reconciled by hand. We connect your sources, clean up the definitions, and build dashboards that refresh automatically. Management gets one version of the truth, and the team that used to compile reports every month gets that time back.',
    capabilities: [
      'Connecting ERP, accounting, CRM, and operational systems.',
      'A central data store sized to your volume and budget.',
      'Agreed definitions for key figures, so everyone reads them the same way.',
      'Dashboards for management, with drill-down for the teams behind them.',
      'Scheduled reports and alerts when a figure moves out of range.',
      'Access rights so each person sees only what they should.'
    ],
    challenges: [
      'Different departments report different figures for the same thing.',
      'Monthly reports take days to put together.',
      'Management decisions wait for data that arrives too late.',
      'Nobody is sure which spreadsheet is the latest one.'
    ],
    value: 'Less time compiling reports, faster decisions, and meetings spent on what to do next rather than on whose number is right.',
    useCases: [
      'A daily sales and margin dashboard across branches.',
      'A monthly management report that builds itself.',
      'Inventory and stock-age monitoring across warehouses.',
      'Project cost tracking against budget.'
    ],
    integration: 'This is usually where other solutions end up: field apps, IoT sensors, and business applications all feed into the same platform.',
    faq: [
      ['Which dashboard tools do you use?', 'We work with the common commercial and open-source tools, and we start with any licenses you already have.'],
      ['Our data is messy. Is that a problem?', 'It is normal. Part of every project is finding and fixing the gaps before anything goes on a dashboard.'],
      ['How soon do we see something?', 'A first dashboard on real data usually takes a few weeks.']
    ],
    cta: 'Book a Data Review'
  },
  {
    id: 'geospatial', cat: 'insight', type: 'Software', sub: 'Maps & Location Analytics', name: 'Maps & Location Analytics', img: 'assets/img/cap-geospatial.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    tagline: 'See your business on a map, not just in a table.',
    short: 'Web maps of your sites, assets, customers, and service areas, connected to the business data behind them.',
    full: 'If your business is spread across many locations, a list of addresses only tells you part of the story. Put the same data on a map and patterns show up quickly: which areas are underserved, which sites are close to each other, where problems keep coming back. We build web maps that sit on top of your existing data and are simple enough for non-specialists to use every day.',
    capabilities: [
      'Web maps of branches, assets, land, or customers.',
      'Linking each point on the map to its records, photos, and history.',
      'Coverage and catchment analysis for planning new locations.',
      'Route and territory views for sales and service teams.',
      'Importing and cleaning up existing map files and coordinates.',
      'Map views embedded in your dashboards and applications.'
    ],
    challenges: [
      'Asset or site data is kept in a spreadsheet with addresses nobody checks.',
      'Expansion decisions are made without a clear view of existing coverage.',
      'Field teams waste time finding locations.',
      'Map files exist, but only one specialist can open them.'
    ],
    value: 'Planning conversations become clearer when everyone is looking at the same map. Location turns into something you can analyze, not just store.',
    useCases: [
      'An asset register for buildings, land, or equipment.',
      'Branch and outlet performance by area.',
      'Service coverage maps for distribution or utilities.',
      'Plantation or field block mapping with productivity data.'
    ],
    integration: 'Works hand in hand with Field & Mobile Apps for collecting locations, and with Data Platform & Dashboards for the numbers behind each point.',
    faq: [
      ['Do we need GIS specialists on our team?', 'No. The maps are built for everyday users. We handle the technical setup.'],
      ['Can you use the map data we already have?', 'Yes. We can bring in existing files, coordinates, and address lists and clean them up.'],
      ['Is this only for large areas?', 'Not at all. It works just as well for one industrial site as for a national network.']
    ],
    cta: 'Talk About Your Map'
  },
  {
    id: 'iot', cat: 'operations', type: 'Hardware', sub: 'IoT & Asset Monitoring', name: 'IoT & Asset Monitoring', img: 'assets/img/cat-connected.jpg',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.5"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/></svg>',
    tagline: 'Know how your equipment is doing without walking over to check.',
    short: 'Sensors and monitoring for machines, cold storage, energy use, and vehicles, with alerts when something needs attention.',
    full: 'Many problems give early warning signs: a machine running hotter than usual, a freezer door left open, a generator using more fuel than it should. Without monitoring, those signs are only noticed after something breaks. We help you pick the right sensors, connect them, and show the readings on one screen, with alerts sent to the right person before a small issue becomes a costly one.',
    capabilities: [
      'Choosing sensors that fit the equipment and the environment.',
      'Temperature, humidity, power, vibration, and location readings.',
      'Live monitoring screens and history for each asset.',
      'Alerts by app, email, or message when readings go out of range.',
      'Usage and condition data for planning maintenance.',
      'Connecting monitoring data to existing maintenance or ERP systems.'
    ],
    challenges: [
      'Equipment failures are only discovered after they cause downtime.',
      'Readings are written down by hand once a shift, if at all.',
      'Energy bills are high but nobody knows where the power goes.',
      'Goods are lost because storage conditions were not checked in time.'
    ],
    value: 'Fewer surprises, less unplanned downtime, and maintenance based on actual condition rather than guesswork or a fixed calendar.',
    useCases: [
      'Cold-chain monitoring for warehouses and delivery trucks.',
      'Energy monitoring per building, floor, or production line.',
      'Condition monitoring for pumps, motors, and generators.',
      'Vehicle and equipment location tracking.'
    ],
    integration: 'Sensor data feeds Data Platform & Dashboards for trends and reporting, and Maps & Location Analytics when assets are spread across sites.',
    faq: [
      ['Do we have to replace our machines?', 'No. In most cases sensors are added to existing equipment.'],
      ['What if the site has no internet?', 'There are options that work over mobile networks or long-range radio. We check this during the site review.'],
      ['Can we start with a few machines?', 'Yes, and we recommend it. A small pilot shows what is worth monitoring before you scale up.']
    ],
    cta: 'Plan a Monitoring Pilot'
  },
  {
    id: 'automation', cat: 'operations', type: 'Software', sub: 'Workflow Automation & Integration', name: 'Workflow Automation & Integration', img: 'assets/img/service-integration.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M4 7h11l-3-3M20 17H9l3 3"/><circle cx="18" cy="7" r="2"/><circle cx="6" cy="17" r="2"/></svg>',
    tagline: 'Let your systems talk to each other so people don\'t have to.',
    short: 'Connect the applications you already use and automate the repetitive steps between them.',
    full: 'A surprising amount of office time goes into copying data from one system to another: orders from email into the ERP, invoices into accounting, new employees into five different tools. Each step is small, but together they eat hours every week and create errors. We connect your systems and automate those steps, so data moves on its own and people only step in when a decision is needed.',
    capabilities: [
      'Integration between ERP, accounting, CRM, e-commerce, and HR systems.',
      'Digital approval flows with clear status and history.',
      'Automatic document generation: quotations, letters, and reports.',
      'Scheduled data transfers and checks between systems.',
      'Notifications to the right person at the right step.',
      'Monitoring so you know when an integration stops working.'
    ],
    challenges: [
      'Staff spend hours retyping the same data into different systems.',
      'Approvals get stuck because nobody knows whose turn it is.',
      'Errors creep in every time data is copied by hand.',
      'Systems from different vendors don\'t share information.'
    ],
    value: 'Hours of manual work handed back to your team every week, fewer copy-paste errors, and processes that keep moving even when someone is out of the office.',
    useCases: [
      'Online orders flowing straight into stock and accounting.',
      'Employee onboarding that sets up accounts across all tools.',
      'Purchase approvals with automatic budget checks.',
      'Daily reconciliation between bank statements and the ledger.'
    ],
    integration: 'Often the first step before Data Platform & Dashboards, and a natural partner to Custom Business Applications when a process needs a new screen.',
    faq: [
      ['Our systems are from different vendors. Can they still connect?', 'Usually yes, through their APIs, database exports, or file exchanges. We check each one before promising anything.'],
      ['What happens if one system is down?', 'The integration waits and retries, and someone gets notified if it can\'t recover.'],
      ['Is this the same as RPA?', 'Sometimes we use RPA, but we prefer direct integrations where possible because they break less often.']
    ],
    cta: 'Map Out Your Workflow'
  },
  {
    id: 'ai', cat: 'insight', type: 'Software', sub: 'AI for Documents & Everyday Work', name: 'AI for Documents & Everyday Work', img: 'assets/img/cap-data.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>',
    tagline: 'Practical AI for the paperwork that slows everyone down.',
    short: 'Read invoices, contracts, and forms automatically, search internal documents in plain language, and draft routine replies.',
    full: 'AI is most useful when it takes over the dull, repetitive parts of the job. We focus on practical uses with a clear payback: pulling data out of invoices and forms, finding the right clause in a pile of contracts, answering common internal questions from your own documents. Every solution keeps a person in the loop for anything that matters, and your data stays under your control.',
    capabilities: [
      'Extracting data from invoices, receipts, and scanned forms.',
      'Searching company documents by asking questions in plain language.',
      'Summarizing long reports, contracts, and meeting notes.',
      'Drafting routine emails and replies for staff to review.',
      'Sorting and routing incoming documents and requests.',
      'Clear rules on what data the AI can and cannot access.'
    ],
    challenges: [
      'Staff retype data from hundreds of documents every month.',
      'Finding information in old files takes longer than it should.',
      'The same internal questions get asked again and again.',
      'You want to use AI, but not by sending company data to unknown tools.'
    ],
    value: 'Less time on paperwork and searching, faster turnaround on documents, and an AI setup your management can actually approve.',
    useCases: [
      'Invoice data captured straight into the accounting system.',
      'An internal assistant that answers policy and procedure questions.',
      'Contract review support that flags key dates and terms.',
      'Customer email sorting and draft replies for the service team.'
    ],
    integration: 'Works well with Workflow Automation & Integration, which carries the extracted data to the right system, and with Custom Business Applications.',
    faq: [
      ['Will our data be used to train public AI models?', 'No. We set up the solution so your documents stay private, and we explain exactly where data is processed.'],
      ['How accurate is it?', 'It depends on the documents. We measure accuracy on your own samples during a pilot, and people review anything below a set confidence level.'],
      ['Do we need a big budget?', 'No. A focused pilot on one document type is usually the best way to start.']
    ],
    cta: 'Try an AI Pilot'
  },
  {
    id: 'immersive', cat: 'insight', type: 'Service', sub: '3D & Digital Twins', name: '3D & Digital Twins', img: 'assets/img/cap-immersive.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    tagline: 'Show a building or site in a way anyone can understand.',
    short: '3D models of buildings, plants, and project sites, linked to live data for operations and presentations.',
    full: 'Drawings and spreadsheets are hard to read for anyone who isn\'t an engineer. A 3D model makes a building, plant, or project site easy to understand at a glance, whether you are presenting to investors or helping a facility team find the right valve. We build 3D models and connect them to your maintenance, occupancy, or sensor data, so the model stays useful long after the presentation is over.',
    capabilities: [
      '3D models from drawings, scans, or site surveys.',
      'Interactive web viewers that run in a normal browser.',
      'Linking rooms, equipment, and areas to their records.',
      'Showing sensor or occupancy data on the model.',
      'Before-and-after views for planned changes.',
      'Presentation versions for sales, investors, or stakeholders.'
    ],
    challenges: [
      'Stakeholders struggle to picture a project from 2D drawings.',
      'Facility teams lose time locating equipment and records.',
      'Information about a building is spread across many files.',
      'Planned changes are hard to explain before they are built.'
    ],
    value: 'Faster agreement on plans, clearer presentations, and a single visual reference for everyone who manages the site.',
    useCases: [
      'Property development presentations and virtual tours.',
      'Facility models linked to maintenance history.',
      'Plant layout planning before equipment is moved.',
      'Office space and occupancy planning.'
    ],
    integration: 'Pulls live readings from IoT & Asset Monitoring and records from Data Platform & Dashboards.',
    faq: [
      ['Do we need special hardware to view it?', 'No. The models open in a normal web browser on a laptop or tablet.'],
      ['We only have PDF drawings. Is that enough?', 'Often yes. If more detail is needed, we can arrange a site survey or scan.'],
      ['Can the model be updated later?', 'Yes. We hand over the files so the model can grow with the site.']
    ],
    cta: 'Discuss a 3D Project'
  },
  {
    id: 'cloud', cat: 'protect', type: 'Service', sub: 'Cloud, Security & Backup', name: 'Cloud, Security & Backup', img: 'assets/img/cap-resilience.jpg',
    icon: '<svg viewBox="0 0 24 24"><path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/><path d="M10 14l1.5 1.5L15 12"/></svg>',
    tagline: 'A solid base under everything else you run.',
    short: 'Moving applications to the cloud, setting up access and security properly, and making sure data can be restored when something goes wrong.',
    full: 'New applications and dashboards are only as reliable as what they run on. We help you decide what belongs in the cloud and what should stay on-site, move it carefully, and set it up so it is secure and affordable to run. Backups are tested, not just scheduled, and access is limited to the people who need it. The goal is simple: things keep working, and if they don\'t, you can recover quickly.',
    capabilities: [
      'Cloud readiness review and migration planning.',
      'Moving applications and data with minimal downtime.',
      'User access, multi-factor login, and permission reviews.',
      'Backup setup with regular restore tests.',
      'Cost reviews to stop paying for unused cloud resources.',
      'Recovery plans for your most important systems.'
    ],
    challenges: [
      'Servers in the office are old and nobody wants to touch them.',
      'Cloud bills keep growing without a clear reason.',
      'Former employees still have access to company systems.',
      'Backups exist, but nobody has checked whether they restore.'
    ],
    value: 'Fewer outages, lower running costs, and confidence that a hardware failure or mistake won\'t take the business offline for days.',
    useCases: [
      'Moving an on-premise application to a cloud provider.',
      'Setting up company-wide sign-in with multi-factor login.',
      'Monthly backup restore tests with a short written report.',
      'A cloud cost review that trims unused resources.'
    ],
    integration: 'Every other solution runs on this foundation. We plan it alongside new applications so they start out secure and backed up.',
    faq: [
      ['Should everything move to the cloud?', 'Not necessarily. Some systems are cheaper or simpler to keep on-site. We recommend case by case.'],
      ['Which cloud providers do you work with?', 'The major international providers and local data centers. The choice depends on cost, regulation, and where your users are.'],
      ['Can you look after it after the migration?', 'Yes, through a support agreement, or we can hand it over to your IT team with full documentation.']
    ],
    cta: 'Review Your Setup'
  },

  {
    id: 'devices', cat: 'operations', type: 'Hardware', sub: 'Rugged Tablets & Field Devices', name: 'Rugged Tablets & Field Devices', img: 'assets/img/cap-digital.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 18h6M8 7h8"/></svg>',
    tagline: 'Devices that survive the places your team actually works.',
    short: 'Rugged tablets, handheld scanners, and printers for warehouses, sites, and field teams, supplied and set up with your apps.',
    full: 'Consumer phones crack, overheat, and run out of battery halfway through a shift. We supply rugged tablets, barcode scanners, mobile printers, and accessories chosen for your environment, then load them with your apps, lock them down, and hand them over ready to use. When something breaks, we handle the repair or swap.',
    capabilities: ['Rugged tablets and phones for outdoor and industrial use.', 'Handheld barcode and RFID scanners.', 'Mobile receipt and label printers.', 'Device setup with your apps and settings preloaded.', 'Central management to lock, update, or wipe devices.', 'Repair and replacement handling.'],
    challenges: ['Staff phones break or go missing in the field.', 'Scanning and printing slow down every delivery or stock count.', 'Each device is set up differently and nobody tracks them.', 'Batteries do not last a full shift.'],
    value: 'Fewer broken devices, faster scanning and printing, and a fleet you can manage from one place.',
    useCases: ['Scanners and printers for a warehouse team.', 'Rugged tablets for site inspections.', 'Proof-of-delivery devices for drivers.', 'Shared tablets for a production line.'],
    integration: 'Pairs with Field & Mobile Apps, and feeds data into Data Platform & Dashboards.',
    specs: [['Supply', 'New devices from major manufacturers'], ['Setup', 'Apps, accounts, and security preloaded'], ['Support', 'Repair, swap, and warranty handling']],
    faq: [['Can you work with devices we already own?', 'Yes. We can manage existing devices and add new ones over time.'], ['Do you offer rental?', 'Ask us. For some projects, rental or installment options make more sense than buying.']],
    cta: 'Ask About Devices'
  },
  {
    id: 'portals', cat: 'customers', type: 'Software', sub: 'Customer & Dealer Portals', name: 'Customer & Dealer Portals', img: 'assets/img/service-software.jpg',
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5"/></svg>',
    tagline: 'Let customers help themselves, any time of day.',
    short: 'Online portals where customers and dealers place orders, track deliveries, download invoices, and raise requests.',
    full: 'Every order status asked by phone and every invoice resent by email is time your team could spend elsewhere. A portal gives customers and dealers their own login to see prices, place orders, track deliveries, and download documents, with the information coming straight from your existing systems.',
    capabilities: ['Online ordering with customer-specific prices.', 'Order and delivery tracking.', 'Invoice and document downloads.', 'Service and complaint requests.', 'Connection to your ERP or accounting system.', 'Mobile-friendly design.'],
    challenges: ['The sales team spends hours answering status questions.', 'Orders arrive by chat and are retyped.', 'Dealers ask for the same documents again and again.', 'Customers want to order outside office hours.'],
    value: 'Fewer calls and messages, cleaner orders, and customers who can get what they need without waiting.',
    useCases: ['A dealer ordering portal for a distributor.', 'A customer account area for a service company.', 'A spare-parts ordering site.', 'A complaint and warranty tracking portal.'],
    integration: 'Connects to Workflow Automation & Integration so orders flow straight into your back office.',
    faq: [['Will it work with our ERP?', 'Usually yes. We check the connection options before quoting.'], ['Can each dealer see different prices?', 'Yes. Prices, products, and documents can be set per customer.']],
    cta: 'Plan a Portal'
  },
  {
    id: 'kiosks', cat: 'customers', type: 'Hardware', sub: 'Kiosks & Digital Signage', name: 'Kiosks & Digital Signage', img: 'assets/img/cap-immersive.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="12" rx="1.5"/><path d="M12 15v6M8 21h8"/></svg>',
    tagline: 'Screens that inform, queue, and sell for you.',
    short: 'Self-service kiosks, queue systems, and digital signage for lobbies, outlets, and showrooms, with content you can update remotely.',
    full: 'Printed posters go out of date and front desks get crowded. We supply and install self-service kiosks, queue displays, and digital signage screens, connect them to a simple content system, and set them up so your team can change what is shown from a browser, across one site or a hundred.',
    capabilities: ['Self-service kiosks for check-in, ordering, or registration.', 'Queue number and calling displays.', 'Digital signage screens and video walls.', 'Remote content scheduling across locations.', 'Installation, mounting, and cabling.', 'Maintenance and screen health monitoring.'],
    challenges: ['Long queues at the front desk or counter.', 'Promotions are printed and quickly outdated.', 'Each outlet shows different, unmanaged content.', 'Visitors cannot find information without asking staff.'],
    value: 'Shorter queues, consistent messaging across every location, and content that changes in minutes instead of weeks.',
    useCases: ['A visitor check-in kiosk for an office lobby.', 'Queue displays for a service center.', 'Menu and promotion screens across outlets.', 'Product showcase screens in a showroom.'],
    integration: 'Kiosks can feed Customer & Dealer Portals and Data Platform & Dashboards with visit and order data.',
    specs: [['Formats', 'Floor-standing, wall-mounted, and countertop'], ['Content', 'Updated remotely from a browser'], ['Service', 'Installation and maintenance included on request']],
    faq: [['Can you install in several cities?', 'Yes. We plan rollouts across multiple locations.'], ['Can we use our own content?', 'Yes. Your team uploads and schedules it, or we can do it for you.']],
    cta: 'Discuss a Kiosk or Screen'
  },
  {
    id: 'identity', cat: 'protect', type: 'Software', sub: 'Access & Identity Management', name: 'Access & Identity Management', img: 'assets/img/cap-cyber.jpg',
    icon: '<svg viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
    tagline: 'The right people in, everyone else out.',
    short: 'One sign-in for company systems, multi-factor login, and a clear record of who can access what.',
    full: 'As companies add applications, passwords multiply and former employees keep access longer than they should. We set up single sign-on, multi-factor login, and simple processes for adding and removing people, so access is controlled from one place and reviewed regularly.',
    capabilities: ['Single sign-on across business applications.', 'Multi-factor login for staff and partners.', 'Joiner and leaver processes.', 'Role-based access rules.', 'Regular access reviews and reports.', 'Password manager rollout.'],
    challenges: ['Staff juggle too many passwords.', 'Former employees still have accounts.', 'Nobody can say who has access to what.', 'Auditors ask for access records you cannot produce.'],
    value: 'Less password hassle, faster onboarding, and access you can prove is under control.',
    useCases: ['Company-wide single sign-on.', 'Multi-factor login for remote access.', 'Automatic account removal when staff leave.', 'Quarterly access review reports.'],
    integration: 'Part of the Cloud, Security & Backup foundation, and protects every other solution in the catalog.',
    faq: [['Does this work with Microsoft 365 or Google Workspace?', 'Yes, and with most modern business applications.'], ['Is it hard for staff?', 'Most find it easier: one sign-in instead of many passwords.']],
    cta: 'Tighten Access Control'
  },
];
