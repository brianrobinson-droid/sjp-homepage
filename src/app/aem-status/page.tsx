'use client';

import styles from './page.module.css';

/* ──────────────────────────────────────────
   Environment variable checks
   ────────────────────────────────────────── */
const ENV_VARS = [
  {
    name: 'NEXT_PUBLIC_AEM_HOST',
    value: process.env.NEXT_PUBLIC_AEM_HOST,
    description: 'AEM as a Cloud Service publish URL',
  },
  {
    name: 'NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT',
    value: process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT,
    description: 'GraphQL endpoint path on AEM',
  },
  {
    name: 'AEM_AUTH_TOKEN',
    value: process.env.AEM_AUTH_TOKEN ? '••••••••' : undefined,
    description: 'Service account authentication token',
  },
  {
    name: 'NEXT_PUBLIC_DATA_SOURCE',
    value: process.env.NEXT_PUBLIC_DATA_SOURCE,
    description: 'Toggles between mock (i18n JSON) and AEM data sources',
  },
];

const isAEMConfigured = !!process.env.NEXT_PUBLIC_AEM_HOST;
const dataSource = process.env.NEXT_PUBLIC_DATA_SOURCE || 'mock';

/* ──────────────────────────────────────────
   SPA Editor component registry
   ────────────────────────────────────────── */
const SPA_COMPONENTS = [
  { resourceType: 'sjp/components/hero-banner', component: 'HeroBanner', file: 'src/components/HeroBanner' },
  { resourceType: 'sjp/components/client-links-panel', component: 'ClientLinksPanel', file: 'src/components/ClientLinksPanel' },
  { resourceType: 'sjp/components/feature-card', component: 'FeatureCard', file: 'src/components/FeatureCard' },
  { resourceType: 'sjp/components/latest-news', component: 'LatestNews', file: 'src/components/LatestNews' },
  { resourceType: 'sjp/components/cta-banner', component: 'CTABanner', file: 'src/components/CTABanner' },
  { resourceType: 'sjp/components/header', component: 'Header', file: 'src/components/Header' },
  { resourceType: 'sjp/components/footer', component: 'Footer', file: 'src/components/Footer' },
];

/* ──────────────────────────────────────────
   Content Fragment Models
   ────────────────────────────────────────── */
