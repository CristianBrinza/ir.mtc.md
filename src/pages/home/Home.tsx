import Navbar from '../../components/navbar/Navbar.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../../components/footer/Footer.tsx';
import Button from '../../components/Button.tsx';
export default function Home() {
  const settings_carousell_1 = {
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
  const settings_carousell_2 = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4500,
    slidesToShow: 3,
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
          {...settings_carousell_1}
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
      <div className={styles.home_full_block}>
        <div className={styles.home_full_block_inside}>
          <div className="title">Financial Information & Materials</div>
          <div className="text">
            Transparent insights into Moldtelecom’s financial results,
            strategies, and investor updates
          </div>
        </div>
      </div>
      <Block>
        <div className="title_2">Us in numbers</div>
        <div className={styles.home_us_in_numbers}>
          <div className={styles.home_us_in_numbers_card}>
            <div className={styles.home_us_in_numbers_title}>
              4.592.000 <span style={{ fontSize: '20px' }}>MDL</span>
            </div>
            <div className={styles.home_us_in_numbers_subtitle}>
              Total assets 12M 2024
            </div>
          </div>
          <div className={styles.home_us_in_numbers_card}>
            <div className={styles.home_us_in_numbers_title}>18.0%</div>
            <div className={styles.home_us_in_numbers_subtitle}>
              ROE 12M 2024
            </div>
          </div>
          <div className={styles.home_us_in_numbers_card}>
            <div className={styles.home_us_in_numbers_title}>20.6%</div>
            <div className={styles.home_us_in_numbers_subtitle}>
              CAR Ratio 12M 2024
            </div>
          </div>
          <div className={styles.home_us_in_numbers_card}>
            <div className={styles.home_us_in_numbers_title}>1.7%</div>
            <div className={styles.home_us_in_numbers_subtitle}>
              NPL ratio 12M 2024
            </div>
          </div>
          <div className={styles.home_us_in_numbers_card}>
            <div className={styles.home_us_in_numbers_title}>
              1.329.000 <span style={{ fontSize: '20px' }}>MDL</span>
            </div>
            <div className={styles.home_us_in_numbers_subtitle}>
              Total profit 12M 2024
            </div>
          </div>
        </div>
      </Block>
      <Block>
        <div className="title_2">Latest news</div>
        <Slider
          {...settings_carousell_2}
          className={`${styles.home_carousel_2} mtc_carousell`}
        >
          <div className={`${styles.home_carousel_2_card}`}>
            <div className={`${styles.home_carousel_2_card_inside}`}>
              <img
                src="/images/67534731.png"
                alt="Moldtelecom"
                className={`${styles.home_carousel_2_card_inside_img}`}
              />
              <div className={styles.home_carousel_2_card_inside_pretitle}>
                Reports
              </div>
              <div className={styles.home_carousel_2_card_inside_title}>
                Uploaded Financial Reports for 2024
              </div>
              <div className={styles.home_carousel_2_card_inside_subtitle}>
                Updated February 12, 2025
              </div>
            </div>
          </div>
          <div className={`${styles.home_carousel_2_card}`}>
            <div className={`${styles.home_carousel_2_card_inside}`}>
              <img
                src="/images/67534731.png"
                alt="Moldtelecom"
                className={`${styles.home_carousel_2_card_inside_img}`}
              />
              <div className={styles.home_carousel_2_card_inside_pretitle}>
                Announcements
              </div>
              <div className={styles.home_carousel_2_card_inside_title}>
                Moldtelecom Investors Annual General Meeting 2025
              </div>
              <div className={styles.home_carousel_2_card_inside_subtitle}>
                Updated May 18, 2024
              </div>
            </div>
          </div>
          <div className={`${styles.home_carousel_2_card}`}>
            <div className={`${styles.home_carousel_2_card_inside}`}>
              <img
                src="/images/67534731.png"
                alt="Moldtelecom"
                className={`${styles.home_carousel_2_card_inside_img}`}
              />
              <div className={styles.home_carousel_2_card_inside_pretitle}>
                Support
              </div>
              <div className={styles.home_carousel_2_card_inside_title}>
                Update in new “Terms and Conditions”
              </div>
              <div className={styles.home_carousel_2_card_inside_subtitle}>
                Updated June 1, 2023
              </div>
            </div>
          </div>
        </Slider>
      </Block>
      <Footer />
    </>
  );
}
