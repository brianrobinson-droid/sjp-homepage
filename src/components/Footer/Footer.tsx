'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

function SocialIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0a1428" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };

  return (
    <span className={styles.socialIcon}>
      {icons[platform] || null}
    </span>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t('footer.lookingForAdvice.title'),
      links: Object.values(
        t('footer.lookingForAdvice.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
    {
      title: t('footer.becomeAdviser.title'),
      links: Object.values(
        t('footer.becomeAdviser.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
    {
      title: t('footer.shareholders.title'),
      links: Object.values(
        t('footer.shareholders.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
    {
      title: t('footer.mediaMarketing.title'),
      links: Object.values(
        t('footer.mediaMarketing.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
    {
      title: t('footer.moreSjp.title'),
      links: Object.values(
        t('footer.moreSjp.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
    {
      title: t('footer.getInTouch.title'),
      links: Object.values(
        t('footer.getInTouch.links', { returnObjects: true }) as Record<string, string>
      ).map((label) => ({ label, href: '#' })),
    },
  ];

  const legalLinks = Object.values(
    t('footer.legal', { returnObjects: true }) as Record<string, string>
  ).map((label) => ({ label, href: '#' }));

  const socialPlatforms = ['facebook', 'instagram', 'youtube', 'linkedin', 'x'];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoArea}>
          <svg viewBox="0 0 120 60" className={styles.logo} role="img" aria-label="St James's Place">
            <text x="5" y="22" fontSize="14" fontWeight="700" fontFamily="'Playfair Display', serif" fill="#ffffff">St</text>
            <text x="5" y="38" fontSize="14" fontWeight="700" fontFamily="'Playfair Display', serif" fill="#ffffff">James&apos;s</text>
            <text x="5" y="54" fontSize="14" fontWeight="700" fontFamily="'Playfair Display', serif" fill="#ffffff">Place</text>
          </svg>
        </div>

        {/* Link Columns */}
        <div className={styles.columns}>
          {footerSections.map((section) => (
            <div key={section.title} className={styles.column}>
              <h3 className={styles.columnTitle}>{section.title}</h3>
              <ul className={styles.columnLinks}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.columnLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Find Adviser */}
        <div className={styles.socialArea}>
          <h3 className={styles.columnTitle}>{t('footer.followUs')}</h3>
          <div className={styles.socialIcons}>
            {socialPlatforms.map((platform) => (
              <a
                key={platform}
                href={`#${platform}`}
                className={styles.socialLink}
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>

          <a href="/find-an-adviser" className={styles.findAdviserBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {t('footer.findAdviser')}
          </a>
        </div>
      </div>

      {/* Legal Bar */}
      <div className={styles.legalBar}>
        <div className={styles.legalContainer}>
          <span className={styles.copyright}>{t('footer.copyright')}</span>
          <nav className={styles.legalLinks} aria-label="Legal links">
            {legalLinks.map((link, i) => (
              <span key={link.label}>
                <a href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className={styles.legalSeparator}>|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
