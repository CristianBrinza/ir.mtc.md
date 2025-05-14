import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Logotypes.module.css';
import Button from '../../components/Button.tsx';

export default function Logotypes() {
  const breadcrumbItems = [
    { label: 'Materials', url: ' ' },
    { label: 'Logotypes ' },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Logotypes " />

      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          <b>Moldtelecom</b>’s visual identity reflects our commitment to
          innovation, reliability, and connection. To maintain brand consistency
          across all channels, we provide official logotypes and usage
          guidelines for partners, affiliates, and the media.
        </div>
      </Block>
      <Block>
        <div
          className="title"
          style={{ maxWidth: '1050px', marginTop: '-60px' }}
        >
          Main Logo
        </div>
        <img
          className={styles.main_logo_img}
          src="/images/47933701.png"
          alt="Moldtelecom"
        />
        <div className={styles.logotypes_btns}>
          <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
            Downlaod SVG
          </Button>
          <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
            Downlaod PNG
          </Button>
        </div>
      </Block>
      <Block>
        <div
          className="title_2"
          style={{ maxWidth: '1050px', marginTop: '-60px' }}
        >
          Logo Variations
        </div>
        <div className={styles.logotypes_variations}>
          <div>
            <img
              className={styles.main_logo_img_2}
              src="/images/47933756.png"
              alt="Moldtelecom"
            />
            <div className={styles.logotypes_btns}>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod SVG
              </Button>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod PNG
              </Button>
            </div>
          </div>
          <div>
            <img
              className={styles.main_logo_img_2}
              src="/images/56534765.png"
              alt="Moldtelecom"
            />
            <div className={styles.logotypes_btns}>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod SVG
              </Button>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod PNG
              </Button>
            </div>
          </div>
          <div>
            <img
              className={styles.main_logo_img_2}
              src="/images/67903701.png"
              alt="Moldtelecom"
            />
            <div className={styles.logotypes_btns}>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod SVG
              </Button>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod PNG
              </Button>
            </div>
          </div>
          <div>
            <img
              className={styles.main_logo_img_2}
              src="/images/47930701.png"
              alt="Moldtelecom"
            />
            <div className={styles.logotypes_btns}>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod SVG
              </Button>
              <Button border={'#E0E0E0'} hover_bgcolor={'#E0E0E0'}>
                Downlaod PNG
              </Button>
            </div>
          </div>
        </div>
      </Block>

      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          <div className="title_2" style={{ maxWidth: '1050px' }}>
            Brand Usage Guidelines
          </div>
          To preserve the integrity of the Moldtelecom brand, please follow
          these basic usage rules:
          <br />
          <ul>
            <li>Do not alter or distort the logo in any way;</li>
            <li>Maintain sufficient clear space around the logo;</li>
            <li>Use only the official versions provided;</li>
            <li>Avoid placing the logo on visually complex backgrounds;</li>
            <li>
              For co-branded projects, obtain approval from Moldtelecom’s brand
              team;
            </li>
          </ul>
          For the full branding manual and inquiries regarding custom use,
          please contact us at <br />
          <a
            href="mailto: marketing@moldtelecom.md"
            style={{ color: '#174ea6' }}
          >
            marketing@moldtelecom.md{' '}
          </a>
        </div>
      </Block>

      <Footer />
    </>
  );
}
