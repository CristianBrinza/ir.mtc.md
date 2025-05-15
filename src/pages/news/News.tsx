import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './News.module.css';
import Footer from '../../components/footer/Footer.tsx';
import i18n from '../../i18n.tsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  id: number;
  image: string;
  pretitle: string;
  subtitle: string;
  title_ro: string;
  title_ru: string;
  title_en: string;
  link: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('breadcrumb.news') }];

  const getTitleByLanguage = (page: NewsItem): string => {
    switch (i18n.language) {
      case 'ro':
        return page.title_ro;
      case 'ru':
        return page.title_ru;
      case 'en':
      default:
        return page.title_en;
    }
  };

  useEffect(() => {
    fetch('/json/news.json')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error('Failed to load news:', err));
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="News and Events" />
      <Block style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {news.map(item => (
          <Link key={item.id} className={styles.news} to={`${item.link}`}>
            <img
              className={styles.news_img}
              src={item.image}
              alt={getTitleByLanguage(item)} // fix alt
            />
            <div className={styles.news_inside}>
              <div className={styles.news_pretitle}>{item.pretitle}</div>
              <div className={styles.news_title}>
                {getTitleByLanguage(item)}
              </div>{' '}
              {/* multilingual title */}
              <div className={styles.news_subtitle}>{item.subtitle}</div>
            </div>
          </Link>
        ))}
      </Block>

      <Footer />
    </>
  );
}