const CONTENT_MODELS = [
  {
    name: 'Hero Banner',
    aemType: 'AEMHeroBanner',
    mapper: 'mapHeroBanner()',
    target: 'HeroBanner',
    fields: [
      { aemField: 'headingLine1', aemType: 'String', prop: 'headingLine1', type: 'string', notes: 'First line of heading' },
      { aemField: 'headingLine2', aemType: 'String', prop: 'headingLine2', type: 'string', notes: 'Second line of heading' },
      { aemField: 'headingAccent', aemType: 'String', prop: 'headingAccent', type: 'string', notes: 'Accent word (italic teal)' },
      { aemField: 'description', aemType: 'String', prop: 'description', type: 'string', notes: '' },
      { aemField: 'ctaLabel', aemType: 'String', prop: 'cta.label', type: 'string', notes: 'CTA button text' },
      { aemField: 'ctaUrl', aemType: 'String', prop: 'cta.href', type: 'string', notes: 'CTA link target' },
      { aemField: 'backgroundImage', aemType: 'ImageRef', prop: 'backgroundImage', type: 'CMSImage', notes: 'Via AEM DAM' },
    ],
  },
  {
    name: 'Feature Card',
    aemType: 'AEMFeatureCard',
    mapper: 'mapFeatureCard()',
    target: 'FeatureCard',
    fields: [
      { aemField: 'title', aemType: 'String', prop: 'title', type: 'string', notes: '' },
      { aemField: 'description', aemType: 'String', prop: 'description', type: 'string', notes: '' },
      { aemField: 'links', aemType: 'String[]', prop: 'links', type: 'LinkItem[]', notes: 'Multifield in AEM' },
      { aemField: 'ctaText', aemType: 'String', prop: 'ctaText', type: 'string', notes: '' },
      { aemField: 'ctaHref', aemType: 'String', prop: 'ctaHref', type: 'string', notes: '' },
      { aemField: 'imageSrc', aemType: 'ImageRef', prop: 'imageSrc', type: 'string', notes: 'Via AEM DAM' },
      { aemField: 'decorationType', aemType: 'String', prop: 'decorationType', type: 'enum', notes: 'none | starburst | watercolour' },
    ],
  },
  {
    name: 'News Article',
    aemType: 'AEMNewsArticle',
    mapper: 'mapNewsArticle()',
    target: 'NewsCard',
    fields: [
      { aemField: '_path', aemType: 'String', prop: 'id', type: 'string', notes: 'CF path as unique ID' },
      { aemField: 'title', aemType: 'String', prop: 'title', type: 'string', notes: '' },
      { aemField: 'category', aemType: 'String', prop: 'category', type: 'string', notes: '' },
      { aemField: 'date', aemType: 'Date', prop: 'date', type: 'string', notes: 'Formatted for display' },
      { aemField: 'readTime', aemType: 'Long', prop: 'readTime', type: 'number', notes: 'Minutes' },
      { aemField: 'image', aemType: 'ImageRef', prop: 'image', type: 'string', notes: 'Via AEM DAM' },
      { aemField: 'slug', aemType: 'String', prop: 'href', type: 'string', notes: 'Prefixed with /news/' },
    ],
  },
  {
    name: 'CTA Banner',
    aemType: 'AEMCTABanner',
    mapper: 'mapCTABanner()',
    target: 'CTABanner',
    fields: [
      { aemField: 'heading', aemType: 'String', prop: 'heading', type: 'string', notes: 'Italic accent heading' },
      { aemField: 'description', aemType: 'String', prop: 'description', type: 'string', notes: '' },
      { aemField: 'ctaLabel', aemType: 'String', prop: 'cta.label', type: 'string', notes: '' },
      { aemField: 'ctaUrl', aemType: 'String', prop: 'cta.href', type: 'string', notes: '' },
      { aemField: 'backgroundImage', aemType: 'ImageRef', prop: 'backgroundImage', type: 'CMSImage', notes: 'Via AEM DAM' },
    ],
  },
  {
    name: 'Navigation',
    aemType: 'AEMNavigation',
    mapper: 'mapNavigation()',
    target: 'Header + Footer',
    fields: [
      { aemField: 'mainNav', aemType: 'String[]', prop: 'mainNavItems', type: 'NavItem[]', notes: 'Multifield with label + href' },
      { aemField: 'utilityNav', aemType: 'String[]', prop: 'utilityItems', type: 'NavItem[]', notes: 'Top bar links' },
      { aemField: 'footerColumns', aemType: 'Multifield', prop: 'footerSections', type: 'FooterSection[]', notes: 'Nested multifield' },
      { aemField: 'legalLinks', aemType: 'String[]', prop: 'legalLinks', type: 'LinkItem[]', notes: 'Bottom legal bar' },
      { aemField: 'clientLinks', aemType: 'String[]', prop: 'clientLinks', type: 'LinkItem[]', notes: 'Client links panel' },
    ],
  },
];

/* ──────────────────────────────────────────
   Persisted Queries
   ────────────────────────────────────────── */
const PERSISTED_QUERIES = [
  { key: 'homepage', path: 'sjp/homepage' },
  { key: 'navigation', path: 'sjp/navigation' },
  { key: 'featureCards', path: 'sjp/feature-cards' },
  { key: 'latestNews', path: 'sjp/latest-news' },
  { key: 'footer', path: 'sjp/footer' },
];

/* ──────────────────────────────────────────
   Checklist items
   ────────────────────────────────────────── */
