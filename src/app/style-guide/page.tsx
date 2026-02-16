'use client';

import { useTranslation } from 'react-i18next';
import styles from './page.module.css';

const colors = [
  { name: 'Navy (Primary)', value: '#0a1428', variable: '--sjp-navy', textLight: true },
  { name: 'Teal (Accent)', value: '#3fdcc8', variable: '--sjp-teal', textLight: false },
  { name: 'White', value: '#ffffff', variable: '--sjp-white', textLight: false },
  { name: 'Light Grey', value: '#f3f3f4', variable: '--sjp-light-grey', textLight: false },
  { name: 'Mid Grey', value: '#6b7280', variable: '--sjp-mid-grey', textLight: true },
  { name: 'Orange', value: '#e87722', variable: '--sjp-orange', textLight: true },
  { name: 'Teal Hover', value: '#2bc4b0', variable: 'N/A', textLight: false },
];

const spacingScale = [
  { name: 'xs', value: '0.25rem (4px)', variable: '--space-xs' },
  { name: 'sm', value: '0.5rem (8px)', variable: '--space-sm' },
  { name: 'md', value: '1rem (16px)', variable: '--space-md' },
  { name: 'lg', value: '1.5rem (24px)', variable: '--space-lg' },
  { name: 'xl', value: '2rem (32px)', variable: '--space-xl' },
  { name: '2xl', value: '3rem (48px)', variable: '--space-2xl' },
  { name: '3xl', value: '4rem (64px)', variable: '--space-3xl' },
  { name: '4xl', value: '6rem (96px)', variable: '--space-4xl' },
];

const typeSizes = [
  { name: 'text-xs', value: '0.75rem (12px)', variable: '--text-xs' },
  { name: 'text-sm', value: '0.875rem (14px)', variable: '--text-sm' },
  { name: 'text-base', value: '1rem (16px)', variable: '--text-base' },
  { name: 'text-lg', value: '1.125rem (18px)', variable: '--text-lg' },
  { name: 'text-xl', value: '1.25rem (20px)', variable: '--text-xl' },
  { name: 'text-2xl', value: '1.5rem (24px)', variable: '--text-2xl' },
  { name: 'text-3xl', value: '1.875rem (30px)', variable: '--text-3xl' },
  { name: 'text-4xl', value: '2.25rem (36px)', variable: '--text-4xl' },
  { name: 'text-5xl', value: '3rem (48px)', variable: '--text-5xl' },
  { name: 'text-6xl', value: '3.75rem (60px)', variable: '--text-6xl' },
];

