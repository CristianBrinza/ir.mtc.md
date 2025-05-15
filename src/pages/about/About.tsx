import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './About.module.css';
import Footer from '../../components/footer/Footer.tsx';
import { t } from 'i18next';

export default function About() {
  const breadcrumbItems = [{ label: t('navbar.aboutus') }];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('navbar.aboutus')} />
      <Block>
        <div className={styles.about}></div>
      </Block>

      <Footer />
    </>
  );
}