const COMPLETED_ITEMS = [
  { title: 'AEM SPA Editor SDK', desc: '@adobe/aem-react-editable-components integrated', file: 'src/lib/aem.ts' },
  { title: 'Component MapTo Registration', desc: 'registerAEMComponent() utility for all 7 components', file: 'src/lib/aem.ts' },
  { title: 'Content Abstraction Layer', desc: 'fetchAEMContent() + getAssetUrl() for AEM/mock switching', file: 'src/lib/content.ts' },
  { title: 'i18n Translation Layer', desc: 'react-i18next with JSON source, swappable to AEM', file: 'src/i18n/en.json' },
  { title: 'AEM Author Mode Detection', desc: 'isAEMAuthorMode() checks for wcmmode=edit|preview', file: 'src/lib/aem.ts' },
  { title: 'Content Fragment Types', desc: 'TypeScript interfaces defined for all content models', file: 'src/lib/content.ts' },
  { title: 'Component Architecture', desc: '7 reusable React components with CMS-agnostic props', file: 'src/components/' },
  { title: 'Mock Data Source', desc: 'Complete en.json with all translatable homepage content', file: 'src/i18n/en.json' },
];

const REMAINING_ITEMS = [
  { title: 'AEM Cloud Instance', desc: 'Provision AEM as a Cloud Service environment' },
  { title: 'Content Fragment Models', desc: 'Create CF models matching the 5 AEM types defined' },
  { title: 'Author Content', desc: 'Create Content Fragments for all homepage sections' },
  { title: 'Register Persisted Queries', desc: 'Register all 5 persisted queries in AEM' },
  { title: 'Configure Environment', desc: 'Set AEM_HOST, GRAPHQL_ENDPOINT, and AUTH_TOKEN env vars' },
  { title: 'Switch Data Source', desc: 'Set NEXT_PUBLIC_DATA_SOURCE=aem to go live' },
];

/* ──────────────────────────────────────────
   Sample GraphQL queries
   ────────────────────────────────────────── */
const HOMEPAGE_QUERY = `{
  homepageByPath(_path: "/content/dam/sjp/homepage") {
    item {
      heroBanner {
        headingLine1
        headingLine2
        headingAccent
        description
        backgroundImage {
          ... on ImageRef {
            _dynamicUrl
            width
            height
          }
        }
        ctaLabel
        ctaUrl
      }
      featureCards {
        title
        description
        links
        ctaText
        ctaHref
        imageSrc {
          ... on ImageRef {
            _dynamicUrl
          }
        }
        decorationType
      }
      ctaBanner {
        heading
        description
        ctaLabel
        ctaUrl
        backgroundImage {
          ... on ImageRef {
            _dynamicUrl
          }
        }
      }
    }
  }
}`;

const NEWS_QUERY = `{
  newsArticleList(
    _locale: "en"
    sort: "date DESC"
    limit: 3
  ) {
    items {
      _path
      title
      category
      date
      readTime
      image {
        ... on ImageRef {
          _dynamicUrl
          width
          height
        }
      }
      slug
    }
  }
}`;

/* ──────────────────────────────────────────
   Sample data flow demo
   ────────────────────────────────────────── */
const AEM_RESPONSE_SAMPLE = `{
  "data": {
    "homepageByPath": {
      "item": {
        "heroBanner": {
          "headingLine1": "Make your",
          "headingLine2": "money work",
          "headingAccent": "harder",
          "description": "Good habits means...",
          "backgroundImage": {
            "_dynamicUrl": "/adobe/dynamicmedia/deliver/dm-aid--abc123/hero.jpg",
            "width": 1920,
            "height": 800
          },
          "ctaLabel": "Discover more",
          "ctaUrl": "/advice"
        }
      }
    }
  }
}`;

const COMPONENT_PROPS_SAMPLE = `{
  "headingLine1": "Make your",
  "headingLine2": "money work",
  "headingAccent": "harder",
  "description": "Good habits means...",
  "backgroundImage": "/aem-host/adobe/dynamicmedia/deliver/dm-aid--abc123/hero.jpg",
  "cta": {
    "label": "Discover more",
    "href": "/advice"
  }
}`;

/* ══════════════════════════════════════════
   Page Component
   ══════════════════════════════════════════ */
