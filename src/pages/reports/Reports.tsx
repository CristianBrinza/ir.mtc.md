import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Reports.module.css';
import Footer from '../../components/footer/Footer.tsx';

export default function Reports() {
  const breadcrumbItems = [{ label: 'Reports' }];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Reports" />
      <Block>
        <div className={styles.reports}></div>
      </Block>

      <Footer />
    </>
  );
}
