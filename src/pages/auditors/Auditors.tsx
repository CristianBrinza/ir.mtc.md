import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Auditors.module.css';
import Footer from '../../components/footer/Footer.tsx';

export default function Auditors() {
  const breadcrumbItems = [{ label: 'Auditors' }];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Auditors" />
      <Block>
        <div className={styles.reports}></div>
      </Block>

      <Footer />
    </>
  );
}
