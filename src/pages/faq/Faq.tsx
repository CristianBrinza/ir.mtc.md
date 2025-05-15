import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './FAQ.module.css';
import Footer from '../../components/footer/Footer.tsx';

export default function Faq() {
  const breadcrumbItems = [{ label: 'FAQ' }];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="FAQ" />
      <Block>
        <div className={styles.faq}></div>
      </Block>

      <Footer />
    </>
  );
}
