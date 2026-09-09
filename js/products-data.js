/* =========================================================
   Valortek — product catalog data (single source of truth)
   Used by products.html (listing/search) and product.html (detail)
   Positioning: enterprise / commercial / civilian technology.
   NOTE: Product names & subtitles are kept exactly as-is.
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  { id: 'software', name: 'Software & Digital Platforms', tagline: 'Applications, platforms, workflow tools, dashboards, and digital services designed around real organizational needs.', img: 'assets/img/portable.png' },
  { id: 'data',      name: 'Data & Analytics',            tagline: 'Data integration, processing, visualization, reporting, and AI-enabled tools that support better business decisions.', img: 'assets/img/dmi.jpg' },
  { id: 'connected', name: 'Connected Systems',           tagline: 'Connected devices, electronic systems, sensors, and integrated technologies for reliable information flow and equipment visibility.', img: 'assets/img/geofence.png' },
  { id: 'cyber',     name: 'Cybersecurity & Resilience',   tagline: 'Defensive security, secure architecture, monitoring, risk management, and technology resilience for business continuity.', img: 'assets/img/cyber.jpg' },
  { id: 'immersive', name: 'Immersive Technology & Training', tagline: 'Interactive and immersive technology for technical learning, product familiarization, visualization, and professional training.', img: 'assets/img/immersive.jpg' },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- Software & Digital Platforms ---------- */
  {
    id: 'brahma', cat: 'software', sub: 'BRAHMA', name: 'Broadcast WhatsApp Massive',
    short: 'Large-scale messaging platform for WhatsApp and Telegram communications.',
    full: 'BRAHMA (Broadcast WhatsApp Massive) is a messaging platform designed to help organizations deliver notifications, announcements, and customer engagement messages at scale across WhatsApp and Telegram. It supports audience segmentation, scheduled delivery, and message management to streamline organizational communications.'
  },

  /* ---------- Data & Analytics ---------- */
  {
    id: 'follow-the-dots', cat: 'data', sub: 'Follow the Dots', name: 'Movement Analysis',
    short: 'Movement and pattern analytics for logistics and operational planning.',
    full: 'Follow the Dots is a data analytics solution designed to help organizations understand movement and positional patterns from authorized datasets. It supports logistics planning, service coverage analysis, and operational reporting through clear visualization of movement patterns.'
  },
  {
    id: 'hawk-deep-eye', cat: 'data', sub: 'Hawk Deep Eye', name: 'Deep Profiling',
    short: 'Audience and customer data enrichment and analytics.',
    full: 'Hawk Deep Eye is a data enrichment and analytics solution designed to help organizations consolidate and understand authorized customer and audience data. It combines available attributes into aggregated profiles that support segmentation, engagement planning, and better business decisions.'
  },
  {
    id: 'ai-grouping-record', cat: 'data', sub: 'AI Grouping Record', name: 'Group Monitoring',
    short: 'Community and channel engagement analytics.',
    full: 'AI Grouping Record is an analytics solution designed to help organizations understand engagement and activity across their own community channels and groups. It provides aggregated activity insights and trend awareness to support community management and communication planning.'
  },
  {
    id: 'gpd', cat: 'data', sub: 'GPD', name: 'Geospatial Portal Data',
    short: 'Geospatial platform for vessel and maritime traffic awareness.',
    full: 'Geospatial Portal Data (GPD) is a geospatial analytics platform designed to help organizations monitor vessel activity and maritime traffic using authorized AIS data. It overlays multiple data sources such as weather, ocean currents, and satellite imagery to support logistics, maritime awareness, and operational planning.'
  },
  {
    id: 'aipd', cat: 'data', sub: 'AIPD', name: 'Artificial Intelligence Portal Data',
    short: 'AI data portal for search, linking, visualization, and reporting.',
    full: 'Artificial Intelligence Portal Data (AIPD) is a data portal that enables users to search, explore, link, download, and reuse data within a repository, with visualization tools for creating data presentations. It helps organizations turn distributed datasets into accessible, reusable information for analysis and reporting.'
  },
  {
    id: 'fdm', cat: 'data', sub: 'FDM', name: 'Flight Data Monitoring',
    short: 'Flight and logistics data for planning and movement analysis.',
    full: 'Flight Data Monitoring (FDM) is a data analytics solution that organizes authorized flight, passenger, and cargo information to support logistics planning, scheduling analysis, and operational reporting for organizations that manage air-transport-related workflows.'
  },
  {
    id: 'smc', cat: 'data', sub: 'SMC', name: 'Social Media Collector',
    short: 'Media monitoring across 3,000+ outlets with AI analytics.',
    full: 'Social Media Collector (SMC) monitors mainstream media, both online and print, across more than 3,000 international, national, and local outlets. It uses AI for analysis across timeline, influencers, media, sentiment, and comparison, presented in a monitoring dashboard that helps brand, communications, and PR teams grasp trends quickly.'
  },
  {
    id: 'sma', cat: 'data', sub: 'SMA', name: 'Social Media Analytic',
    short: 'Real-time social media analytics and sentiment insights.',
    full: 'Social Media Analytic (SMA) is a monitoring and analysis solution for social media that performs real-time processing using semantic processing and AI. It analyzes public sentiment and audience perception by region, helping organizations understand conversations and reputation trends across social platforms.'
  },
  {
    id: 'ais', cat: 'data', sub: 'AIS', name: 'Avatar Intelligence Social Media',
    short: 'Content credibility analytics and misinformation detection.',
    full: 'Avatar Intelligence Social Media (AIS) is a real-time content analytics solution that helps organizations assess online information quality. It supports detection of misinformation, hate speech, and harmful content, and rates source reliability and information credibility to support content moderation and trust-and-safety workflows.'
  },
  {
    id: 'cma', cat: 'data', sub: 'CMA', name: 'Cyber Army Media Analytic',
    short: 'Social media campaign and content management platform.',
    full: 'Cyber Army Media Analytic (CMA) is a campaign and content management platform designed to help organizations plan and run social media programs. It provides multi-account management, scheduling, automated posting, and campaign analytics to help marketing and communications teams manage their presence efficiently.'
  },

  /* ---------- Connected Systems ---------- */
  {
    id: 'emb', cat: 'connected', sub: 'EMB', name: 'Electronic Message Broadcast',
    short: 'Area-based SMS broadcasting system for mass notifications.',
    full: 'Electronic Message Broadcast (EMB) is a connected communication system that delivers SMS notifications and announcements to recipients within a defined area. It helps organizations reach people quickly for operational updates, alerts, and public information messaging.'
  },
  {
    id: 'xplorer-s23', cat: 'connected', sub: 'Xplorer S23', name: 'Tactical SMS Broadcasting',
    short: 'Portable SMS broadcasting across GSM networks without internet.',
    full: 'Xplorer S23 is a portable SMS broadcasting system capable of sending messages across multiple GSM networks. It requires no internet connection, no number database, and no per-SMS cost, making it efficient for large-scale area notifications. Supporting 2G, 3G, and 4G (GSM, WCDMA, LTE), it offers a rugged, portable design suited to field communications in varied conditions.'
  },
  {
    id: 'xplorer-w23', cat: 'connected', sub: 'Xplorer W23', name: 'Tactical WhatsApp Broadcasting',
    short: 'AI-powered portable WhatsApp broadcasting to a defined area.',
    full: 'Xplorer W23 is a portable broadcasting device designed to send WhatsApp messages — text, images, and video — to users within a defined area. Powered by AI and machine learning, it optimizes delivery for reliability. Built for field use, the W23 is portable and shock-resistant, and supports 3G and 4G connectivity.'
  },
  {
    id: 'catcher', cat: 'connected', sub: 'Catcher', name: 'Fake BTS Interceptor',
    short: 'Mobile network testing and signal analysis device.',
    full: 'Catcher is a mobile network testing device used to analyze communication between mobile phones and operator networks. It supports network diagnostics and signal analysis to help technical teams evaluate coverage, connectivity, and network behavior in a controlled environment.'
  },
  {
    id: 'df-portable', cat: 'connected', sub: 'DF Portable', name: 'Visual Direction Finding',
    short: 'Portable signal-location and coverage analysis device.',
    full: 'DF Portable is a device that locates signal sources within a defined radius using a visual method. It supports network coverage analysis and signal troubleshooting, and can help identify signal positions across different building levels. It comes equipped with a portable field kit.'
  },
  {
    id: 'tactical-tapping', cat: 'connected', sub: 'Tactical Tapping', name: 'Eskan-Rabon 4 Microphone System',
    short: 'Compact microphone system for clear audio capture and monitoring.',
    full: 'The Eskan-Rabon 4 Miniature Microphone System is a compact audio-capture solution designed for rapid deployment. Its background-noise-reduction feature delivers clear audio, supporting environmental monitoring, documentation, and audio-quality workflows without additional processing.'
  },
  {
    id: 'electronic-jammer', cat: 'connected', sub: 'Electronic Jammer', name: 'Electronic Jammer',
    flag: 'review',
    short: 'Energy-wave device that disrupts and damages electronic equipment.',
    full: 'Electronic Jammer (EJ) is an energy wave that induces electrical faults (short circuits), causing damage to any device that uses electricity. At high frequencies, EJ is estimated to be capable of making electronic devices fail or even explode due to short circuits. Any object that uses electrical power — such as lights, TVs, radios, mobile phones, rice cookers, refrigerators, computers, cars and motorcycles — becomes vulnerable to the EJ wave.'
  },

  /* ---------- Cybersecurity & Resilience ---------- */
  {
    id: 'kontra-tapp', cat: 'cyber', sub: 'Kontra Tapp', name: 'Anti-Tapping Detection',
    short: 'Detects eavesdropping devices to keep spaces secure.',
    full: 'Kontra Tapp is a security solution used to detect eavesdropping devices installed within a room or area. It helps organizations protect sensitive spaces and safeguard privacy by keeping meeting rooms and offices free from unauthorized listening devices.'
  },
  {
    id: 'mbd', cat: 'cyber', sub: 'MBD', name: 'Malware Blocking Data',
    short: 'Neutralizes file-based threats including APTs and ransomware.',
    full: 'Malware Blocking Data (MBD) strengthens security by treating every file as potentially suspicious — conducting deep scanning, removing hazardous elements, and producing a neutralized, safe copy. MBD helps prevent advanced file-based attacks including Advanced Persistent Threats (APTs), zero-days, and ransomware, while preserving the file\u2019s full usability, visibility, and functionality.'
  },
  {
    id: 'osd', cat: 'cyber', sub: 'OSD', name: 'Open Source Data',
    short: 'Defensive cybersecurity platform for IT infrastructure resilience.',
    full: 'Open Source Data (OSD) is a platform running on virtualized infrastructure (network, server, workstation) used to strengthen the security, stability, and performance of IT infrastructure. It supports defensive security operations, secure architecture, and resilience, and provides a controlled environment for training technical teams in defensive practices.'
  },

  /* ---------- Immersive Technology & Training ---------- */
  {
    id: 'vr-training', cat: 'immersive', sub: 'Tactical VR', name: 'VR Training Simulations',
    short: 'Immersive VR simulations for professional and technical training.',
    full: 'VR Training Simulations provide Virtual Reality-based training that enables realistic, scenario-based exercises in a safe, controlled environment. They support professional learning, technical skills development, and equipment familiarization — improving readiness without the risks and costs of live exercises.'
  },
  {
    id: 'digital-twin', cat: 'immersive', sub: 'Digital Twin', name: 'Digital Twin & Virtual Tours',
    short: 'Digital representations and virtual tours for visualization and planning.',
    full: 'Digital Twin & Virtual Tours deliver digital representations of real objects or locations, together with virtual tours, supporting visualization, planning, collaboration, and in-depth analysis.'
  },
];
