import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Awards.module.css';
import Footer from '../../components/footer/Footer.tsx';

export default function Awards() {
  const { t } = useTranslation();
  const breadcrumbItems = [
    { label: t('breadcrumb.about'), url: ' ' },
    { label: t('breadcrumb.awards') },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('awards.hero_title')} />
      <Block>
        <div className={styles.awards_card}>
          <img
            src="/images/27530732.png"
            alt="Moldtelecom"
            className={styles.awards_card_img}
          />
          <div className="title">{t('awards.card_1_title')}</div>
          <div className="text">{t('awards.card_1_text')}</div>
          <div className={styles.awards_card_small_text}>
            {(t('awards.card_1_list', { returnObjects: true }) as string[]).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
            {t('awards.card_1_conclusion')}
          </div>
        </div>
        <div className={styles.awards_card}>
          <img
            src="/images/97530732.png"
            alt="Moldtelecom"
            className={styles.awards_card_img}
          />
          <div className="title">{t('awards.card_2_title')}</div>
          <div className="text">{t('awards.card_2_text')}</div>
          <div className={styles.awards_card_small_text}>
            {t('awards.card_2_desc')}
          </div>
        </div>
        <div className={styles.awards_card}>
          <img
            src="/images/97530702.png"
            alt="Moldtelecom"
            className={styles.awards_card_img}
          />
          <div className="title">{t('awards.card_3_title')}</div>
          <div className="text">{t('awards.card_3_text')}</div>
          <div className={styles.awards_card_small_text}>
            {t('awards.card_3_desc')}
          </div>
        </div>
      </Block>
      <Footer />
    </>
  );
}
