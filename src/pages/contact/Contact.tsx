import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Block from '../../components/block/Block.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Contact.module.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('navbar.aboutus'), url: ' ' },
    { label: t('breadcrumb.contact') },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('contact.title')} />
      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          {t('contact.intro')}
          <br />
          <br />
          <b>{t('contact.hours_title')}</b>
          <br />
          {t('contact.hours')}
          <br />
          <br />
          <b>{t('contact.email_title')}</b>
          <br />
          <a href="mailto:info@moldtelecom.md" className={styles.link}>
            info@moldtelecom.md
          </a>
          <br />
          <br />
          <b>{t('contact.phone_title')}</b>
          <br />
          <a href="tel:+37322222222" className={styles.link}>
            +373 22 222 222
          </a>
          <br />
          <br />
          <b>{t('contact.address_title')}</b>
          <br />
          {t('contact.address')}
        </div>
      </Block>
      <Footer />
    </>
  );
}
