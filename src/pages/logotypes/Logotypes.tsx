import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Logotypes.module.css';
import Button from '../../components/Button.tsx';
import { useTranslation } from 'react-i18next';

export default function Logotypes() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('breadcrumb.materials'), url: ' ' },
    { label: t('breadcrumb.logotypes') },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('logotypes.hero')} />

      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          <b>Moldtelecom</b> {t('logotypes.description')}
        </div>
      </Block>

      <Block>
        <div
          className="title"
          style={{ maxWidth: '1050px', marginTop: '-60px' }}
        >
          {t('logotypes.main_logo')}
        </div>
        <img
          className={styles.main_logo_img}
          src="/images/47933701.png"
          alt="Moldtelecom"
        />
        <div className={styles.logotypes_btns}>
          <Button border="#E0E0E0" hover_bgcolor="#E0E0E0">
            {t('logotypes.download_svg')}
          </Button>
          <Button border="#E0E0E0" hover_bgcolor="#E0E0E0">
            {t('logotypes.download_png')}
          </Button>
        </div>
      </Block>

      <Block>
        <div
          className="title_2"
          style={{ maxWidth: '1050px', marginTop: '-60px' }}
        >
          {t('logotypes.variations')}
        </div>
        <div className={styles.logotypes_variations}>
          {['47933756', '56534765', '67903701', '47930701'].map(img => (
            <div key={img}>
              <img
                className={styles.main_logo_img_2}
                src={`/images/${img}.png`}
                alt="Moldtelecom"
              />
              <div className={styles.logotypes_btns}>
                <Button border="#E0E0E0" hover_bgcolor="#E0E0E0">
                  {t('logotypes.download_svg')}
                </Button>
                <Button border="#E0E0E0" hover_bgcolor="#E0E0E0">
                  {t('logotypes.download_png')}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          <div className="title_2" style={{ maxWidth: '1050px' }}>
            {t('logotypes.guidelines.title')}
          </div>
          {t('logotypes.guidelines.intro')}
          <br />
          <ul>
            <li>{t('logotypes.guidelines.item1')}</li>
            <li>{t('logotypes.guidelines.item2')}</li>
            <li>{t('logotypes.guidelines.item3')}</li>
            <li>{t('logotypes.guidelines.item4')}</li>
            <li>{t('logotypes.guidelines.item5')}</li>
          </ul>
          {t('logotypes.guidelines.contact')} <br />
          <a
            href="mailto:marketing@moldtelecom.md"
            style={{ color: '#174ea6' }}
          >
            marketing@moldtelecom.md
          </a>
        </div>
      </Block>

      <Footer />
    </>
  );
}
