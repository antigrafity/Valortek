/* =========================================================
   Valortek — product catalog data (single source of truth)
   Used by products.html (listing/search) and product.html (detail)
   Positioning: enterprise / commercial / civilian technology.
   Wording follows the approved "SUGGESTIONS" spec (Sept 2026).
   ========================================================= */
window.VALORTEK_CATEGORIES = [
  { id: 'software', name: 'Software & Digital Platforms', tagline: 'Applications, platforms, workflow tools, dashboards, and digital services designed around real organizational needs.', img: 'assets/img/cat-software.jpg' },
  { id: 'data',      name: 'Data & Analytics',            tagline: 'AI-powered data analytics across digital channels, providing trend analysis, performance insights, reporting, and visualization.', img: 'assets/img/cat-data.jpg' },
  { id: 'connected', name: 'Connected Systems',           tagline: 'Connected devices, electronic systems, sensors, and integrated technologies for reliable information flow and equipment visibility.', img: 'assets/img/cat-connected.jpg' },
  { id: 'infra',     name: 'Infrastructure & Integration', tagline: 'Integrated data platforms and access, providing comprehensive information, analysis, and AI-powered insights to support informed decision making.', img: 'assets/img/cat-infra.jpg' },
  { id: 'cyber',     name: 'Cybersecurity & Resilience',   tagline: 'Solutions designed to strengthen digital resilience through risk identification, data protection, secure infrastructure, and cybersecurity management.', img: 'assets/img/cat-cyber.jpg' },
  { id: 'immersive', name: 'Immersive Technology & Training', tagline: 'Virtual Reality (VR), Digital Twin, and Virtual Tour technologies supporting training, visualization, collaboration, and interactive experiences.', img: 'assets/img/cat-immersive.jpg' },
];

