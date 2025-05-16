import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Block from '../../components/block/Block';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';

export default function Sustainability() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('sustainability.breadcrumb') }];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('sustainability.title')} />

      <Block style={{ marginBottom: '-80px' }}>
        <p>{t('sustainability.intro')}</p>
      </Block>

      <Block style={{ marginBottom: '-60px' }}>
        <div className="title">{t('sustainability.environmental.title')}</div>
        <p>{t('sustainability.environmental.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-60px' }}>
        <div className="title">{t('sustainability.social.title')}</div>
        <p>{t('sustainability.social.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-60px' }}>
        <div className="title">{t('sustainability.governance.title')}</div>
        <p>{t('sustainability.governance.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-60px' }}>
        <div className="title">{t('sustainability.initiatives.title')}</div>
        <p>{t('sustainability.initiatives.text')}</p>
      </Block>

      <Block style={{ marginBottom: '40px' }}>
        <div className="title">{t('sustainability.future.title')}</div>
        <p>{t('sustainability.future.text')}</p>
      </Block>

      <Footer />
    </>
  );
}