export default function StyleGuide() {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{t('styleGuide.title')}</h1>
        <p className={styles.pageSubtitle}>{t('styleGuide.subtitle')}</p>
        <a href="/" className={styles.backLink}>
          &larr; Back to Homepage
        </a>
      </div>

      <div className={styles.container}>
        {/* Colour Palette */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Colour Palette</h2>
          <div className={styles.colorGrid}>
            {colors.map((color) => (
              <div key={color.value} className={styles.colorCard}>
                <div
                  className={styles.colorSwatch}
                  style={{
                    backgroundColor: color.value,
                    border: color.value === '#ffffff' ? '1px solid #e5e7eb' : 'none',
                  }}
                >
                  <span
                    className={styles.colorHex}
                    style={{ color: color.textLight ? '#ffffff' : '#0a1428' }}
                  >
                    {color.value}
                  </span>
                </div>
                <div className={styles.colorInfo}>
                  <strong>{color.name}</strong>
                  <code>{color.variable}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Typography</h2>

          <div className={styles.typeSection}>
            <h3 className={styles.subsectionTitle}>Font Families</h3>
            <div className={styles.fontShowcase}>
              <div className={styles.fontCard}>
                <span className={styles.fontLabel}>Heading Font</span>
                <span className={styles.fontHeadingDemo}>Playfair Display</span>
                <code>var(--font-heading)</code>
                <p className={styles.fontNote}>
                  Production: NoeDisplaySJP-Bold (AEM-served)
                </p>
              </div>
              <div className={styles.fontCard}>
                <span className={styles.fontLabel}>Body Font</span>
                <span className={styles.fontBodyDemo}>Poppins</span>
                <code>var(--font-body)</code>
                <p className={styles.fontNote}>
                  Weights: Light (300), Regular (400), Medium (500), SemiBold (600)
                </p>
              </div>
              <div className={styles.fontCard}>
                <span className={styles.fontLabel}>Accent Font</span>
                <span className={styles.fontAccentDemo}>Dancing Script</span>
                <code>var(--font-accent)</code>
                <p className={styles.fontNote}>
                  Production: SJPSouthCoast (AEM-served). Used for hero accent words.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.typeSection}>
            <h3 className={styles.subsectionTitle}>Heading Scale</h3>
            <div className={styles.headingScale}>
              <div className={styles.headingRow}>
                <code className={styles.headingLabel}>h1 / text-5xl</code>
                <h1 style={{ fontSize: '3rem' }}>The quick brown fox</h1>
              </div>
              <div className={styles.headingRow}>
                <code className={styles.headingLabel}>h2 / text-4xl</code>
                <h2 style={{ fontSize: '2.25rem' }}>The quick brown fox</h2>
              </div>
              <div className={styles.headingRow}>
                <code className={styles.headingLabel}>h3 / text-3xl</code>
                <h3 style={{ fontSize: '1.875rem' }}>The quick brown fox</h3>
              </div>
              <div className={styles.headingRow}>
                <code className={styles.headingLabel}>h4 / text-2xl</code>
                <h4 style={{ fontSize: '1.5rem' }}>The quick brown fox</h4>
              </div>
            </div>
          </div>

          <div className={styles.typeSection}>
            <h3 className={styles.subsectionTitle}>Font Sizes</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Size</th>
                  <th>CSS Variable</th>
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {typeSizes.map((size) => (
                  <tr key={size.name}>
                    <td><code>{size.name}</code></td>
                    <td>{size.value}</td>
                    <td><code>{size.variable}</code></td>
                    <td style={{ fontSize: `var(${size.variable})` }}>Aa</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Buttons */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonShowcase}>
            <div className={styles.buttonGroup}>
              <span className={styles.buttonLabel}>Primary (Teal)</span>
              <a href="#" className={styles.btnPrimary}>
                Discover more
              </a>
            </div>
            <div className={styles.buttonGroup}>
              <span className={styles.buttonLabel}>Secondary (Outline)</span>
              <a href="#" className={styles.btnSecondary}>
                Learn more
              </a>
            </div>
            <div className={styles.buttonGroupDark}>
              <span className={styles.buttonLabel} style={{ color: '#fff' }}>
                Outline White (on dark)
              </span>
              <a href="#" className={styles.btnOutlineWhite}>
                Find an adviser
              </a>
            </div>
            <div className={styles.buttonGroupDark}>
              <span className={styles.buttonLabel} style={{ color: '#fff' }}>
                Teal Outline (on dark)
              </span>
              <a href="#" className={styles.btnTealOutline}>
                Partner area
              </a>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Spacing Scale</h2>
          <div className={styles.spacingList}>
            {spacingScale.map((space) => (
              <div key={space.name} className={styles.spacingRow}>
                <code className={styles.spacingLabel}>{space.variable}</code>
                <div
                  className={styles.spacingBar}
                  style={{ width: `var(${space.variable})` }}
                />
                <span className={styles.spacingValue}>{space.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Links</h2>
          <div className={styles.linkShowcase}>
            <div className={styles.linkGroup}>
              <span className={styles.linkLabel}>Default Link (dark bg text)</span>
              <a href="#" style={{ color: '#0a1428', textDecoration: 'underline' }}>
                Underlined link text
              </a>
            </div>
            <div className={styles.linkGroupDark}>
              <span className={styles.linkLabel} style={{ color: '#fff' }}>
                Teal Link (dark background)
              </span>
              <a href="#" style={{ color: '#3fdcc8', textDecoration: 'underline' }}>
                Teal underlined link
              </a>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Responsive Breakpoints</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Width</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>Mobile</code></td>
                <td>&lt; 768px</td>
                <td>Single column, hamburger nav, stacked cards</td>
              </tr>
              <tr>
                <td><code>Tablet</code></td>
                <td>768px - 1023px</td>
                <td>2-column grids, condensed header</td>
              </tr>
              <tr>
                <td><code>Desktop</code></td>
                <td>&ge; 1024px</td>
                <td>Full layout, sidebar overlays</td>
              </tr>
              <tr>
                <td><code>Wide</code></td>
                <td>&ge; 1340px</td>
                <td>Max content width (--max-width)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* AEM Integration Notes */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>AEM Integration</h2>
          <div className={styles.noteCard}>
            <h3 className={styles.noteTitle}>Content Source</h3>
            <p>
              All visible text is sourced from <code>src/i18n/en.json</code> via{' '}
              <code>react-i18next</code>. In production, this will be replaced by AEM
              Content Fragments via the SPA Editor SDK.
            </p>
          </div>
          <div className={styles.noteCard}>
            <h3 className={styles.noteTitle}>AEM SPA Editor SDK</h3>
            <p>
              Components are registered with <code>@adobe/aem-react-editable-components</code>{' '}
              via <code>src/lib/aem.ts</code>. Set{' '}
              <code>NEXT_PUBLIC_AEM_HOST</code> to enable in-context editing.
            </p>
          </div>
          <div className={styles.noteCard}>
            <h3 className={styles.noteTitle}>Custom Fonts</h3>
            <p>
              Production uses NoeDisplaySJP-Bold and SJPSouthCoast served from AEM.
              Development uses Playfair Display and Dancing Script from Google Fonts as
              close substitutes.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
