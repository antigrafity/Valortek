/* =========================================================
   Valortek — product catalog data (single source of truth)
   Used by products.html (listing/search) and product.html (detail)
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  { id: 'portable', name: 'Portable Equipment',          tagline: 'Tactical portable field devices',          img: 'assets/img/portable.png' },
  { id: 'geofence', name: 'Geofence Data Crawler',       tagline: 'Movement analysis & deep profiling',        img: 'assets/img/geofence.png' },
  { id: 'cdi',      name: 'Continuous Data Intelligence', tagline: 'Persistent domain awareness',              img: 'assets/img/cdi.jpg' },
  { id: 'dmi',      name: 'Data Mining Intelligence',     tagline: 'Media monitoring & analytics',             img: 'assets/img/dmi.jpg' },
  { id: 'cyber',    name: 'Cyber Threat',                 tagline: 'Cyber defense & infrastructure security',  img: 'assets/img/cyber.jpg' },
  { id: 'vr',       name: 'Virtual Reality',              tagline: 'Immersive simulation & digital twin',      img: '' },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- Portable Equipment ---------- */
  {
    id: 'emb', cat: 'portable', sub: 'EMB', name: 'Electronic Message Broadcast',
    short: 'Tactical BTS tracking and opinion-shaping via mass SMS broadcasting.',
    full: 'Electronic Message Broadcast (EMB) performs tactical tracking of Base Transceiver Stations (BTS), captures active phone numbers, and conducts opinion-shaping operations using tactical equipment through mass SMS broadcasting.'
  },
  {
    id: 'brahma', cat: 'portable', sub: 'BRAHMA', name: 'Broadcast WhatsApp Massive',
    short: 'Tactical BTS tracking and opinion-shaping via WhatsApp & Telegram broadcasting.',
    full: 'BRAHMA (Broadcast WhatsApp Massive) performs tactical tracking of Base Transceiver Stations (BTS), captures active phone numbers, and conducts opinion-shaping operations using tactical equipment through mass WhatsApp and Telegram message broadcasting.'
  },
  {
    id: 'xplorer-s23', cat: 'portable', sub: 'Xplorer S23', name: 'Tactical SMS Broadcasting',
    short: 'High-performance mass SMS broadcasting across GSM networks.',
    full: 'Tactical Xplorer S23 is a high-performance SMS broadcasting system capable of sending mass messages across multiple GSM networks simultaneously. It requires no internet connection, no number database, and no per-SMS cost, making it highly efficient for large-scale operations. Supporting 2G, 3G and 4G (GSM, WCDMA, LTE), the S23 reaches up to 300 meters and sends up to 1,500 SMS per hour. Equipped with source-number masking (numeric & alphanumeric) and laptop control, it is highly flexible for both mobile and stationary deployment, with a rugged, portable design ideal for tactical operations in varied field conditions.'
  },
  {
    id: 'xplorer-w23', cat: 'portable', sub: 'Xplorer W23', name: 'Tactical WhatsApp Broadcasting',
    short: 'AI-powered mobile WhatsApp broadcasting to a target area.',
    full: 'Tactical Xplorer W23 is a mobile broadcasting device designed to send WhatsApp messages — text, images and video — to users within a specific area. It works independently without a number database or a direct connection to the mobile operator. Powered by Artificial Intelligence and Machine Learning, it automatically detects active WhatsApp numbers and optimizes delivery to stay safe from mass blocking. Built for tactical field operations, the W23 is portable and shock-resistant, supports 3G and 4G, reaches up to 300 meters, and sends up to 2,000 messages per hour.'
  },
  {
    id: 'catcher', cat: 'portable', sub: 'Catcher', name: 'Fake BTS Interceptor',
    short: 'Fake BTS intermediary with passive and active interception modes.',
    full: 'Catcher functions as a Fake BTS acting as an intermediary in communications between mobile phones and the operator network. It operates in two modes: passive, where the intermediary can only listen to passing communications without issuing any response; and active, where the intermediary can act as an "operator" and issue specific responses to a target\u2019s communications.'
  },
  {
    id: 'df-portable', cat: 'portable', sub: 'DF Portable', name: 'Visual Direction Finding',
    short: 'Visual direction finding to locate an IMSI within a radius.',
    full: 'DF Portable is a device capable of locating an IMSI number within a certain radius using a visual method, rather than the traditional strongest-signal audio-detection method. Visual DF can also locate a target positioned on a specific (elevated) floor. It comes equipped with a tactical vehicle.'
  },
  {
    id: 'tactical-tapping', cat: 'portable', sub: 'Tactical Tapping', name: 'Eskan-Rabon 4 Microphone System',
    short: 'Miniature microphone system for rapid covert monitoring.',
    full: 'The Eskan-Rabon 4 Miniature Microphone System is designed for rapid deployment and response, enabling surveillance operators to handle unexpected situations that require monitoring and recording. Its background-noise-reduction feature delivers clear audio, so operators can immediately understand what the target is saying without further processing — a key tactical advantage.'
  },
  {
    id: 'kontra-tapp', cat: 'portable', sub: 'Kontra Tapp', name: 'Anti-Tapping Detection',
    short: 'Detects wiretaps and keeps an area sterile from eavesdropping.',
    full: 'Kontra Tapp is equipment used to detect the installation of wiretaps within a specific room or area. It keeps a room or area sterile against various forms of eavesdropping.'
  },
  {
    id: 'electronic-jammer', cat: 'portable', sub: 'Electronic Jammer', name: 'Electronic Jammer',
    short: 'Energy wave that disrupts and damages electronic devices.',
    full: 'Electronic Jammer (EJ) is an energy wave that induces electrical faults (short circuits), causing damage to any device that uses electricity. At high frequencies, EJ is estimated to be capable of making electronic devices fail or even explode due to short circuits. Any object that uses electrical power — such as lights, TVs, radios, mobile phones, rice cookers, refrigerators, computers, cars and motorcycles — becomes vulnerable to the EJ wave.'
  },

  /* ---------- Geofence Data Crawler ---------- */
  {
    id: 'follow-the-dots', cat: 'geofence', sub: 'Follow the Dots', name: 'Movement Analysis',
    short: 'Movement analysis with alerts on suspicious patterns.',
    full: 'Follow the Dots analyzes the movement of individuals or groups and can generate alerts for suspicious movement behaviors and positional patterns that are considered to warrant further attention.'
  },
  {
    id: 'hawk-deep-eye', cat: 'geofence', sub: 'Hawk Deep Eye', name: 'Deep Profiling',
    short: 'Deep individual profiling beyond the surface.',
    full: 'Hawk Deep Eye Profiling builds a comprehensive profile of an individual — from basic personal data, family data, social network and estimated income, to other details that are not visible on the surface.'
  },
  {
    id: 'ai-grouping-record', cat: 'geofence', sub: 'AI Grouping Record', name: 'Group Monitoring',
    short: 'Monitoring of WhatsApp group conversations.',
    full: 'AI Grouping Record is a monitoring system operated to surveil online conversations that take place within WhatsApp groups, enabling real-time awareness of group activity.'
  },

  /* ---------- Continuous Data Intelligence ---------- */
  {
    id: 'gpd', cat: 'cdi', sub: 'GPD', name: 'Geospatial Portal Data',
    short: 'Maritime surveillance of vessels in Indonesian waters.',
    full: 'Geospatial Portal Data (GPD) is used to monitor vessel activity and maritime traffic in Indonesian waters. The system can monitor ships via AIS signals and detect anomalies from vessels involved in maritime crime, overlaying data from multiple sources such as weather, ocean currents, satellite imagery and satellite radar imagery.'
  },
  {
    id: 'aipd', cat: 'cdi', sub: 'AIPD', name: 'Artificial Intelligence Portal Data',
    short: 'AI data portal for search, linking and defense analysis.',
    full: 'Artificial Intelligence Portal Data (AIPD) is a data portal that enables users to search, explore, link, download and reuse data within a repository, with visualization tools for creating data presentations. Data such as foreign military capabilities and arms acquisitions can be used as a tool for defense strategy analysis.'
  },
  {
    id: 'fdm', cat: 'cdi', sub: 'FDM', name: 'Flight Data Monitoring',
    short: 'Aircraft detection with passenger and cargo manifests.',
    full: 'Flight Data Monitoring (FDM) can detect aircraft transiting Indonesian airspace, along with passenger and cargo manifest lists, which can be used when tracing the travel movements of a target.'
  },

  /* ---------- Data Mining Intelligence ---------- */
  {
    id: 'smc', cat: 'dmi', sub: 'SMC', name: 'Social Media Collector',
    short: 'Monitoring 3,000+ media outlets with AI analytics.',
    full: 'Social Media Collector (SMC) monitors all mainstream media, both online and print, covering more than 3,000 international, national and local outlets. It uses Artificial Intelligence for complete analysis across timeline, influencers, media, sentiment, comparison and detailed investigation of reported subjects, so it can support decision-making on specific issues. SMC features a main monitoring dashboard summarizing most of its analytical features, making it easy for analysts to grasp trends or the latest developments of an issue in a short time.'
  },
  {
    id: 'sma', cat: 'dmi', sub: 'SMA', name: 'Social Media Analytic',
    short: 'Real-time social media analysis of public perception.',
    full: 'Social Media Analytic (SMA) is a monitoring and analysis system for social media (Facebook, Twitter, Instagram) that performs real-time processing using semantic processing and artificial intelligence. It analyzes and reads public perception in each region and can be used to analyze issues that pose threats from the perspective of public opinion on social media, thereby supporting national security stability.'
  },
  {
    id: 'ais', cat: 'dmi', sub: 'AIS', name: 'Avatar Intelligence Social Media',
    short: 'Detects propaganda, hate speech and rates credibility.',
    full: 'Avatar Intelligence Social Media (AIS) is a real-time system with short timeframes (10\u201320 minutes) capable of monitoring information across media and social media, and recognizing propaganda, hate speech, bias, pornographic and radical content, as well as assessing information distortion. It also assigns credentials to information via a source-reliability rating (scale A\u2013F) and an information-credibility rating (scale 1\u20136). Coverage includes official media, radical media, and dubious outlets, and additional media of intelligence interest can be added.'
  },
  {
    id: 'cma', cat: 'dmi', sub: 'CMA', name: 'Cyber Army Media Analytic',
    short: 'Automated AI-driven social media campaign operations.',
    full: 'Cyber Army Media Analytic (CMA) is capable of conducting propaganda aligned with region-specific issues on social media automatically, using accounts based on Artificial Intelligence. It is equipped with tools for account creation, management and monitoring, campaign management, and automated posting by bots, including abuse reporting and voting. It also includes an SMS Blaster and WhatsApp Blaster for direct condition-setting to phone numbers within a specific area.'
  },

  /* ---------- Cyber Threat ---------- */
  {
    id: 'mbd', cat: 'cyber', sub: 'MBD', name: 'Malware Blocking Data',
    short: 'Neutralizes file-based threats including APTs and ransomware.',
    full: 'Malware Blocking Data (MBD) ensures security by treating every file as potentially suspicious — conducting deep scanning, removing hazardous elements from the file, and producing a neutralized (safe) copy. MBD prevents advanced, undetected file-based attacks including Advanced Persistent Threats (APTs), Zero Days and ransomware, while preserving the file\u2019s full usability, visibility and functionality.'
  },
  {
    id: 'osd', cat: 'cyber', sub: 'OSD', name: 'Open Source Data',
    short: 'Cyber defense platform for government and military.',
    full: 'Open Source Data (OSD) is a platform running on virtualized infrastructure (network, server, workstation). It is used to strengthen the security stability and performance of the cyber and IT infrastructure used by government agencies and the military. OSD is also used to prepare cyber soldiers, trained to conduct both defensive operations against attacks and offensive operations in cyberspace.'
  },

  /* ---------- Virtual Reality ---------- */
  {
    id: 'vr-training', cat: 'vr', sub: 'Tactical VR', name: 'VR Training Simulations',
    short: 'Immersive VR simulations for tactical operations.',
    full: 'VR Training Simulations for Tactical Operations provide Virtual Reality-based training that enables realistic scenario-based exercises in a safe, controlled environment — improving readiness without the risks and costs of live drills.'
  },
  {
    id: 'digital-twin', cat: 'vr', sub: 'Digital Twin', name: 'Digital Twin & Virtual Tours',
    short: 'Digital representations and virtual tours.',
    full: 'Digital Twin & Virtual Tours deliver digital representations of real objects or locations, together with virtual tours, supporting visualization, planning and in-depth analysis.'
  },
];
