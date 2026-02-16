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

export default function HomePage() {
  const { t } = useTranslation();

  const featureCards = [
    {
      title: t('featureCards.lookingForAdvice.title'),
      description: t('featureCards.lookingForAdvice.description'),
      links: Object.entries(
        t('featureCards.lookingForAdvice.links', { returnObjects: true }) as Record<string, string>
      ).map(([, label]) => ({ label, href: '#' })),
      ctaText: t('featureCards.lookingForAdvice.cta'),
      ctaHref: '/advice',
      decorationType: 'none' as const,
    },
    {
      title: t('featureCards.becomeAdviser.title'),
      description: t('featureCards.becomeAdviser.description'),
      links: Object.entries(
        t('featureCards.becomeAdviser.links', { returnObjects: true }) as Record<string, string>
      ).map(([, label]) => ({ label, href: '#' })),
      ctaText: t('featureCards.becomeAdviser.cta'),
      ctaHref: '/become-adviser',
      decorationType: 'starburst' as const,
    },
    {
      title: t('featureCards.buildCareer.title'),
      description: t('featureCards.buildCareer.description'),
      links: Object.entries(
        t('featureCards.buildCareer.links', { returnObjects: true }) as Record<string, string>
      ).map(([, label]) => ({ label, href: '#' })),
      ctaText: t('featureCards.buildCareer.cta'),
      ctaHref: '/careers',
      decorationType: 'watercolour' as const,
    },
    {
      title: t('featureCards.shareholderInfo.title'),
      description: t('featureCards.shareholderInfo.description'),
      links: Object.entries(
        t('featureCards.shareholderInfo.links', { returnObjects: true }) as Record<string, string>
      ).map(([, label]) => ({ label, href: '#' })),
      ctaText: t('featureCards.shareholderInfo.cta'),
      ctaHref: '/shareholders',
      decorationType: 'starburst' as const,
    },
  ];

  const newsArticles = (
    t('latestNews.articles', { returnObjects: true }) as Array<{
      id: string;
      category: string;
      readTime: number;
      title: string;
      date: string;
      image: string;
      href: string;
    }>
  ).map((article) => ({
    ...article,
    borderColor: 'teal' as const,
  }));

  return (
    <>
      <Header />

      <main>
        {/* Hero + Client Links */}
        <div className={styles.heroSection}>
          <HeroBanner />
          <div className={styles.clientLinksOverlay}>
            <ClientLinksPanel />
          </div>
        </div>

        {/* Feature Cards - Row 1 */}
        <section className={styles.featureSection}>
          <div className={styles.featureGrid}>
            {featureCards.slice(0, 2).map((card) => (
              <FeatureCard key={card.ctaHref} {...card} />
            ))}
          </div>
        </section>

        {/* Feature Cards - Row 2 */}
        <section className={styles.featureSection}>
          <div className={styles.featureGrid}>
            {featureCards.slice(2, 4).map((card) => (
              <FeatureCard key={card.ctaHref} {...card} />
            ))}
          </div>
        </section>

        {/* Latest News */}
        <LatestNews articles={newsArticles} />

        {/* CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </>
  );
}
