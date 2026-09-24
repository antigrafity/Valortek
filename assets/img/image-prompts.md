# Valortek — Image Generation Prompts

Prompts for every image used across the site (System Integrator positioning).
**Note:** `hero-bg.png` is currently used BOTH as the Home hero background AND the About intro photo. Prompt #0 below replaces the old cybersecurity image. If you want About to differ, save a separate file and tell the developer to point About to it.

## Shared house style (append to EVERY prompt)
> dark charcoal background (#0a0b0e), copper and warm-orange accents (#cb7429 / #e0913f / #f0b06a), cinematic soft lighting, subtle depth of field, premium and clean corporate technology aesthetic, abstract, no text, no words, no people, no logos, no watermark, photorealistic 3D render, high detail.

Keep all images in the same family so the site feels cohesive: same charcoal base, same copper glow, same lighting mood.

---

# A. PAGE HERO BACKGROUNDS

Wide, cinematic, used BEHIND white heading text. A dark scrim covers the LEFT ~45% (that's where the text sits), so put the main subject / brightest area on the RIGHT side and keep the left calmer/darker.

- **Exact size for ALL 5 inner-page heroes:** **1942 × 809 px** (same as the current Technology Ecosystem hero). Keep every hero identical in size so the pages match.
- **Composition:** subject weighted to the right, darker/empty on the left for the headline text.

### 0. Home hero — `hero-bg.png`  (replaces the old cybersecurity image; keep as-is size)
Abstract enterprise system-integration scene: multiple translucent glass technology panels, data planes, and glowing copper light lines converging from many separate components into one coherent, unified structure on the right side of the frame — conveying "many technologies working as one." Floating nodes and connection lines, subtle circuit/network hints, clean and architectural. Main subject and brightest glow on the RIGHT; the LEFT ~45% stays dark and calm (empty space for the headline text).

### 1. About hero — `hero-about.jpg`  (1942×809)
An abstract enterprise technology environment conveying connection and integration: multiple translucent glass system blocks and data planes linked by flowing copper light lines converging into one coherent structure on the right; a sense of many components working as one. Calm, confident, corporate.

### 2. Solutions & Services hero — `hero-solutions.jpg`  (1942×809)
An abstract "capability portfolio" scene: seven distinct glowing modules / nodes of different shapes arranged and interconnected by copper light on the right, suggesting composable building blocks that combine into a whole. Modular, architectural, premium.

### 3. Industries hero — `hero-industries.jpg`  (1942×809)
An abstract enterprise-sectors scene: a network of connected copper-lit hubs spread across a dark plane on the right, hinting at different organizations/environments linked by one integration fabric. Broad, expansive, versatile.

### 4. Technology Ecosystem hero — `hero-ecosystem.jpg`  (1942×809)
An abstract independent-integration view: a central customer-centered core on the right surrounded by many interoperable platforms/partners connected with copper links — balanced, no single dominant vendor. Open, neutral, architectural.

### 5. Contact hero — `hero-contact.jpg`  (1942×809)
An abstract "start a conversation" scene: converging copper communication lines / signal paths meeting at a calm focal point on the right, suggesting connection and dialogue. Minimal, inviting, premium.

---

# B. CAPABILITY BANNERS (Solutions page)

Large horizontal banners. A copper label sits at the BOTTOM-LEFT corner, so keep the left side darker and place the main subject toward the CENTER-RIGHT.

- **Aspect ratio:** 16:6 (generate 1920×720)
- **Composition:** subject center-right, darker lower-left for label legibility.

### 4. Data Foundation — `cap-data.jpg`
Abstract enterprise data foundation: scattered fragments of information converging from the left into one clean, structured, glowing copper data grid / unified database core on the right; connected nodes and streams; order emerging from fragmentation.

### 5. Geospatial Intelligence — `cap-geospatial.jpg`
Abstract location intelligence: a dark 3D terrain / stylized map surface with glowing copper location pins, route lines, and a spatial mesh; a subtle holographic map layer floating above assets and service areas.

### 6. Analytics & Insight — `cap-analytics.jpg`
Abstract business analytics: floating holographic dashboards with copper line charts, bar graphs, and rising trend curves over a dark surface; clean data-visualization panels glowing with warm-orange highlights; a sense of insight and clarity.

### 7. Digital Transformation — `cap-digital.jpg`
Abstract modernization: older blocky legacy elements on the left transforming into sleek, connected digital modules and flowing process arrows on the right; copper energy linking gears, workflows, and screens into one modern, streamlined system.

### 8. Cyber Resilience — `cap-resilience.jpg`
Abstract resilience and recovery: a strong copper-lit core protected by concentric rings / layered translucent shields absorbing a disruption, with elements recovering and reconnecting; conveys continuity and bounce-back — protective, not aggressive.

### 9. Immersive & Visualization Solutions — `cap-immersive.jpg`
Abstract 3D and immersive visualization: a glowing volumetric 3D model / digital twin of a facility floating above a dark surface, wireframe and holographic layers, interactive copper light points; spatial, exploratory, futuristic.

### 10. Cyber Security — `cap-cyber.jpg`
Abstract enterprise security woven into architecture: a copper-lit secure core and layered protection threaded THROUGH connected systems and data lines (NOT a single padlock); protection embedded across a wider technology environment; trustworthy and integrated.

---

## File checklist
Save as `.jpg` in `assets/img/` with these exact names:

Home hero: `hero-bg.png` (keep current size)
Inner-page heroes — ALL exactly 1942×809: `hero-about.jpg`, `hero-solutions.jpg`, `hero-industries.jpg`, `hero-ecosystem.jpg`, `hero-contact.jpg`
Capability banners (16:6): `cap-data.jpg`, `cap-geospatial.jpg`, `cap-analytics.jpg`, `cap-digital.jpg`, `cap-resilience.jpg`, `cap-immersive.jpg`, `cap-cyber.jpg`

If any file is missing, the layout falls back to a dark gradient automatically (no broken-image icon), so you can drop images in one at a time.
