'use client';

import { useTranslation } from 'react-i18next';
import styles from './ClientLinksPanel.module.css';

export default function ClientLinksPanel() {
  const { t } = useTranslation();

  const links = [
    { label: t('clientLinks.onlineServices'), href: '/online-services' },
    { label: t('clientLinks.helpAndSupport'), href: '/help-and-support' },
    { label: t('clientLinks.bankDetails'), href: '/bank-details' },
    { label: t('clientLinks.fundNews'), href: '/fund-news' },
    { label: t('clientLinks.fundInformation'), href: '/fund-information' },
    { label: t('clientLinks.refundClaims'), href: '/refund-claims' },
    { label: t('clientLinks.chargesExplained'), href: '/charges-explained' },
  ];

  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3fdcc8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8l4 4-4 4" />
        </svg>
        <span className={styles.title}>{t('clientLinks.title')}</span>
      </div>

      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={link.href}>
            <a className={styles.link} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
