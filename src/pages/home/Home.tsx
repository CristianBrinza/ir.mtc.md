import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/footer/Footer.tsx';
import Button from '../../components/Button.tsx';
import React from 'react';

export default function Home() {
  const { t } = useTranslation();

  const settings_carousell_1 = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 3 } },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  const settings_carousell_2 = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 3 } },
      { breakpoint: 951, settings: { slidesToShow: 2 } },
      { breakpoint: 651, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Navbar />

      <div className={styles.home_hero}>
        <div className={styles.home_hero_inside}>
          <div className={styles.home_hero_inside_pretitle}>
            {t('home.hero.pretitle')}
          </div>
          <div className={styles.home_hero_inside_title}>
            {t('home.hero.title_line1')} <br />
            {t('home.hero.title_line2')}
          </div>
          <div className={styles.home_hero_inside_subtitle}>
            {t('home.hero.subtitle')}
          </div>
          <Button
            bgcolor={'var(--theme_primary_color_black)'}
            color={'var(--theme_primary_color_white)'}
            hover_bgcolor={'var(--theme_primary_color_black)'}
            hover_color={'var(--theme_primary_color_white)'}
          >
            {t('home.hero.button')}
          </Button>
        </div>
      </div>

      <Block>
        <div className="title">{t('home.financial.title')}</div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          {t('home.financial.description')}
        </div>

        <Slider
          {...settings_carousell_1}
          className={`${styles.home_carousel_1} mtc_carousell`}
        >
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                <TranslatedWithBreaks text={t('home.carousel1.card_title_1')} />
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                {t('home.carousel1.card_subtitle_1')}
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                {t('home.carousel1.card_link')}
              </a>
            </div>
          </div>{' '}
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                <TranslatedWithBreaks text={t('home.carousel1.card_title_2')} />
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                {t('home.carousel1.card_subtitle_2')}
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                {t('home.carousel1.card_link')}
              </a>
            </div>
          </div>
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                <TranslatedWithBreaks text={t('home.carousel1.card_title_3')} />
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                {t('home.carousel1.card_subtitle_3')}
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                {t('home.carousel1.card_link')}
              </a>
            </div>
          </div>
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                <TranslatedWithBreaks text={t('home.carousel1.card_title_4')} />
              </div>

              <div className={styles.home_carousel_1_card_inside_subtitle}>
                {t('home.carousel1.card_subtitle_4')}
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                {t('home.carousel1.card_link')}
              </a>
            </div>
          </div>
        </Slider>
      </Block>

      <div className={styles.home_full_block}>
        <div className={styles.home_full_block_inside}>
          <div className="title">{t('home.materials.title')}</div>
          <div className="text">{t('home.materials.description')}</div>
        </div>
      </div>

      <Block>
        <div className="title_2">{t('home.numbers.title')}</div>
        <div className={styles.home_us_in_numbers}>
          {[
            { value: '4.592.000 MDL', label: t('home.numbers.assets') },
            { value: '18.0%', label: t('home.numbers.roe') },
            { value: '20.6%', label: t('home.numbers.car') },
            { value: '1.7%', label: t('home.numbers.npl') },
            { value: '1.329.000 MDL', label: t('home.numbers.profit') },
          ].map((item, index) => (
            <div key={index} className={styles.home_us_in_numbers_card}>
              <div className={styles.home_us_in_numbers_title}>
                {item.value}
              </div>
              <div className={styles.home_us_in_numbers_subtitle}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <div className="title_2">{t('home.latest_news.title')}</div>
        <Slider
          {...settings_carousell_2}
          className={`${styles.home_carousel_2} mtc_carousell`}
        >
          {['report', 'agm', 'terms'].map((key, i) => (
            <div key={i} className={styles.home_carousel_2_card}>
              <div className={styles.home_carousel_2_card_inside}>
                <img
                  src="/images/67534731.png"
                  alt="Moldtelecom"
                  className={styles.home_carousel_2_card_inside_img}
                />
                <div className={styles.home_carousel_2_card_inside_pretitle}>
                  {t(`home.latest_news.${key}.pretitle`)}
                </div>
                <div className={styles.home_carousel_2_card_inside_title}>
                  {t(`home.latest_news.${key}.title`)}
                </div>
                <div className={styles.home_carousel_2_card_inside_subtitle}>
                  {t(`home.latest_news.${key}.subtitle`)}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Block>

      <Footer />
    </>
  );
}

function TranslatedWithBreaks({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i !== arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