window.VALORTEK_PRODUCTS = [
  /* ---------- Software & Digital Platforms ---------- */
  {
    id: 'hawk-deep-eye', cat: 'software', sub: 'Hawk Deep Eye', name: 'Comprehensive Data Analysis',
    tagline: 'Connecting diverse information for a more comprehensive view of data.',
    short: 'Consolidates available information into a structured, comprehensive view.',
    full: 'Hawk Deep Eye is a data analysis solution that consolidates available information into a structured format. It can organize relevant personal, demographic, social, and financial information to provide a more comprehensive view of available data and support research, analysis, and decision making.',
    capabilities: [
      'Multi-source information consolidation',
      'Structured data organization',
      'Personal, demographic, social, and financial data analysis'
    ],
    useCases: [
      'Research and information analysis',
      'Data-driven decision making',
      'Comprehensive data review'
    ]
  },
  {
    id: 'dmc', cat: 'software', sub: 'DMC', name: 'Digital Media Campaign',
    tagline: 'Structured digital campaign planning, coordination, and performance analysis.',
    short: 'Digital campaign platform for planning, scheduling, and performance analysis.',
    full: 'Digital Media Campaign (DMC) is a campaign and content management platform that helps organizations plan, organize, and analyze digital media programs. It supports content scheduling and distribution across multiple channels, enabling users to coordinate content and evaluate campaign performance in a structured environment for public communication, digital outreach, information campaigns, and general communication planning.',
    capabilities: [
      'Digital campaign planning and organization',
      'Content scheduling and distribution',
      'Campaign performance assessment',
      'Multi-channel content coordination'
    ],
    useCases: [
      'Public communication campaigns',
      'Digital outreach and engagement',
      'Information campaigns',
      'Communication planning and performance analysis'
    ]
  },

  /* ---------- Data & Analytics ---------- */
  {
    id: 'follow-the-dots', cat: 'data', sub: 'Follow the Dots', name: 'Movement Pattern Analysis',
    tagline: 'Visualizing mobility patterns for better planning and informed decision making.',
    short: 'Identifies and visualizes movement patterns of individuals or groups.',
    full: 'Follow the Dots is a movement analysis solution designed to identify and visualize movement patterns of individuals or groups. It can analyze positional data and highlight patterns that may require further review, supporting situational awareness, mobility analysis, and operational / logistics planning.',
    capabilities: [
      'Movement pattern visualization',
      'Positional data analysis',
      'Pattern identification and analysis',
      'Visual presentation of mobility trends'
    ],
    useCases: [
      'Mobility and transportation analysis',
      'Logistics and route planning',
      'Spatial planning and decision support'
    ]
  },
  {
    id: 'ai-grouping-record', cat: 'data', sub: 'AI Grouping Record', name: 'Group Activity Analysis',
    tagline: 'Structured insights into online group activity and communication patterns.',
    short: 'Organizes and analyzes activity within online groups.',
    full: 'AI Grouping Record is a communication activity analysis solution designed to organize and analyze activity within online groups. It provides structured information on group activity and communication patterns, supporting research, reporting, and general information analysis.',
    capabilities: [
      'Online group activity analysis',
      'Communication pattern analysis',
      'Structured information organization'
    ],
    useCases: [
      'Communication research',
      'Group activity analysis',
      'Reporting and information analysis'
    ]
  },
  {
    id: 'fdm', cat: 'data', sub: 'FDM', name: 'Flight Data Monitoring',
    tagline: 'Comprehensive aviation data for informed analysis and planning.',
    short: 'Organizes aircraft, passenger, and cargo information for aviation analysis.',
    full: 'Flight Data Monitoring (FDM) is a data platform designed to provide information on aircraft operating within Indonesian airspace. It can organize flight information together with relevant passenger and cargo documentation, supporting aviation data analysis, travel pattern assessment, and operational planning.',
    capabilities: [
      'Aircraft and flight information organization',
      'Passenger and cargo documentation management',
      'Aviation data analysis',
      'Travel pattern assessment'
    ],
    useCases: [
      'Aviation data analysis',
      'Travel and mobility planning',
      'Operational planning and reporting'
    ]
  },
  {
    id: 'mia', cat: 'data', sub: 'MIA', name: 'Media Insight & Analysis',
    tagline: 'AI-powered media insights for understanding trends, coverage, and public information.',
    short: 'Media analytics across 3,000+ online and print sources with AI analysis.',
    full: 'Media Insight & Analysis is a media analytics platform that collects information from online and print media across more than 3,000 international, national, and local sources. It uses AI to analyze timelines, influential sources, media coverage, sentiment, comparisons, and reported subjects. Its centralized dashboard provides an overview of key analytical findings, helping users identify trends and developments efficiently and support media research, public information analysis, communication planning, and data-driven decision making.',
    capabilities: [
      'Multi-source media data collection and analysis',
      'AI-powered sentiment and trend analysis',
      'Media coverage comparison and visualization',
      'Centralized analytical dashboard'
    ],
    useCases: [
      'Media and market research',
      'Public information analysis',
      'Communication planning',
      'Trend and media coverage analysis'
    ]
  },
  {
    id: 'sma', cat: 'data', sub: 'SMA', name: 'Social Media Insight & Analysis',
    tagline: 'AI-powered social media insights for understanding public discussions and emerging trends.',
    short: 'Real-time social media analytics across public platforms.',
    full: 'Social Media Insight & Analysis (SMA) is a social media analytics platform designed to process information from public social media sources, including Facebook, Twitter, and Instagram. Using semantic processing and AI, it analyzes public discussions, sentiment, and emerging issues across different regions, supporting social research, public opinion analysis, communication planning, trend assessment, and data-driven decision making.',
    capabilities: [
      'Public social media data analysis',
      'Semantic and AI-powered analysis',
      'Sentiment and discussion analysis',
      'Regional trend and issue assessment'
    ],
    useCases: [
      'Social and public opinion research',
      'Communication planning',
      'Trend and issue analysis',
      'Public information analysis'
    ]
  },
  {
    id: 'ais', cat: 'data', sub: 'AIS', name: 'Media & Social Information Analysis',
    tagline: 'AI-powered insights for evaluating information quality, trends, and credibility.',
    short: 'Real-time analysis of information quality, patterns, and credibility.',
    full: 'Media & Social Information Analysis is a real-time information analysis platform designed to observe and analyze information from media and social media sources within short processing timeframes. It can identify and classify content patterns such as misinformation, hate speech, bias, and other potentially sensitive content, while assessing information quality and potential distortion. The system also provides source reliability and information credibility ratings, helping users evaluate information from a wide range of media sources and support media research, information verification, public information assessment, and informed decision making.',
    capabilities: [
      'Real-time media and social information analysis',
      'Content pattern identification and classification',
      'Information quality and credibility assessment',
      'Source reliability and information credibility ratings'
    ],
    useCases: [
      'Media research and analysis',
      'Information verification',
      'Public information assessment',
      'Trend and content analysis'
    ]
  },

  /* ---------- Connected Systems ---------- */
  {
    id: 'emb', cat: 'connected', sub: 'EMB', name: 'Electronic Message Broadcast',
    tagline: 'Location-based mobile messaging for public information and service notifications.',
    short: 'Location-based SMS messaging over compatible cellular infrastructure.',
    full: 'Electronic Message Broadcast (EMB) is a communication solution designed to support location-based mobile messaging through compatible cellular communication infrastructure. It can identify active mobile connections within a designated coverage area and support the distribution of SMS messages for public information, service notifications, and other general communication purposes.',
    capabilities: [
      'Location-based mobile messaging',
      'Active mobile connection identification within a coverage area',
      'SMS distribution for public information and notifications'
    ],
    useCases: [
      'Public information and service notifications',
      'Localized communication within designated areas'
    ]
  },
  {
    id: 'brahma', cat: 'connected', sub: 'BRAHMA', name: 'Broadcast WhatsApp Massive',
    tagline: 'Location-based messaging over WhatsApp and Telegram for general communication.',
    short: 'Location-based messaging via WhatsApp and Telegram.',
    full: 'BRAHMA (Broadcast WhatsApp Massive) is a communication solution designed to support location-based messaging through WhatsApp and Telegram. It can identify active mobile connections within a designated coverage area and facilitate the distribution of messages for public information, service notifications, and other general communication purposes.',
    capabilities: [
      'Location-based messaging via WhatsApp and Telegram',
      'Active mobile connection identification within a coverage area',
      'Message distribution for public information and notifications'
    ],
    useCases: [
      'Public information and service notifications',
      'Localized communication within designated areas'
    ]
  },
  {
    id: 'xplorer-s23', cat: 'connected', sub: 'Xplorer S23', name: 'SMS Broadcasting System',
    tagline: 'Reliable large-scale mobile communication without internet dependency.',
    short: 'High-performance SMS broadcasting across 2G/3G/4G GSM networks.',
    full: 'Xplorer S23 is a high-performance SMS broadcasting system designed for large-scale mobile communication across multiple GSM networks. It operates independently of an internet connection and does not require a pre-existing recipient database or per-message SMS charges. Supporting 2G, 3G, and 4G technologies (GSM, WCDMA, LTE), the system provides coverage of up to 300 meters and supports up to 1,500 SMS messages per hour. It includes configurable sender identification options (numeric and alphanumeric) and laptop-based control. Its portable and rugged design allows flexible deployment for public information, service communication, event notifications, and other general-purpose applications.',
    capabilities: [
      'Multi-network SMS communication across 2G, 3G, and 4G',
      'Up to 1,500 SMS messages per hour',
      'Up to 300-meter coverage',
      'Numeric and alphanumeric sender identification',
      'Laptop-based control and portable deployment'
    ],
    useCases: [
      'Public information and service notifications',
      'Event communication',
      'Localized communication within designated areas'
    ]
  },
  {
    id: 'xplorer-w23', cat: 'connected', sub: 'Xplorer W23', name: 'WhatsApp Broadcasting Device',
    tagline: 'Flexible mobile communication for localized information and engagement.',
    short: 'Portable WhatsApp broadcasting device with AI-assisted delivery.',
    full: 'Xplorer W23 is a portable communication device designed to distribute WhatsApp messages, including text, images, and video, to users within a designated area. It operates independently without requiring a pre-existing recipient database or direct connection to a mobile network operator. The system uses AI and Machine Learning technologies to identify active WhatsApp connections and optimize message delivery. Supporting 3G and 4G networks, the device provides coverage of up to 300 meters and supports up to 2,000 messages per hour. Its portable and shock-resistant design makes it suitable for public information, service notifications, event communication, and other general-purpose applications.',
    capabilities: [
      'WhatsApp message distribution for text, images, and video',
      'AI and Machine Learning assisted communication',
      '3G and 4G network support',
      'Up to 300-meter coverage',
      'Up to 2,000 messages per hour'
    ],
    useCases: [
      'Public information and service notifications',
      'Event communication',
      'Localized communication within designated areas'
    ]
  },
  {
    id: 'catcher', cat: 'connected', sub: 'Cellular Communication Interface', name: 'Cellular Communication Interface',
    tagline: 'Specialized technology for controlled cellular communication environments.',
    short: 'Interfaces with cellular network environments in passive and active modes.',
    full: 'The Cellular Communication Interface is a specialized communication system designed to facilitate interaction between mobile devices and cellular network environments. It supports passive and active operating modes, enabling the system to monitor communication activity and exchange defined signaling responses within a controlled communication environment.',
    capabilities: [
      'Interaction with cellular network environments',
      'Passive and active operating modes',
      'Communication activity analysis',
      'Defined signaling response exchange'
    ],
    useCases: [
      'Signal and connectivity assessment'
    ]
  },
  {
    id: 'df-portable', cat: 'connected', sub: 'Portable Signal Location System', name: 'Portable Signal Location System',
    tagline: 'Portable technology for visual signal location and spatial awareness.',
    short: 'Portable system that locates mobile communication signals visually.',
    full: 'Portable Signal Location System is a portable signal location system designed to identify and determine the approximate location of mobile communication signals within a designated area. Its visual interface provides directional and location information without relying solely on conventional audio-based signal detection. The system can assist in identifying signal sources associated with specific locations or elevated areas and can be deployed using a dedicated transport vehicle.',
    capabilities: [
      'Approximate location identification of mobile communication signals',
      'Visual directional and location information',
      'Analysis of signals associated with specific or elevated locations',
      'Portable deployment with dedicated transport support'
    ],
    useCases: [
      'Signal location assessment'
    ]
  },
  {
    id: 'tactical-tapping', cat: 'connected', sub: 'RABON 4', name: 'Eskan-Rabon 4 Audio Recording System',
    tagline: 'Compact audio recording for clear and reliable documentation.',
    short: 'Compact, rapid-deployment audio recording with noise reduction.',
    full: 'The Eskan-Rabon 4 Miniature Audio Recording System is designed for rapid deployment in situations requiring audio recording and documentation. Its compact design and background-noise-reduction capability provide clear audio recording in various environments, supporting documentation, inspection, assessment, and other general-purpose audio applications.',
    capabilities: [
      'Compact and portable audio recording',
      'Background noise reduction',
      'Rapid deployment',
      'Clear audio documentation in various environments'
    ],
    useCases: [
      'Documentation and record keeping',
      'Inspection and assessment activities',
      'General-purpose audio recording'
    ]
  },
  {
    id: 'electronic-jammer', cat: 'connected', sub: 'Electromagnetic Environment Control Equipment', name: 'Electromagnetic Environment Control Equipment',
    tagline: 'Controlled electromagnetic technology for testing and technical evaluation.',
    short: 'Manages electromagnetic conditions for controlled testing and evaluation.',
    full: 'Electromagnetic Environment Control Equipment is a specialized device designed to manage electromagnetic conditions within a designated area. It can temporarily affect the normal operation of electronic and electrical devices through controlled electromagnetic energy, making it suitable for controlled testing, technical evaluation, and electromagnetic environment management.',
    capabilities: [
      'Controlled electromagnetic environment management',
      'Temporary interaction with electronic and electrical devices',
      'Technical testing and evaluation',
      'Designated-area deployment'
    ],
    useCases: [
      'Electromagnetic environment testing',
      'Technical evaluation of electronic equipment',
      'Controlled laboratory and facility testing'
    ]
  },

  /* ---------- Infrastructure & Integration ---------- */
  {
    id: 'gpd', cat: 'infra', sub: 'GPD', name: 'Geospatial Data Portal',
    tagline: 'Integrated maritime data for clearer geographic insights and informed decision making.',
    short: 'Centralized platform for vessel activity and maritime traffic data.',
    full: 'Geospatial Data Portal (GPD) is a centralized platform designed to monitor vessel activity and maritime traffic in Indonesian waters. The system can process AIS data and identify unusual vessel activity, while integrating multiple data sources such as weather conditions, ocean currents, satellite imagery, and satellite radar imagery to support maritime situational awareness and analysis.',
    capabilities: [
      'AIS-based maritime data processing',
      'Multi-source geospatial data integration',
      'Vessel activity and maritime traffic analysis',
      'Weather and ocean condition data integration',
      'Satellite imagery and radar imagery visualization'
    ],
    useCases: [
      'Maritime traffic analysis',
      'Maritime and coastal planning',
      'Environmental and oceanographic assessment',
      'Geographic data analysis and decision support'
    ]
  },
  {
    id: 'aipd', cat: 'infra', sub: 'AIPD', name: 'AI Data Portal',
    tagline: 'Integrated data access and AI-powered insights for informed decision making.',
    short: 'Centralized repository to search, link, and reuse information.',
    full: 'AI Data Portal (AIPD) is a data platform that enables users to search, explore, link, download, and reuse information within a centralized repository. It provides visualization tools for creating data presentations and supports the analysis of structured information from multiple sources for research, planning, and data-driven decision making.',
    capabilities: [
      'Centralized data search and access',
      'Multi-source information integration',
      'Data visualization and presentation',
      'Structured data analysis'
    ],
    useCases: [
      'Research and data analysis',
      'Planning and reporting',
      'Data-driven decision making'
    ]
  },

  /* ---------- Cybersecurity & Resilience ---------- */
  {
    id: 'kontra-tapp', cat: 'cyber', sub: 'Electronic Security Inspection Device', name: 'Electronic Security Inspection Device',
    tagline: 'Technical inspection for a more secure electronic environment.',
    short: 'Detects potential unauthorized electronic monitoring equipment.',
    full: 'Electronic Security Inspection Device is a technical security detection device designed to identify potential unauthorized electronic monitoring or signal transmission equipment within a designated room or area. It supports general security inspection and technical assessment of indoor environments.',
    capabilities: [
      'Detection of potential unauthorized electronic equipment',
      'Identification of signal transmission sources',
      'Indoor environment inspection',
      'Technical security assessment'
    ],
    useCases: [
      'Facility security inspections',
      'Indoor environment assessments',
      'Technical security assessments'
    ]
  },
  {
    id: 'mbd', cat: 'cyber', sub: 'MBD', name: 'Malware Blocking Data',
    tagline: 'Secure file analysis and protection for safer digital operations.',
    short: 'Deep file inspection that neutralizes threats while preserving usability.',
    full: 'Malware Blocking Data (MBD) is a file security solution designed to protect users from potentially harmful files through deep inspection and security analysis. The system identifies and removes potentially hazardous elements before producing a neutralized copy while maintaining the usability, visibility, and functionality of the original file. MBD helps protect against advanced file-based threats, including previously unidentified malware and ransomware, supporting secure file exchange and everyday digital operations.',
    capabilities: [
      'Deep file inspection and security analysis',
      'Identification and removal of potentially harmful elements',
      'Neutralized file generation',
      'Preservation of file usability and functionality'
    ],
    useCases: [
      'Secure file exchange',
      'Enterprise document handling',
      'Protection of everyday digital operations',
      'File security assessment'
    ]
  },
  {
    id: 'osd', cat: 'cyber', sub: 'OSD', name: 'Open Source Data',
    tagline: 'Integrated cybersecurity environments for assessment, research, and professional training.',
    short: 'Virtualized cybersecurity platform for assessment, research, and training.',
    full: 'Open Source Data (OSD) is a cybersecurity platform deployed across virtualized network, server, and workstation environments to support the security, stability, and performance of IT infrastructure. It provides a controlled environment for cybersecurity assessment, security research, and professional training, helping organizations develop practical capabilities for identifying, preventing, and responding to cyber threats.',
    capabilities: [
      'Virtualized cybersecurity environment',
      'Security assessment and research',
      'Practical cybersecurity training',
      'Network, server, and workstation environment support'
    ],
    useCases: [
      'Cybersecurity assessment',
      'Security research and testing',
      'Professional cybersecurity training',
      'IT infrastructure security development'
    ]
  },

  /* ---------- Immersive Technology & Training ---------- */
  {
    id: 'vr-training', cat: 'immersive', sub: 'VR Training Simulations', name: 'VR Training Simulations',
    tagline: 'Immersive virtual training for practical skills and scenario-based learning.',
    short: 'VR-based, scenario-driven training in a safe, controlled environment.',
    full: 'VR Training Simulations provide Virtual Reality-based training through realistic, scenario-based exercises in a safe and controlled environment. The solution enables users to practice procedures, evaluate different scenarios, and develop practical skills without the risks and costs associated with live exercises.',
    capabilities: [
      'Scenario-based VR training',
      'Virtual practice environment',
      'Procedure and scenario evaluation',
      'Practical skills development'
    ],
    useCases: [
      'Professional training and development',
      'Procedure practice and evaluation',
      'Scenario-based learning',
      'Skills assessment and preparation'
    ]
  },
  {
    id: 'digital-twin', cat: 'immersive', sub: 'Digital Twin', name: 'Digital Twin & Virtual Tours',
    tagline: 'Immersive digital experiences for visualization, planning, and virtual collaboration.',
    short: 'Digital representations and immersive virtual tours of real-world places.',
    full: 'Digital Twin & Virtual Tours provide digital representations of real-world objects, facilities, and locations together with immersive virtual tours. The solution supports visualization, planning, virtual inspection, training, and in-depth analysis for a wide range of professional and general-purpose applications.',
    capabilities: [
      'Digital representation of objects, facilities, and locations',
      'Immersive virtual tours',
      'Virtual inspection and visualization',
      'Interactive planning and analysis'
    ],
    useCases: [
      'Facility and site visualization',
      'Virtual inspection and assessment',
      'Training and professional development',
      'Planning and presentation'
    ]
  },
];
