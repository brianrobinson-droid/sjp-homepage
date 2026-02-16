'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                  */
/* ------------------------------------------------------------------ */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21c0-3.87-3.58-7-8-7s-8 3.13-8 7" />
    </svg>
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Placeholder Logo (SVG text in brand style)                        */
/* ------------------------------------------------------------------ */

function SJPLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 40"
      role="img"
      aria-label="St James's Place"
    >
      <text
        x="0"
        y="30"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="18"
        fontWeight="700"
        fill="#ffffff"
      >
        St. James&apos;s Place
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Header Component                                                  */
/* ------------------------------------------------------------------ */

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  /* -- Data arrays driven by i18n -- */

  const topNavLinks = [
    { label: t('header.findAdviser'), href: '/find-an-adviser' },
    { label: t('header.careers'), href: '/careers' },
    { label: t('header.asiaUae'), href: '/asia-uae' },
  ];

  const mainNavLinks = [
    { label: t('header.lookingForAdvice'), href: '/looking-for-advice' },
    { label: t('header.becomeAdviser'), href: '/become-an-adviser' },
    { label: t('header.shareholderInfo'), href: '/shareholder-information' },
  ];

  return (
    <header className={styles.header}>
      {/* ---- Top Bar (desktop only) ---- */}
      <div className={styles.topBar}>
        <button className={styles.searchButton} type="button" aria-label={t('header.search')}>
          <SearchIcon className={styles.searchIcon} />
          <span>{t('header.search')}</span>
        </button>

        <nav aria-label="Utility navigation">
          <ul className={styles.topNavList}>
            {topNavLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.topNavLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <hr className={styles.divider} />

      {/* ---- Main Bar ---- */}
      <div className={styles.mainBar}>
        {/* Logo */}
        <a href="/" className={styles.logoLink} aria-label="St James's Place home">
          <SJPLogo className={styles.logo} />
        </a>

        {/* Main Nav (desktop) */}
        <nav className={styles.mainNav} aria-label="Main navigation">
          <ul className={styles.mainNavList}>
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.mainNavLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons (desktop) */}
        <div className={styles.ctaButtons}>
          <a href="/partner-area" className={styles.ctaButton}>
            <PersonIcon className={styles.ctaButtonIcon} />
            {t('header.partnerArea')}
          </a>
          <a href="/client-sign-in" className={styles.ctaButton}>
            <PersonIcon className={styles.ctaButtonIcon} />
            {t('header.clientSignIn')}
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={styles.hamburger}
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={t('header.menuLabel')}
        >
          {mobileMenuOpen ? (
            <CloseIcon className={styles.hamburgerIcon} />
          ) : (
            <HamburgerIcon className={styles.hamburgerIcon} />
          )}
        </button>
      </div>

      {/* ---- Mobile Menu ---- */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Search */}
        <button className={styles.mobileSearch} type="button">
          <SearchIcon className={styles.searchIcon} />
          <span>{t('header.search')}</span>
        </button>

        {/* Main links */}
        <ul className={styles.mobileNavSection}>
          {mainNavLinks.map((link) => (
            <li key={link.href} className={styles.mobileNavItem}>
              <a className={styles.mobileNavLink} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Utility links */}
        <ul className={styles.mobileUtilitySection}>
          {topNavLinks.map((link) => (
            <li key={link.href}>
              <a className={styles.mobileUtilityLink} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className={styles.mobileCtas}>
          <a href="/partner-area" className={styles.mobileCta}>
            <PersonIcon className={styles.ctaButtonIcon} />
            {t('header.partnerArea')}
          </a>
          <a href="/client-sign-in" className={styles.mobileCta}>
            <PersonIcon className={styles.ctaButtonIcon} />
            {t('header.clientSignIn')}
          </a>
        </div>
      </nav>
    </header>
  );
}
