import Navbar from '../../components/navbar/Navbar.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/footer/Footer.tsx';
import Button from '../../components/Button.tsx';
export default function Home() {
  const settings_carousell = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 951,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />

      <div className={styles.home_hero}>
        <div className={styles.home_hero_inside}>
          <div className={styles.home_hero_inside_pretitle}>
            Moldtelecom publică
          </div>
          <div className={styles.home_hero_inside_title}>
            Raportul <br />
            anual 2024
          </div>
          <div className={styles.home_hero_inside_subtitle}>
            Investor Relations provides relevant and reliable information <br />{' '}
            <br />
          </div>
          <Button
            bgcolor={'var(--theme_primary_color_black)'}
            color={'var(--theme_primary_color_white)'}
            hover_bgcolor={'var(--theme_primary_color_black)'}
            hover_color={'var(--theme_primary_color_white)'}
          >
            See more
          </Button>
        </div>
      </div>
      <Block>
        <div className="title">Financial information</div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Investor Relations provides relevant and reliable information about
          the financial performance of Moldtelecom S.A. to the financial markets
          and other external stakeholders.
        </div>

        <Slider
          {...settings_carousell}
          className={`${styles.home_carousel_1} mtc_carousell`}
        >
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                News <br />& Events
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                Here you will find the latest news from Moldtelecom
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                See more details
              </a>
            </div>
          </div>
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                News <br />& Events
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                Here you will find the latest news from Moldtelecom
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                See more details
              </a>
            </div>
          </div>
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                News <br />& Events
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                Here you will find the latest news from Moldtelecom
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                See more details
              </a>
            </div>
          </div>
          <div className={styles.home_carousel_1_card}>
            <div className={styles.home_carousel_1_card_inside}>
              <div className={styles.home_carousel_1_card_inside_title}>
                News <br />& Events
              </div>
              <div className={styles.home_carousel_1_card_inside_subtitle}>
                Here you will find the latest news from Moldtelecom
              </div>
              <a
                className={styles.home_carousel_1_card_inside_link}
                href="/news"
              >
                See more details
              </a>
            </div>
          </div>
        </Slider>
      </Block>
      <Footer />
    </>
  );
}
