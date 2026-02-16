'use client';

import { useTranslation } from 'react-i18next';
import styles from './HeroBanner.module.css';

interface HeroBannerProps {
  backgroundImage?: string;
}

export default function HeroBanner({ backgroundImage }: HeroBannerProps) {
  const { t } = useTranslation();

  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section className={styles.heroBanner}>
      <div className={styles.background} style={bgStyle} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            <span className={styles.headingLine}>{t('hero.headingLine1')}</span>
            <span className={styles.headingLine}>{t('hero.headingLine2')}</span>
            <span className={styles.headingAccent}>{t('hero.headingAccent')}</span>
          </h1>

          <p className={styles.description}>{t('hero.description')}</p>

          <a href="#" className={styles.cta}>
            {t('hero.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
