'use client';

import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  links: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
  decorationType?: 'watercolour' | 'starburst' | 'none';
}

export default function FeatureCard({
  title,
  description,
  links,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = '',
  decorationType = 'none',
}: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={ctaHref} className={styles.cta}>
          {ctaText}
        </a>
      </div>

      <div className={styles.imageWrapper}>
        {decorationType !== 'none' && (
          <div
            className={`${styles.decoration} ${
              decorationType === 'starburst' ? styles.starburst : styles.watercolour
            }`}
          />
        )}
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>
    </article>
  );
}
