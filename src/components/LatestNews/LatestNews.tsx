'use client';

import { useTranslation } from 'react-i18next';
import styles from './LatestNews.module.css';

interface NewsCardProps {
  category: string;
  readTime: number;
  title: string;
  date: string;
  image?: string;
  href: string;
  borderColor?: 'teal' | 'orange';
}

function NewsCard({
  category,
  readTime,
  title,
  date,
  image,
  href,
  borderColor = 'teal',
}: NewsCardProps) {
  const { t } = useTranslation();

  return (
    <a href={href} className={`${styles.card} ${styles[borderColor]}`}>
      <div className={styles.cardImage}>
        {image ? (
          <img src={image} alt="" className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.readTime}>
            {readTime} {t('latestNews.minuteRead')}
          </span>
        </div>

        <h3 className={styles.cardTitle}>{title}</h3>

        <time className={styles.date}>{date}</time>
      </div>
    </a>
  );
}

interface LatestNewsProps {
  articles: NewsCardProps[];
}

export default function LatestNews({ articles }: LatestNewsProps) {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>{t('latestNews.title')}</h2>
          <a href="/news" className={styles.readAll}>
            {t('latestNews.readAllNews')}
          </a>
        </div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <NewsCard
              key={article.href + index}
              {...article}
              borderColor={index % 2 === 0 ? 'teal' : 'orange'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { NewsCard };
export type { NewsCardProps, LatestNewsProps };
