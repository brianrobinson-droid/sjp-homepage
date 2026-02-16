'use client';

import { useTranslation } from 'react-i18next';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  backgroundImage?: string;
}

export default function CTABanner({ backgroundImage }: CTABannerProps) {
  const { t } = useTranslation();

  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section className={styles.banner}>
      <div className={styles.background} style={bgStyle} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.heading}>{t('ctaBanner.heading')}</h2>
        <p className={styles.description}>{t('ctaBanner.description')}</p>
        <a href="/find-an-adviser" className={styles.cta}>
          {t('ctaBanner.cta')}
        </a>
      </div>
    </section>
  );
}