export default function AEMStatusPage() {
  const completedCount = COMPLETED_ITEMS.length;
  const totalCount = COMPLETED_ITEMS.length + REMAINING_ITEMS.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>AEM Integration Status</h1>
        <p className={styles.pageSubtitle}>
          Architecture readiness dashboard for Adobe Experience Manager headless integration.
        </p>
        <div className={styles.navLinks}>
          <a href="/" className={styles.navLink}>&larr; Homepage</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a href="/components" className={styles.navLink}>Component Gallery</a>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>·</span>
          <a href="/style-guide" className={styles.navLink}>Style Guide</a>
        </div>
      </div>

      {/* ── Jump Nav ── */}
      <nav className={styles.jumpNav}>
        <p className={styles.jumpNavTitle}>Jump to section:</p>
        <div className={styles.jumpNavLinks}>
          {['Connection Status', 'Architecture', 'SPA Editor', 'Content Models', 'GraphQL Queries', 'Data Flow', 'Checklist'].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                className={styles.jumpNavChip}
              >
                {label}
              </a>
            )
          )}
        </div>
      </nav>

      <div className={styles.container}>
        {/* ═══════════════════════════════════
            1. CONNECTION STATUS
           ═══════════════════════════════════ */}
        <section id="connection-status" className={styles.section}>
          <h2 className={styles.sectionTitle}>Connection Status</h2>

          <div className={styles.connectionGrid}>
            {/* Status badge */}
            <div className={styles.statusCard}>
              <p className={styles.statusLabel}>Data Source</p>
              <span className={`${styles.statusBadge} ${isAEMConfigured ? styles.badgeAem : styles.badgeMock}`}>
                {isAEMConfigured ? 'AEM' : 'MOCK'}
              </span>
              <p className={styles.statusNote}>
                {isAEMConfigured ? 'Connected to AEM Cloud' : 'Using i18n JSON mock data'}
              </p>
            </div>

            {/* Environment variables table */}
            <div>
              <h3 className={styles.envTableTitle}>Environment Variables</h3>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Status</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {ENV_VARS.map((v) => (
                    <tr key={v.name}>
                      <td><code>{v.name}</code></td>
                      <td>
                        <span className={`${styles.statusDot} ${v.value ? styles.dotGreen : styles.dotGrey}`} />
                        {v.value || 'Not set'}
                      </td>
                      <td>{v.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className={styles.endpointBar}>
                <strong>Active Endpoint: </strong>
                {isAEMConfigured
                  ? `${process.env.NEXT_PUBLIC_AEM_HOST}/graphql/execute.json/`
                  : 'Not configured — using mock data'}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            2. ARCHITECTURE
           ═══════════════════════════════════ */}
        <section id="architecture" className={styles.section}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <p className={styles.sectionDescription}>
            Content flows from AEM through a typed abstraction layer, is transformed by mappers,
            and delivered to React components via the content provider. When AEM is unavailable,
            i18n JSON serves as the fallback data source.
          </p>

          <div className={styles.pipeline}>
            <div className={styles.pipelineStep}>
              <p className={styles.pipelineStepTitle}>AEM Cloud</p>
              <p className={styles.pipelineStepSub}>Content Source</p>
              <p className={styles.pipelineDetail}>
                {`Content Fragments\nDAM Assets\nPersisted Queries`}
              </p>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <p className={styles.pipelineStepTitle}>GraphQL API</p>
              <p className={styles.pipelineStepSub}>Query Layer</p>
              <p className={styles.pipelineDetail}>
                {`${PERSISTED_QUERIES.length} persisted queries\nInline fallback queries\nfetchAEMContent()`}
              </p>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <p className={styles.pipelineStepTitle}>Content Provider</p>
              <p className={styles.pipelineStepSub}>Decision Logic</p>
              <p className={styles.pipelineDetail}>
                {`ENV var check\ni18n fallback\ngetAssetUrl()`}
              </p>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <p className={styles.pipelineStepTitle}>Mappers</p>
              <p className={styles.pipelineStepSub}>Data Transform</p>
              <p className={styles.pipelineDetail}>
                {CONTENT_MODELS.map((m) => m.mapper).join('\n')}
              </p>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <p className={styles.pipelineStepTitle}>Components</p>
              <p className={styles.pipelineStepSub}>React Components</p>
              <p className={styles.pipelineDetail}>
                {SPA_COMPONENTS.map((c) => c.component).join('\n')}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            3. SPA EDITOR INTEGRATION
           ═══════════════════════════════════ */}
        <section id="spa-editor" className={styles.section}>
          <h2 className={styles.sectionTitle}>SPA Editor Integration</h2>
          <p className={styles.sectionDescription}>
            All components are registered with the AEM SPA Editor via <code>MapTo</code> from
            <code> @adobe/aem-react-editable-components</code>. This enables inline editing when
            the app runs inside AEM Author mode (<code>?wcmmode=edit</code>).
          </p>

          <div className={styles.spaGrid}>
            {/* Component Registry */}
            <div className={styles.spaCard}>
              <h3 className={styles.spaCardTitle}>Component Registry</h3>
              <p className={styles.spaCardDesc}>
                Each component is registered with an AEM resource type via
                <code> registerAEMComponent()</code> in <code>src/lib/aem.ts</code>.
              </p>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>AEM Resource Type</th>
                    <th>Component</th>
                  </tr>
                </thead>
                <tbody>
                  {SPA_COMPONENTS.map((c) => (
                    <tr key={c.resourceType}>
                      <td><code>{c.resourceType}</code></td>
                      <td>{c.component}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Functions */}
            <div className={styles.spaCard}>
              <h3 className={styles.spaCardTitle}>Key Integration Functions</h3>
              <p className={styles.spaCardDesc}>
                Core utilities in <code>src/lib/aem.ts</code> and <code>src/lib/content.ts</code> that
                bridge the React app with AEM.
              </p>
              <ul className={styles.spaList}>
                <li><code>registerAEMComponent(resourceType, component)</code> — Maps component to AEM resource type</li>
                <li><code>isAEMAuthorMode()</code> — Detects wcmmode=edit or preview</li>
                <li><code>isAEMConfigured()</code> — Checks NEXT_PUBLIC_AEM_HOST env var</li>
                <li><code>fetchAEMContent(path)</code> — GraphQL query to AEM</li>
                <li><code>getAssetUrl(localPath)</code> — Resolves asset URLs (AEM DAM or local)</li>
                <li><code>AEMEditConfig</code> — Empty state / placeholder config for AEM Author</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            4. CONTENT MODELS
           ═══════════════════════════════════ */}
        <section id="content-models" className={styles.section}>
          <h2 className={styles.sectionTitle}>Content Fragment Models</h2>
          <p className={styles.sectionDescription}>
            Each AEM Content Fragment model maps to a specific frontend component through a typed
            mapper function. The AEM team should create Content Fragment Models with the fields
            listed below.
          </p>

          {CONTENT_MODELS.map((model) => (
            <div key={model.aemType} className={styles.modelCard}>
              <div className={styles.modelHeader}>
                <h3 className={styles.modelName}>{model.name}</h3>
                <span className={styles.modelType}>{model.aemType}</span>
                <span className={styles.modelMapper}>
                  Mapper: <code>{model.mapper}</code>
                </span>
                <span className={styles.modelTarget}>
                  Target: <strong>{model.target}</strong>
                </span>
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>AEM Field</th>
                    <th>AEM Type</th>
                    <th></th>
                    <th>Component Prop</th>
                    <th>Type</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {model.fields.map((f) => (
                    <tr key={f.aemField}>
                      <td><code>{f.aemField}</code></td>
                      <td>{f.aemType}</td>
                      <td style={{ color: '#9ca3af' }}>→</td>
                      <td style={{ color: 'var(--sjp-teal)', fontWeight: 600, fontFamily: "'SF Mono', monospace", fontSize: '12px' }}>
                        {f.prop}
                      </td>
                      <td>{f.type}</td>
                      <td style={{ color: '#9ca3af', fontStyle: 'italic' }}>{f.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════
            5. GRAPHQL QUERIES
           ═══════════════════════════════════ */}
        <section id="graphql-queries" className={styles.section}>
          <h2 className={styles.sectionTitle}>GraphQL Queries</h2>

          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>
            Persisted Query Paths
          </h3>
          <p className={styles.sectionDescription}>
            These paths are registered in AEM and called via the headless client. In development,
            inline fallback queries are used instead.
          </p>

          <table className={styles.table} style={{ marginBottom: '2rem' }}>
            <thead>
              <tr>
                <th>Key</th>
                <th>Persisted Query Path</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {PERSISTED_QUERIES.map((q) => (
                <tr key={q.key}>
                  <td><strong>{q.key}</strong></td>
                  <td><code>{q.path}</code></td>
                  <td>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      background: '#dcfce7',
                      color: '#166534',
                      marginRight: '6px',
                    }}>
                      Defined in code
                    </span>
                    <span style={{
                      display: 'inline-block',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 600,
                      background: '#fef3c7',
                      color: '#92400e',
                    }}>
                      Pending AEM registration
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>
            Inline Fallback Queries
          </h3>
          <p className={styles.sectionDescription}>
            Used during development before persisted queries are registered in AEM. These are the
            actual GraphQL queries from the codebase.
          </p>

          <div>
            <span className={styles.codeLabel}>homepage</span>
            <pre className={styles.codeBlock}>{HOMEPAGE_QUERY}</pre>
          </div>

          <div>
            <span className={styles.codeLabel}>latestNews</span>
            <pre className={styles.codeBlock}>{NEWS_QUERY}</pre>
          </div>
        </section>

        {/* ═══════════════════════════════════
            6. DATA FLOW DEMO
           ═══════════════════════════════════ */}
        <section id="data-flow" className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Flow Demo</h2>
          <p className={styles.sectionDescription}>
            Example transformation for a Hero Banner — showing the raw AEM GraphQL response
            and the mapped component props.
          </p>

          <div className={styles.dataFlowContainer}>
            <div>
              <div className={styles.dataFlowLabel}>
                <span className={`${styles.dataFlowBadge} ${styles.badgeAemLabel}`}>AEM</span>
                GraphQL Response (simulated)
              </div>
              <pre className={styles.codeBlock}>{AEM_RESPONSE_SAMPLE}</pre>
            </div>
            <div className={styles.dataFlowArrow}>
              <span>→</span>
              <span className={styles.dataFlowArrowText}>mapHeroBanner()</span>
            </div>
            <div>
              <div className={styles.dataFlowLabel}>
                <span className={`${styles.dataFlowBadge} ${styles.badgeComponentLabel}`}>Component</span>
                Mapped Props
              </div>
              <pre className={styles.codeBlock}>{COMPONENT_PROPS_SAMPLE}</pre>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════
            7. READINESS CHECKLIST
           ═══════════════════════════════════ */}
        <section id="checklist" className={styles.section}>
          <h2 className={styles.sectionTitle}>Readiness Checklist</h2>

          {/* Progress bar */}
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
          </div>

          <div className={styles.checklistGrid}>
            {/* Completed */}
            <div className={styles.checklistColumn}>
              <h3 className={`${styles.checklistColumnTitle} ${styles.completedTitle}`}>
                ✓ Completed
              </h3>
              {COMPLETED_ITEMS.map((item) => (
                <div key={item.title} className={styles.checkItem}>
                  <span className={`${styles.checkIcon} ${styles.checkIconGreen}`}>✓</span>
                  <div className={styles.checkItemContent}>
                    <p className={styles.checkItemTitle}>{item.title}</p>
                    <p className={styles.checkItemDesc}>{item.desc}</p>
                    <p className={styles.checkItemFile}>{item.file}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining */}
            <div className={styles.checklistColumn}>
              <h3 className={`${styles.checklistColumnTitle} ${styles.remainingTitle}`}>
                ○ Remaining Steps
              </h3>
              {REMAINING_ITEMS.map((item) => (
                <div key={item.title} className={styles.checkItem}>
                  <span className={`${styles.checkIcon} ${styles.checkIconOrange}`}>•</span>
                  <div className={styles.checkItemContent}>
                    <p className={styles.checkItemTitle}>{item.title}</p>
                    <p className={styles.checkItemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
