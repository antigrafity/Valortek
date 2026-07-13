/* =========================================================
   Valortek — product catalog data (single source of truth)
   Used by products.html (listing/search) and product.html (detail)
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  { id: 'portable', name: 'Portable Technology Solutions', tagline: 'Portable technology platforms designed for field connectivity, mobile communications, data collection, and operational support.', img: 'assets/img/portable.png' },
  { id: 'geofence', name: 'Geospatial Data Solutions',      tagline: 'Location based data visualization, spatial analytics, movement trend analysis, and geographic information management.',        img: 'assets/img/geofence.png' },
  { id: 'cdi',      name: 'Data Platforms',                 tagline: 'Integrated data platforms providing operational visibility, asset monitoring, and AI powered analytics to support informed decision making.', img: 'assets/img/cdi.jpg' },
  { id: 'dmi',      name: 'Data Analytics',                  tagline: 'AI powered data analytics across digital channels, providing trend analysis, performance insights, reporting, and visualization.', img: 'assets/img/dmi.jpg' },
  { id: 'cyber',    name: 'Cybersecurity Solutions',         tagline: 'Solutions designed to enhance digital resilience through threat detection, data protection, secure infrastructure, and cybersecurity management.', img: 'assets/img/cyber.jpg' },
  { id: 'vr',       name: 'Immersive Digital Solutions',     tagline: 'Virtual Reality (VR), Digital Twin, and Virtual Tour technologies designed for training, visualization, collaboration, and interactive experiences.', img: '' },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- Portable Technology Solutions ---------- */
  {
    id: 'emb', cat: 'portable', sub: 'EMB', name: 'Electronic Message Broadcast',
    short: 'Mobile network based messaging platform for mass SMS communication.',
    full: 'Electronic Message Broadcast (EMB) is a mobile network based messaging platform that enables mass communication through SMS broadcasting, supporting outreach, notifications, and information campaigns across a defined coverage area.'
  },
  {
    id: 'brahma', cat: 'portable', sub: 'BRAHMA', name: 'Broadcast WhatsApp Massive',
    short: 'Mobile network based messaging platform for WhatsApp & Telegram communication.',
    full: 'BRAHMA (Broadcast WhatsApp Massive) is a mobile network based messaging platform that enables mass communication and outreach through WhatsApp and Telegram, supporting notifications and information campaigns across a defined coverage area.'
  },
  {
    id: 'xplorer-s23', cat: 'portable', sub: 'Xplorer S23', name: 'Mobile SMS Broadcasting Platform',
    short: 'High-performance mass SMS broadcasting across GSM networks.',
    full: 'Xplorer S23 is a high-performance SMS broadcasting platform capable of sending mass messages across multiple GSM networks simultaneously. It requires no internet connection, no number database, and no per-SMS cost, making it highly efficient for large-scale communication campaigns. Supporting 2G, 3G and 4G (GSM, WCDMA, LTE), the S23 reaches up to 300 meters and sends up to 1,500 SMS per hour. Equipped with sender-ID customization (numeric & alphanumeric) and laptop-based control, it is flexible for both mobile and stationary deployment, with a rugged, portable design ideal for field operations in varied conditions.'
  },
  {
    id: 'xplorer-w23', cat: 'portable', sub: 'Xplorer W23', name: 'Mobile WhatsApp Broadcasting Platform',
    short: 'AI-powered mobile WhatsApp broadcasting to a target coverage area.',
    full: 'Xplorer W23 is a mobile broadcasting device designed to send WhatsApp messages — text, images and video — to users within a defined coverage area. It works independently, without requiring a number database or a direct connection to the mobile operator. Powered by Artificial Intelligence and Machine Learning, it automatically detects active WhatsApp numbers and optimizes delivery to avoid mass blocking. Built for field operations, the W23 is portable and shock-resistant, supports 3G and 4G, reaches up to 300 meters, and sends up to 2,000 messages per hour.'
  },
  {
    id: 'catcher', cat: 'portable', sub: 'Catcher', name: 'Mobile Network Gateway Device',
    short: 'A portable mobile network gateway with passive and active operating modes.',
    full: 'Catcher is a portable mobile network gateway device that functions as an intermediary node between mobile phones and the operator network for testing and communications-support purposes. It operates in two modes: passive, where the device only monitors passing network traffic; and active, where the device can function as a local network node and issue configured responses.'
  },
  {
    id: 'df-portable', cat: 'portable', sub: 'DF Portable', name: 'Visual Location Finder',
    short: 'Visual location finding for a mobile network identifier within a radius.',
    full: 'DF Portable is a device capable of locating a mobile network identifier within a certain radius using a visual mapping method, rather than the traditional strongest-signal audio-detection method. It can also help pinpoint a location on a specific (elevated) floor of a building, and comes equipped with a mobile support vehicle.'
  },
  {
    id: 'tactical-tapping', cat: 'portable', sub: 'Field Audio System', name: 'Eskan-Rabon 4 Microphone System',
    short: 'Miniature microphone system for rapid field audio monitoring.',
    full: 'The Eskan-Rabon 4 Miniature Microphone System is designed for rapid deployment and response, enabling field operators to handle situations that require audio monitoring and recording. Its background-noise-reduction feature delivers clear audio, allowing operators to understand recorded audio immediately without further processing — a key operational advantage.'
  },
  {
    id: 'kontra-tapp', cat: 'portable', sub: 'Kontra Tapp', name: 'Signal Sweep & Detection Equipment',
    short: 'Detects unauthorized listening devices and helps secure sensitive areas.',
    full: 'Kontra Tapp is equipment used to detect the presence of unauthorized listening or recording devices within a specific room or area, helping organizations secure sensitive meeting spaces and facilities against various forms of unwanted monitoring.'
  },
  {
    id: 'electronic-jammer', cat: 'portable', sub: 'Electronic Jammer', name: 'Electronic Signal Disruptor',
    short: 'Controlled energy wave device used for electronic signal disruption testing.',
    full: 'The Electronic Signal Disruptor (EJ) generates a controlled energy wave used in specialized testing and field applications, capable of disrupting the operation of nearby electronic devices. At higher output levels, it can affect the functionality of powered electronic equipment within its range, and is used under controlled conditions for authorized operational purposes.'
  },

  /* ---------- Geospatial Data Solutions ---------- */
  {
    id: 'follow-the-dots', cat: 'geofence', sub: 'Follow the Dots', name: 'Movement Trend Analysis',
    short: 'Movement pattern analysis with configurable alerts.',
    full: 'Follow the Dots analyzes movement patterns of tracked assets or groups and can generate configurable alerts for movement behaviors and positional patterns that meet defined criteria — supporting logistics, safety, and operational monitoring use cases.'
  },
  {
    id: 'hawk-deep-eye', cat: 'geofence', sub: 'Hawk Deep Eye', name: 'Data Profiling Platform',
    short: 'Consolidated data profiling from multiple authorized sources.',
    full: 'Hawk Deep Eye Profiling consolidates available data points into a structured profile — from basic identifying information to related network and background details — supporting due diligence, verification, and risk-assessment workflows.'
  },
  {
    id: 'ai-grouping-record', cat: 'geofence', sub: 'AI Grouping Record', name: 'Group Communication Monitoring',
    short: 'Monitoring of authorized WhatsApp group communications.',
    full: 'AI Grouping Record is a monitoring platform used to track authorized group communications taking place within WhatsApp groups, supporting compliance, moderation, and organizational communication oversight.'
  },

  /* ---------- Data Platforms ---------- */
  {
    id: 'gpd', cat: 'cdi', sub: 'GPD', name: 'Geospatial Portal Data',
    short: 'Maritime monitoring of vessel activity in Indonesian waters.',
    full: 'Geospatial Portal Data (GPD) is used to monitor vessel activity and maritime traffic in Indonesian waters. The platform tracks vessels via AIS signals and can flag operational anomalies, while overlaying data from multiple sources such as weather, ocean currents, and satellite imagery.'
  },
  {
    id: 'aipd', cat: 'cdi', sub: 'AIPD', name: 'AI Portal Data',
    short: 'AI data portal for search, linking, and strategic analysis.',
    full: 'AI Portal Data (AIPD) is a data portal that enables users to search, explore, link, download, and reuse data within a repository, complete with visualization tools for building data presentations and dashboards to support planning and strategic analysis.'
  },
  {
    id: 'fdm', cat: 'cdi', sub: 'FDM', name: 'Flight Data Monitoring',
    short: 'Aircraft monitoring with passenger and cargo manifests.',
    full: 'Flight Data Monitoring (FDM) tracks aircraft transiting Indonesian airspace along with passenger and cargo manifest data, supporting logistics coordination, safety oversight, and operational reporting.'
  },

  /* ---------- Data Analytics ---------- */
  {
    id: 'smc', cat: 'dmi', sub: 'SMC', name: 'Media Monitoring Platform',
    short: 'Monitoring 3,000+ media outlets with AI-powered analytics.',
    full: 'The Media Monitoring Platform (SMC) tracks mainstream media, both online and print, covering more than 3,000 international, national, and local outlets. It uses Artificial Intelligence for comprehensive analysis across timeline, influencers, media reach, sentiment, and comparison, helping teams stay informed and make timely decisions. A central dashboard summarizes key analytical features, making it easy for analysts to identify trends or track developments on a given topic in a short amount of time.'
  },
  {
    id: 'sma', cat: 'dmi', sub: 'SMA', name: 'Social Media Analytics',
    short: 'Real-time social media analysis of public sentiment.',
    full: 'Social Media Analytics (SMA) is a monitoring and analysis platform for social media (Facebook, Twitter, Instagram) that performs real-time processing using semantic analysis and artificial intelligence. It reads public sentiment by region and can be used to analyze how topics are being received and discussed online, supporting brand, communications, and public-affairs teams.'
  },
  {
    id: 'ais', cat: 'dmi', sub: 'AIS', name: 'Content Credibility Insights',
    short: 'Detects misleading content and rates source credibility.',
    full: 'Content Credibility Insights (AIS) is a real-time system with short refresh windows (10–20 minutes) that monitors information across media and social media, helping identify potentially misleading, biased, or inappropriate content, and assessing information accuracy. It assigns a source-reliability rating (scale A–F) and an information-credibility rating (scale 1–6), covering a broad range of official and independent media sources, with the ability to add additional sources of interest.'
  },
  {
    id: 'cma', cat: 'dmi', sub: 'CMA', name: 'Social Media Campaign Management',
    short: 'Automated, AI-driven social media campaign management.',
    full: 'Social Media Campaign Management (CMA) supports region-specific content campaigns on social media using AI-assisted account and content tools. It includes account creation and management support, campaign scheduling, automated posting, and reporting features. It also integrates SMS and WhatsApp broadcast tools for direct outreach to phone numbers within a specified area.'
  },

  /* ---------- Cybersecurity Solutions ---------- */
  {
    id: 'mbd', cat: 'cyber', sub: 'MBD', name: 'Malware Blocking Data',
    short: 'Neutralizes file-based threats including APTs and ransomware.',
    full: 'Malware Blocking Data (MBD) enhances security by treating every file as potentially suspicious — performing deep scanning, removing hazardous elements from the file, and producing a neutralized (safe) copy. MBD helps prevent advanced, hard-to-detect file-based attacks including Advanced Persistent Threats (APTs), Zero Days, and ransomware, while preserving the file's full usability, visibility, and functionality.'
  },
  {
    id: 'osd', cat: 'cyber', sub: 'OSD', name: 'Cyber Defense Platform',
    short: 'Cybersecurity platform for government and enterprise infrastructure.',
    full: 'The Cyber Defense Platform (OSD) runs on virtualized infrastructure (network, server, workstation) and is used to strengthen the security posture and performance of cyber and IT infrastructure for government agencies and enterprise organizations. OSD also supports training programs that prepare cybersecurity teams for both defensive response and authorized security-testing operations.'
  },

  /* ---------- Immersive Digital Solutions ---------- */
  {
    id: 'vr-training', cat: 'vr', sub: 'Training VR', name: 'VR Training Simulations',
    short: 'Immersive VR simulations for operational training.',
    full: 'VR Training Simulations provide Virtual Reality based training that enables realistic scenario-based exercises in a safe, controlled environment — improving readiness and skills development without the risks and costs of live drills.'
  },
  {
    id: 'digital-twin', cat: 'vr', sub: 'Digital Twin', name: 'Digital Twin & Virtual Tours',
    short: 'Digital representations and virtual tours.',
    full: 'Digital Twin & Virtual Tours deliver digital representations of real objects or locations, together with virtual tours, supporting visualization, planning, collaboration, and in-depth analysis.'
  },
];
