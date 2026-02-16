'use client';

import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ClientLinksPanel from '@/components/ClientLinksPanel';
import FeatureCard from '@/components/FeatureCard';
import LatestNews from '@/components/LatestNews';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import styles from './page.module.css';

function ComponentSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}

export default function ComponentGallery() {
  const { t } = useTranslation();

  const sampleLinks = [
    { label: 'Sample link one', href: '#' },
    { label: 'Sample link two', href: '#' },
    { label: 'Sample link three', href: '#' },
  ];

  const sampleArticles = [
    {
      category: 'NEWS',
      readTime: 4,
      title: 'Sample news article headline that demonstrates card layout',
      date: '12 Feb 2026',
      href: '#',
      borderColor: 'teal' as const,
    },
    {
      category: 'INVESTING',
      readTime: 2,
      title: 'Another sample article for the gallery view',
      date: '5 Feb 2026',
      href: '#',
      borderColor: 'orange' as const,
    },
    {
      category: 'NEWS, INVESTING',
      readTime: 5,
      title: 'Third article to show full three-column grid',
      date: '3 Feb 2026',
      href: '#',
      borderColor: 'teal' as const,
    },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('componentGallery.title')}</h1>
        <p className={styles.pageSubtitle}>{t('componentGallery.subtitle')}</p>
        <a href="/" className={styles.backLink}>
          &larr; Back to Homepage
        </a>
      </div>

      {/* Header */}
      <ComponentSection
        title="Header"
        description="Sticky navigation bar with logo, search, utility links, main navigation, and CTA buttons. Responsive with hamburger menu on mobile."
      >
        <div className={styles.componentPreview}>
          <Header />
        </div>
      </ComponentSection>

      {/* Hero Banner */}
      <ComponentSection
        title="HeroBanner"
        description="Full-width hero section with background image/gradient, overlay, heading with accent text, description, and CTA button."
      >
        <div className={styles.componentPreview}>
          <HeroBanner />
        </div>
      </ComponentSection>

      {/* Client Links Panel */}
      <ComponentSection
        title="ClientLinksPanel"
        description="Dark navy panel displaying client-facing quick links. Positioned as a sidebar overlay on desktop, full-width on mobile."
      >
        <div className={styles.componentPreviewSmall}>
          <ClientLinksPanel />
        </div>
      </ComponentSection>

      {/* Feature Card - Variations */}
      <ComponentSection
        title="FeatureCard"
        description="Reusable content card with heading, description, link list, CTA button, and optional decorative elements. Used in a 2-column grid."
      >
        <div className={styles.cardGrid}>
          <FeatureCard
            title="Default Card"
            description="A feature card with no decoration type, showing the basic layout."
            links={sampleLinks}
            ctaText="Call to action"
            ctaHref="#"
            decorationType="none"
          />
          <FeatureCard
            title="Starburst Decoration"
            description="A feature card with the starburst decorative element behind the image area."
            links={sampleLinks}
            ctaText="Call to action"
            ctaHref="#"
            decorationType="starburst"
          />
          <FeatureCard
            title="Watercolour Decoration"
            description="A feature card with the watercolour splash decorative element."
            links={sampleLinks}
            ctaText="Call to action"
            ctaHref="#"
            decorationType="watercolour"
          />
        </div>
      </ComponentSection>

      {/* Latest News */}
      <ComponentSection
        title="LatestNews + NewsCard"
        description="News section with heading, 'Read all' link, and 3-column grid of news cards with image, category, read time, title, and date."
      >
        <div className={styles.componentPreview}>
          <LatestNews articles={sampleArticles} />
        </div>
      </ComponentSection>

      {/* CTA Banner */}
      <ComponentSection
        title="CTABanner"
        description="Full-width call-to-action banner with dark background, italic teal heading, description, and CTA button."
      >
        <div className={styles.componentPreview}>
          <CTABanner />
        </div>
      </ComponentSection>

      {/* Footer */}
      <ComponentSection
        title="Footer"
        description="Site-wide footer with logo, multi-column link sections, social icons, adviser search, and legal links."
      >
        <div className={styles.componentPreview}>
          <Footer />
        </div>
      </ComponentSection>
    </div>
  );
}
