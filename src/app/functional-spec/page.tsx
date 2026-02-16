'use client';

import styles from './page.module.css';

/* ══════════════════════════════════════════
   Types
   ══════════════════════════════════════════ */
interface UserStory {
  text: string;
}

interface Feature {
  ref: string;
  element: string;
  description: string;
  acceptance: string;
}

interface PropDef {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface Breakpoint {
  label: string;
  range: string;
  description: string;
}

interface Animation {
  target: string;
  description: string;
}

interface CMSField {
  field: string;
  i18nKey: string;
  type: string;
  editable: boolean;
}

interface ComponentSpec {
  id: string;
  number: number;
  name: string;
  file: string;
  badges: { label: string; type: 'reusable' | 'stateful' | 'stateless' | 'i18n' }[];
  purpose: string;
  userStories: UserStory[];
  features: Feature[];
  props: PropDef[];
  breakpoints: Breakpoint[];
  animations: Animation[];
  cms: CMSField[];
}

/* ══════════════════════════════════════════
   Component Specifications Data
   ══════════════════════════════════════════ */
const SPECS: ComponentSpec[] = [
  /* ───────────────────────────────────────
     1. HEADER
     ─────────────────────────────────────── */
  {
    id: 'header',
    number: 1,
    name: 'Header',
    file: 'src/components/Header/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateful', type: 'stateful' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Provides persistent site-wide navigation allowing users to access key areas of the site. Acts as the primary wayfinding mechanism on every page.',
    userStories: [
      { text: 'As a user, I want to navigate to key sections of the site from any page, so I can find information quickly.' },
      { text: 'As a mobile user, I want a hamburger menu that reveals the full navigation, so the header does not consume excessive screen space.' },
      { text: 'As an existing client, I want quick access to "Client sign in" and "Partner area", so I can access my account without scrolling.' },
      { text: 'As a user, I want to search the site, so I can find specific content or services.' },
    ],
    features: [
      { ref: 'H.1', element: 'Top Bar', description: 'Horizontal bar containing Search, Find an Adviser, Careers, and Asia & UAE links. Visible only on desktop viewports.', acceptance: 'All links render, are clickable, and navigate to correct destinations. Bar is hidden on mobile.' },
      { ref: 'H.2', element: 'Logo', description: 'St. James\'s Place text logo in white. Links to the homepage.', acceptance: 'Clicking the logo navigates to /. Logo is visible at all breakpoints.' },
      { ref: 'H.3', element: 'Main Navigation', description: 'Three primary links: "I\'m looking for advice", "Become an SJP adviser", "Information for shareholders". Desktop only.', acceptance: 'Links render horizontally. Active/hover state shows teal underline animation.' },
      { ref: 'H.4', element: 'CTA Buttons', description: 'Two outlined buttons: "Partner area" (teal border) and "Client sign in" (white border), each with a person icon.', acceptance: 'Buttons render with correct border colours. Hover fills background. Both navigate to correct destinations.' },
      { ref: 'H.5', element: 'Hamburger Menu', description: 'Toggle button with hamburger/close icon. Visible only on mobile (<768px). Opens full-screen mobile overlay.', acceptance: 'Button toggles between hamburger and close (X) icon. aria-expanded updates. Overlay slides open/closed.' },
      { ref: 'H.6', element: 'Mobile Menu', description: 'Full-screen overlay with all navigation links, CTA buttons, and utility links stacked vertically.', acceptance: 'All desktop links are accessible. Menu closes on link click or close button.' },
      { ref: 'H.7', element: 'Sticky Behaviour', description: 'Header remains fixed to the top of the viewport when scrolling.', acceptance: 'Header stays visible during scroll. z-index ensures it overlays page content.' },
    ],
    props: [],
    breakpoints: [
      { label: 'Desktop', range: '≥768px', description: 'Full layout: top bar, main nav, CTA buttons visible. Hamburger hidden.' },
      { label: 'Mobile', range: '<768px', description: 'Top bar hidden. Main nav hidden. Hamburger button shown. CTA buttons move into mobile overlay menu.' },
    ],
    animations: [
      { target: 'Nav links', description: 'Underline width animates from 0 to 100% on hover (0.25s ease). Colour transitions to teal.' },
      { target: 'CTA buttons', description: 'Background-color and colour transition on hover (0.2s ease). Teal button fills navy; white button fills white.' },
      { target: 'Search/links', description: 'Colour transition 0.2s ease on hover.' },
    ],
    cms: [
      { field: 'Search label', i18nKey: 'header.search', type: 'String', editable: true },
      { field: 'Find an Adviser', i18nKey: 'header.findAdviser', type: 'String', editable: true },
      { field: 'Careers', i18nKey: 'header.careers', type: 'String', editable: true },
      { field: 'Asia & UAE', i18nKey: 'header.asiaUae', type: 'String', editable: true },
      { field: 'Main Nav Items (3)', i18nKey: 'header.lookingForAdvice / becomeAdviser / shareholderInfo', type: 'String', editable: true },
      { field: 'Partner Area', i18nKey: 'header.partnerArea', type: 'String', editable: true },
      { field: 'Client Sign In', i18nKey: 'header.clientSignIn', type: 'String', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     2. HERO BANNER
     ─────────────────────────────────────── */
  {
    id: 'hero-banner',
    number: 2,
    name: 'HeroBanner',
    file: 'src/components/HeroBanner/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Full-width hero section that creates an impactful first impression. Communicates the brand message with a large heading, supporting description, and a primary call-to-action overlaid on a background image.',
    userStories: [
      { text: 'As a user, I want to immediately understand the brand proposition when I land on the homepage, so I can decide if this service is relevant to me.' },
      { text: 'As a user, I want a clear call-to-action, so I know how to take the next step.' },
      { text: 'As a content author, I want to update the hero image, heading, and CTA without code changes, so I can keep the homepage fresh.' },
    ],
    features: [
      { ref: 'HB.1', element: 'Background Image', description: 'Full-width background image covering the entire banner area. Passed via backgroundImage prop. Falls back to a navy gradient when no image is provided.', acceptance: 'Image covers full width. No white gaps. Gradient fallback displays if prop is empty.' },
      { ref: 'HB.2', element: 'Overlay Gradient', description: 'Semi-transparent navy-to-transparent gradient overlay from left to right, ensuring text legibility over the image.', acceptance: 'Overlay extends ~75% on desktop, ~85% on tablet, 100% on mobile. Text remains readable.' },
      { ref: 'HB.3', element: 'Heading', description: 'Multi-line heading using Playfair Display (bold) with a cursive accent word in Dancing Script (teal).', acceptance: 'Three lines render: "Make your" / "money work" / "harder". Accent word is teal and italic cursive.' },
      { ref: 'HB.4', element: 'Description', description: 'Supporting paragraph text in Poppins font below the heading.', acceptance: 'Text is legible against the overlay. Max-width constrains line length for readability.' },
      { ref: 'HB.5', element: 'CTA Button', description: 'Primary teal button linking to the advice section.', acceptance: 'Button renders with teal background, navy text. Hover state darkens to #2bc4b0.' },
    ],
    props: [
      { name: 'backgroundImage', type: 'string', required: false, description: 'URL of the hero background image. Falls back to gradient if not provided.' },
    ],
    breakpoints: [
      { label: 'Desktop', range: '≥1024px', description: 'Min-height 520px. Heading text-6xl. Overlay extends 75%. Text max-width 480px.' },
      { label: 'Tablet', range: '768–1023px', description: 'Min-height 440px. Heading text-5xl. Overlay extends 85%.' },
      { label: 'Mobile', range: '<768px', description: 'Min-height 400px. Heading text-4xl. Full overlay. Text max-width 100%.' },
    ],
    animations: [
      { target: 'CTA button', description: 'Background-color transitions on hover (var(--transition-base)). From teal to #2bc4b0.' },
    ],
    cms: [
      { field: 'Heading Line 1', i18nKey: 'hero.headingLine1', type: 'String', editable: true },
      { field: 'Heading Line 2', i18nKey: 'hero.headingLine2', type: 'String', editable: true },
      { field: 'Accent Word', i18nKey: 'hero.headingAccent', type: 'String', editable: true },
      { field: 'Description', i18nKey: 'hero.description', type: 'String', editable: true },
      { field: 'CTA Label', i18nKey: 'hero.cta', type: 'String', editable: true },
      { field: 'Background Image', i18nKey: 'N/A (prop)', type: 'ImageRef', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     3. CLIENT LINKS PANEL
     ─────────────────────────────────────── */
  {
    id: 'client-links-panel',
    number: 3,
    name: 'ClientLinksPanel',
    file: 'src/components/ClientLinksPanel/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Quick-access sidebar panel for existing clients. Provides direct links to commonly needed services such as online account access, fund information, and support.',
    userStories: [
      { text: 'As an existing SJP client, I want quick links to my online services, fund information, and support, so I can find what I need without navigating deep into the site.' },
      { text: 'As a content author, I want to manage the client links list from the CMS, so I can add or remove services as the business evolves.' },
    ],
    features: [
      { ref: 'CL.1', element: 'Panel Container', description: 'Dark navy background panel with white/teal text. Positioned as an overlay on the right side of the hero section on desktop.', acceptance: 'Panel renders with correct navy background. Positioned absolutely over the hero on desktop, full-width below hero on mobile.' },
      { ref: 'CL.2', element: 'Panel Title', description: '"Client links" heading with a circle-arrow SVG icon.', acceptance: 'Title renders in white, bold Poppins. SVG icon is 24x24 and teal-coloured.' },
      { ref: 'CL.3', element: 'Link List', description: '7 teal-coloured links stacked vertically with underlines.', acceptance: 'All 7 links render. Each is clickable. Hover transitions colour from teal to white.' },
    ],
    props: [],
    breakpoints: [
      { label: 'Desktop', range: '≥768px', description: 'Width 280px. Positioned as absolute overlay on the hero section (right side).' },
      { label: 'Mobile', range: '<768px', description: 'Width 100%. Flows below the hero section in the document order.' },
    ],
    animations: [
      { target: 'Links', description: 'Colour transitions from teal to white on hover. Opacity reduces to 0.9. Duration: var(--transition-fast).' },
    ],
    cms: [
      { field: 'Title', i18nKey: 'clientLinks.title', type: 'String', editable: true },
      { field: 'Online Services', i18nKey: 'clientLinks.onlineServices', type: 'String', editable: true },
      { field: 'Help and Support', i18nKey: 'clientLinks.helpAndSupport', type: 'String', editable: true },
      { field: 'Bank Details', i18nKey: 'clientLinks.bankDetails', type: 'String', editable: true },
      { field: 'Fund News', i18nKey: 'clientLinks.fundNews', type: 'String', editable: true },
      { field: 'Fund Information', i18nKey: 'clientLinks.fundInformation', type: 'String', editable: true },
      { field: 'Refund Claims', i18nKey: 'clientLinks.refundClaims', type: 'String', editable: true },
      { field: 'Charges Explained', i18nKey: 'clientLinks.chargesExplained', type: 'String', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     4. FEATURE CARD
     ─────────────────────────────────────── */
  {
    id: 'feature-card',
    number: 4,
    name: 'FeatureCard',
    file: 'src/components/FeatureCard/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Versatile content card used to showcase key service areas. Each card contains a heading, description, list of related links, a CTA button, and an optional image with decorative elements. Displayed in a 2-column grid on the homepage.',
    userStories: [
      { text: 'As a user, I want to see the main service areas at a glance, so I can identify which area is relevant to me.' },
      { text: 'As a user, I want related sub-links within each card, so I can navigate directly to specific topics.' },
      { text: 'As a content author, I want to choose decoration types (none, starburst, watercolour) per card, so I can add visual variety.' },
    ],
    features: [
      { ref: 'FC.1', element: 'Card Container', description: 'Horizontal flex layout with text content on the left (~55%) and image area on the right (~45%). Min-height 400px.', acceptance: 'Card renders at correct proportions. On mobile, layout flips to vertical with image on top.' },
      { ref: 'FC.2', element: 'Title', description: 'Bold heading in Playfair Display, text-3xl.', acceptance: 'Title renders correctly. Supports variable length strings from CMS.' },
      { ref: 'FC.3', element: 'Description', description: 'Body text in Poppins, text-sm, mid-grey colour.', acceptance: 'Paragraph wraps correctly. Line-height 1.7 for readability.' },
      { ref: 'FC.4', element: 'Link List', description: 'Vertical list of underlined links. Each link navigates to a relevant sub-page.', acceptance: 'All links render and are individually clickable. Hover colour transitions to teal.' },
      { ref: 'FC.5', element: 'CTA Button', description: 'Teal filled button with navy text.', acceptance: 'Button renders with correct styling. Hover darkens background. Links to correct destination.' },
      { ref: 'FC.6', element: 'Image', description: 'Greyscale-filtered image on the right side. Falls back to a gradient placeholder if no imageSrc is provided.', acceptance: 'Image displays at 100% fill within its container. Grayscale filter applied. Placeholder appears when no URL.' },
      { ref: 'FC.7', element: 'Decoration', description: 'Optional decorative element behind the image: "watercolour" (radial blur circle, bottom-left) or "starburst" (conic gradient, bottom-right).', acceptance: 'Decoration renders only when decorationType is not "none". Positioned correctly per type.' },
    ],
    props: [
      { name: 'title', type: 'string', required: true, description: 'Card heading text.' },
      { name: 'description', type: 'string', required: true, description: 'Card body text.' },
      { name: 'links', type: '{ label: string; href: string }[]', required: true, description: 'Array of related navigation links.' },
      { name: 'ctaText', type: 'string', required: true, description: 'CTA button label.' },
      { name: 'ctaHref', type: 'string', required: true, description: 'CTA button link target.' },
      { name: 'imageSrc', type: 'string', required: false, description: 'Image URL. Falls back to gradient placeholder.' },
      { name: 'imageAlt', type: 'string', required: false, description: 'Image alt text for accessibility.' },
      { name: 'decorationType', type: "'watercolour' | 'starburst' | 'none'", required: false, description: 'Decorative element type. Defaults to "none".' },
    ],
    breakpoints: [
      { label: 'Desktop', range: '≥768px', description: 'Horizontal layout. Image 45% width on right. Min-height 400px. Title text-3xl.' },
      { label: 'Mobile', range: '<768px', description: 'Vertical layout. Image on top (order: -1, height 200px). Title text-2xl. Full-width card.' },
    ],
    animations: [
      { target: 'Links', description: 'Colour transition to teal on hover (var(--transition-fast)).' },
      { target: 'CTA button', description: 'Background-color and colour transition on hover (var(--transition-base)).' },
    ],
    cms: [
      { field: 'Title', i18nKey: 'featureCards.{key}.title', type: 'String', editable: true },
      { field: 'Description', i18nKey: 'featureCards.{key}.description', type: 'String', editable: true },
      { field: 'Links', i18nKey: 'featureCards.{key}.links', type: 'Object (key-value)', editable: true },
      { field: 'CTA Label', i18nKey: 'featureCards.{key}.cta', type: 'String', editable: true },
      { field: 'Image', i18nKey: 'N/A (prop)', type: 'ImageRef', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     5. LATEST NEWS
     ─────────────────────────────────────── */
  {
    id: 'latest-news',
    number: 5,
    name: 'LatestNews + NewsCard',
    file: 'src/components/LatestNews/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Displays the three most recent news articles in a responsive grid. Each card shows an image, category, read time, title, and publication date. Drives traffic to the news section.',
    userStories: [
      { text: 'As a user, I want to see the latest news articles on the homepage, so I can stay informed about market insights and SJP updates.' },
      { text: 'As a user, I want to know the read time before clicking, so I can choose articles that fit my available time.' },
      { text: 'As a content author, I want articles to be managed from the CMS with images, categories, and dates, so the homepage stays current.' },
    ],
    features: [
      { ref: 'LN.1', element: 'Section Header', description: '"Latest News" heading (Playfair Display, serif) with "Read all news" link aligned right.', acceptance: 'Title and link render on the same row. Link navigates to the full news listing page.' },
      { ref: 'LN.2', element: 'News Grid', description: '3-column responsive grid of NewsCard components.', acceptance: '3 cards on desktop, 2 on tablet, 1 on mobile. Equal height cards.' },
      { ref: 'LN.3', element: 'Card Image', description: 'Top image area with greyscale filter. Falls back to gradient placeholder.', acceptance: 'Image fills card width. Greyscale applied by default. On hover, filter reduces to 50%.' },
      { ref: 'LN.4', element: 'Coloured Top Border', description: '4px solid top border in teal or orange, alternating per card.', acceptance: 'First card teal, second card borderColor varies. Colour matches prop value.' },
      { ref: 'LN.5', element: 'Meta Row', description: 'Category label (uppercase, bold) and "X minute read" aligned on one line.', acceptance: 'Category renders in uppercase. Read time appends "minute read" from i18n.' },
      { ref: 'LN.6', element: 'Card Title', description: 'Article headline in Poppins, medium weight, text-base.', acceptance: 'Title renders and supports multi-line wrapping.' },
      { ref: 'LN.7', element: 'Date', description: 'Publication date at the bottom of the card in mid-grey.', acceptance: 'Date renders in correct format (e.g., "12 Feb 2026"). Positioned at card bottom.' },
    ],
    props: [
      { name: 'articles', type: 'NewsCardProps[]', required: true, description: 'Array of article objects containing category, readTime, title, date, image, href, borderColor.' },
    ],
    breakpoints: [
      { label: 'Desktop', range: '≥1024px', description: '3-column grid. Cards at equal height.' },
      { label: 'Tablet', range: '768–1023px', description: '2-column grid.' },
      { label: 'Mobile', range: '<768px', description: 'Single column. Full-width cards.' },
    ],
    animations: [
      { target: 'Card', description: 'Box-shadow transition on hover (var(--transition-base)). Shadow intensifies.' },
      { target: 'Image', description: 'Filter transitions from grayscale(100%) to grayscale(50%) on card hover (var(--transition-base)).' },
      { target: 'Read all link', description: 'Colour transition on hover (var(--transition-fast)).' },
    ],
    cms: [
      { field: 'Section Title', i18nKey: 'latestNews.title', type: 'String', editable: true },
      { field: 'Read All Label', i18nKey: 'latestNews.readAllNews', type: 'String', editable: true },
      { field: 'Minute Read Label', i18nKey: 'latestNews.minuteRead', type: 'String', editable: true },
      { field: 'Articles Array', i18nKey: 'latestNews.articles', type: 'Array<Object>', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     6. CTA BANNER
     ─────────────────────────────────────── */
  {
    id: 'cta-banner',
    number: 6,
    name: 'CTABanner',
    file: 'src/components/CTABanner/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Full-width call-to-action banner encouraging users to find a financial adviser. Positioned before the footer to capture users who have scrolled through the homepage content.',
    userStories: [
      { text: 'As a user who has browsed the homepage, I want a final prompt to connect with an adviser, so I can take action without scrolling back up.' },
      { text: 'As a content author, I want to update the CTA heading, description, and button text, so I can tailor the message for campaigns.' },
    ],
    features: [
      { ref: 'CB.1', element: 'Background', description: 'Full-width banner with optional background image and dark overlay (rgba 0.7 opacity).', acceptance: 'Image covers full width. Overlay ensures white text is always legible. Falls back to navy gradient.' },
      { ref: 'CB.2', element: 'Heading', description: 'Italic heading in Dancing Script cursive font, teal colour, centred.', acceptance: 'Heading renders in teal cursive. Font-size text-4xl on desktop, text-2xl on mobile.' },
      { ref: 'CB.3', element: 'Description', description: 'Supporting text in Poppins, white, centred below heading.', acceptance: 'Text renders in white. Max-width constrains line length.' },
      { ref: 'CB.4', element: 'CTA Button', description: 'Large teal button centred below description. Links to /find-an-adviser.', acceptance: 'Button renders with correct teal background. Hover state transitions to #2bc4b0.' },
    ],
    props: [
      { name: 'backgroundImage', type: 'string', required: false, description: 'URL of the banner background image. Falls back to dark gradient.' },
    ],
    breakpoints: [
      { label: 'Desktop', range: '≥768px', description: 'Min-height 380px. Heading text-4xl. Generous vertical padding.' },
      { label: 'Mobile', range: '<768px', description: 'Min-height 300px. Heading text-2xl. Reduced padding.' },
    ],
    animations: [
      { target: 'CTA button', description: 'Background-color transition on hover (var(--transition-base)). Teal to #2bc4b0.' },
    ],
    cms: [
      { field: 'Heading', i18nKey: 'ctaBanner.heading', type: 'String', editable: true },
      { field: 'Description', i18nKey: 'ctaBanner.description', type: 'String', editable: true },
      { field: 'CTA Label', i18nKey: 'ctaBanner.cta', type: 'String', editable: true },
      { field: 'Background Image', i18nKey: 'N/A (prop)', type: 'ImageRef', editable: true },
    ],
  },

  /* ───────────────────────────────────────
     7. FOOTER
     ─────────────────────────────────────── */
  {
    id: 'footer',
    number: 7,
    name: 'Footer',
    file: 'src/components/Footer/',
    badges: [
      { label: 'Reusable', type: 'reusable' },
      { label: 'Stateless', type: 'stateless' },
      { label: 'i18n', type: 'i18n' },
    ],
    purpose:
      'Site-wide footer providing comprehensive navigation, social media links, a "Find an Adviser" CTA, and legal/compliance information. Appears on every page.',
    userStories: [
      { text: 'As a user, I want a comprehensive footer with links to all key site sections, so I can navigate to any area from the bottom of a page.' },
      { text: 'As a user, I want social media links, so I can follow SJP on my preferred platform.' },
      { text: 'As a compliance officer, I want legal links (Privacy Policy, Modern Slavery Statement, etc.) visible on every page, so we meet regulatory requirements.' },
    ],
    features: [
      { ref: 'FT.1', element: 'Logo Area', description: 'SJP text logo in the first column of the footer grid.', acceptance: 'Logo renders in white. Positioned in the left column on desktop.' },
      { ref: 'FT.2', element: 'Link Columns', description: 'Six sections of links arranged in a 3-column grid: Looking for Advice, Become an SJP Adviser, Shareholders, Media & Marketing, More SJP, Get in Touch.', acceptance: 'All 6 sections render with correct titles and links. Links are teal on hover.' },
      { ref: 'FT.3', element: 'Social Icons', description: 'Five social platform icons (Facebook, Instagram, YouTube, LinkedIn, X) as 36x36 circles with inline SVGs.', acceptance: 'All 5 icons render. Hover fills background teal. Icons link to correct social profiles.' },
      { ref: 'FT.4', element: 'Find an Adviser', description: 'Search icon + "Find an adviser" outlined button in the right column.', acceptance: 'Button renders with teal border. Hover fills background teal with navy text.' },
      { ref: 'FT.5', element: 'Legal Bar', description: 'Full-width bar at the bottom with copyright text and legal links (Sitemap, Legal Info, Privacy, etc.) separated by pipes.', acceptance: 'Copyright text includes current year. All legal links are clickable. Pipes hidden on mobile.' },
    ],
    props: [],
    breakpoints: [
      { label: 'Desktop', range: '≥1024px', description: '3-column grid: 140px logo | 1fr links | 240px social. Links sub-grid is 3 columns.' },
      { label: 'Tablet', range: '768–1023px', description: 'Single column layout. Links sub-grid becomes 2 columns. Social area becomes horizontal flex.' },
      { label: 'Mobile', range: '<768px', description: 'Single column. Links sub-grid becomes 1 column. Legal links stack vertically.' },
    ],
    animations: [
      { target: 'Column links', description: 'Colour transition to teal on hover (var(--transition-fast)).' },
      { target: 'Social icons', description: 'Background-color fills teal, icon colour turns navy on hover (var(--transition-fast)).' },
      { target: 'Find Adviser btn', description: 'Background-color and colour transition on hover (var(--transition-fast)).' },
      { target: 'Legal links', description: 'Colour transition to teal on hover (var(--transition-fast)).' },
    ],
    cms: [
      { field: 'Section Titles (6)', i18nKey: 'footer.{section}.title', type: 'String', editable: true },
      { field: 'Section Links (6)', i18nKey: 'footer.{section}.links', type: 'Object (key-value)', editable: true },
      { field: 'Follow Us Label', i18nKey: 'footer.followUs', type: 'String', editable: true },
      { field: 'Find Adviser Label', i18nKey: 'footer.findAdviser', type: 'String', editable: true },
      { field: 'Legal Links', i18nKey: 'footer.legal', type: 'Object (key-value)', editable: true },
      { field: 'Copyright', i18nKey: 'footer.copyright', type: 'String', editable: true },
    ],
  },
];

/* ── Homepage template components ── */
const TEMPLATE_COMPONENTS = [
  { name: 'Header', type: 'required' as const, note: 'Site-wide. Sticky navigation.' },
  { name: 'HeroBanner', type: 'required' as const, note: 'Above the fold. With background image.' },
  { name: 'ClientLinksPanel', type: 'required' as const, note: 'Overlays hero on desktop.' },
  { name: 'FeatureCard (×4)', type: 'required' as const, note: '2×2 grid. Each with unique content.' },
  { name: 'LatestNews', type: 'required' as const, note: '3 most recent articles.' },
  { name: 'CTABanner', type: 'recommended' as const, note: 'Pre-footer call-to-action.' },
  { name: 'Footer', type: 'required' as const, note: 'Site-wide. Full navigation + legal.' },
];

/* ══════════════════════════════════════════
   Component Spec Renderer
   ══════════════════════════════════════════ */
function ComponentSpecSection({ spec }: { spec: ComponentSpec }) {
  return (
    <div id={spec.id} className={styles.specSection}>
      {/* Header */}
      <div className={styles.specHeader}>
        <div className={styles.specTitleGroup}>
          <span className={styles.specNumber}>{spec.number}</span>
          <h2 className={styles.specTitle}>{spec.name}</h2>
          <span className={styles.specFile}>{spec.file}</span>
        </div>
        <div className={styles.specBadges}>
          {spec.badges.map((b) => (
            <span
              key={b.label}
              className={`${styles.badge} ${
                b.type === 'reusable' ? styles.badgeReusable :
                b.type === 'stateful' ? styles.badgeStateful :
                b.type === 'i18n' ? styles.badgeI18n :
                styles.badgeStateless
              }`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.specBody}>
        {/* Purpose */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Purpose</h3>
          <p className={styles.subDescription}>{spec.purpose}</p>
          <ul className={styles.userStories}>
            {spec.userStories.map((story, i) => (
              <li key={i} className={styles.userStory}>
                <span className={styles.storyIcon}>📋</span>
                <p className={styles.storyText}>{story.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Features</h3>
          <table className={styles.featuresTable}>
            <thead>
              <tr>
                <th>Ref</th>
                <th>Element</th>
                <th>Description</th>
                <th>Acceptance Criteria</th>
              </tr>
            </thead>
            <tbody>
              {spec.features.map((f) => (
                <tr key={f.ref}>
                  <td className={styles.featureRef}>{f.ref}</td>
                  <td><strong>{f.element}</strong></td>
                  <td>{f.description}</td>
                  <td>{f.acceptance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Props (if any) */}
        {spec.props.length > 0 && (
          <div className={styles.subSection}>
            <h3 className={styles.subTitle}>Component Props (API)</h3>
            <table className={styles.propsTable}>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {spec.props.map((p) => (
                  <tr key={p.name}>
                    <td><code>{p.name}</code></td>
                    <td><code>{p.type}</code></td>
                    <td>
                      {p.required ? (
                        <span className={styles.propRequired}>Required</span>
                      ) : (
                        <span className={styles.propOptional}>Optional</span>
                      )}
                    </td>
                    <td>{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Responsive Behaviour */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Responsive Behaviour</h3>
          <div className={styles.breakpointGrid}>
            {spec.breakpoints.map((bp) => (
              <div key={bp.label} className={styles.breakpointCard}>
                <p className={styles.breakpointLabel}>{bp.label}</p>
                <p className={styles.breakpointRange}>{bp.range}</p>
                <p className={styles.breakpointDesc}>{bp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animations & Behaviours */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>Animations &amp; Behaviours</h3>
          <div className={styles.animationList}>
            {spec.animations.map((a, i) => (
              <div key={i} className={styles.animationRow}>
                <span className={styles.animationTarget}>{a.target}</span>
                <p className={styles.animationDesc}>{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CMS / Admin Requirements */}
        <div className={styles.subSection}>
          <h3 className={styles.subTitle}>CMS / Admin Requirements</h3>
          <p className={styles.subDescription}>
            All text fields below are managed via react-i18next (mock) or AEM Content Fragments (production).
          </p>
          <table className={styles.cmsTable}>
            <thead>
              <tr>
                <th>Field</th>
                <th>i18n Key / Source</th>
                <th>Type</th>
                <th>Editable</th>
              </tr>
            </thead>
            <tbody>
              {spec.cms.map((c) => (
                <tr key={c.field}>
                  <td>{c.field}</td>
                  <td><code>{c.i18nKey}</code></td>
                  <td>{c.type}</td>
                  <td>{c.editable ? '✓ Yes' : '✗ No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   Page Component
   ══════════════════════════════════════════ */
export default function FunctionalSpecPage() {
  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Functional Specification</h1>
        <p className={styles.pageSubtitle}>
          Component-level functional requirements for the SJP Homepage
        </p>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>&larr; Homepage</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a href="/components" className={styles.navLink}>Component Gallery</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a href="/aem-status" className={styles.navLink}>AEM Status</a>
        </div>
      </div>

      {/* ── Page Report ── */}
      <div className={styles.pageReport}>
        <table className={styles.reportTable}>
          <tbody>
            <tr>
              <td>Author</td>
              <td>DEPT / SJP Digital Team</td>
            </tr>
            <tr>
              <td>Status</td>
              <td><span className={`${styles.statusBadge} ${styles.statusDraft}`}>Draft — Pending Review</span></td>
            </tr>
            <tr>
              <td>Action</td>
              <td>Awaiting UX/UI, Frontend Lead, and QA review</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>1.0 — Initial component specifications</td>
            </tr>
            <tr>
              <td>Last Updated</td>
              <td>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── Table of Contents ── */}
      <div className={styles.tocContainer}>
        <div className={styles.toc}>
          <p className={styles.tocTitle}>Components ({SPECS.length})</p>
          <div className={styles.tocGrid}>
            {SPECS.map((spec) => (
              <a key={spec.id} href={`#${spec.id}`} className={styles.tocLink}>
                <span className={styles.tocNumber}>{spec.number}.</span>
                {spec.name}
              </a>
            ))}
            <a href="#homepage-template" className={styles.tocLink}>
              <span className={styles.tocNumber}>T.</span>
              Homepage Template
            </a>
          </div>
        </div>
      </div>

      {/* ── Component Specs ── */}
      <div className={styles.container}>
        {SPECS.map((spec) => (
          <ComponentSpecSection key={spec.id} spec={spec} />
        ))}

        {/* ── Homepage Page Template ── */}
        <div id="homepage-template" className={styles.templateSection}>
          <div className={styles.templateHeader}>
            <h2 className={styles.templateTitle}>Page Template: Homepage</h2>
            <p className={styles.templateSub}>
              Defines which reusable components are used on the homepage and their arrangement.
            </p>
          </div>
          <div className={styles.templateBody}>
            <div className={styles.subSection}>
              <h3 className={styles.subTitle}>Component Composition</h3>
              <p className={styles.subDescription}>
                The homepage template assembles the following components in order. Required components
                are fundamental to the page; recommended components enhance the experience but could
                be removed for specific campaigns.
              </p>
              <div className={styles.templateGrid}>
                {TEMPLATE_COMPONENTS.map((c) => (
                  <div key={c.name} className={styles.templateComponent}>
                    <div style={{ flex: 1 }}>
                      <p className={styles.templateComponentName}>{c.name}</p>
                      <p className={styles.templateComponentNote}>{c.note}</p>
                    </div>
                    <span className={`${styles.requiredBadge} ${c.type === 'required' ? styles.required : styles.recommended}`}>
                      {c.type === 'required' ? 'Required' : 'Recommended'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.subSection} style={{ marginTop: '2rem' }}>
              <h3 className={styles.subTitle}>Template-Specific Notes</h3>
              <table className={styles.featuresTable}>
                <thead>
                  <tr>
                    <th>Ref</th>
                    <th>Requirement</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.featureRef}>T.1</td>
                    <td><strong>Hero + Client Links Overlay</strong></td>
                    <td>ClientLinksPanel is positioned as an absolute overlay on the right side of the HeroBanner on desktop. On mobile, it flows below the hero in normal document order.</td>
                  </tr>
                  <tr>
                    <td className={styles.featureRef}>T.2</td>
                    <td><strong>Feature Cards Grid</strong></td>
                    <td>4 FeatureCards displayed in two rows of 2 (2-column grid). Each card has unique content and decoration type. Row 1: lookingForAdvice (none), becomeAdviser (starburst). Row 2: buildCareer (watercolour), shareholderInfo (starburst).</td>
                  </tr>
                  <tr>
                    <td className={styles.featureRef}>T.3</td>
                    <td><strong>News Article Count</strong></td>
                    <td>LatestNews section displays exactly 3 articles. Articles are sourced from the CMS and sorted by date descending.</td>
                  </tr>
                  <tr>
                    <td className={styles.featureRef}>T.4</td>
                    <td><strong>Page Load Order</strong></td>
                    <td>Components render in order: Header → Hero + ClientLinks → Feature Cards (Row 1) → Feature Cards (Row 2) → Latest News → CTA Banner → Footer.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
