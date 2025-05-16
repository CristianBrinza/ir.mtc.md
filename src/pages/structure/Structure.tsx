import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Block from '../../components/block/Block';
import Footer from '../../components/footer/Footer';
import styles from './Structure.module.css';
import { useTranslation } from 'react-i18next';

export default function Structure() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('structure.breadcrumb') }];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('structure.title')} />

      {/*<Block>*/}
      {/*  <p>{t('structure.intro')}</p>*/}
      {/*</Block>*/}

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.it.title')}</div>
        <p>{t('structure.it.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.commercial.title')}</div>
        <p>{t('structure.commercial.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.customer.title')}</div>
        <p>{t('structure.customer.text')}</p>
        <ul className={styles.report_ul}>
          <li>{t('structure.customer.list.0')}</li>
          <li>{t('structure.customer.list.1')}</li>
          <li>{t('structure.customer.list.2')}</li>
          <li>{t('structure.customer.list.3')}</li>
          <li>{t('structure.customer.list.4')}</li>
          <li>{t('structure.customer.list.5')}</li>
          <li>{t('structure.customer.list.6')}</li>
        </ul>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.marketing.title')}</div>
        <p>{t('structure.marketing.text')}</p>
        <ul className={styles.report_ul}>
          <li>{t('structure.marketing.list.0')}</li>
          <li>{t('structure.marketing.list.1')}</li>
          <li>{t('structure.marketing.list.2')}</li>
          <li>{t('structure.marketing.list.3')}</li>
          <li>{t('structure.marketing.list.4')}</li>
          <li>{t('structure.marketing.list.5')}</li>
          <li>{t('structure.marketing.list.6')}</li>
        </ul>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.hr.title')}</div>
        <p>{t('structure.hr.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.advanced.title')}</div>
        <p>{t('structure.advanced.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.maintenance.title')}</div>
        <p>{t('structure.maintenance.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.procurement.title')}</div>
        <p>{t('structure.procurement.text')}</p>
        <ul className={styles.report_ul}>
          <li>{t('structure.procurement.list.0')}</li>
          <li>{t('structure.procurement.list.1')}</li>
          <li>{t('structure.procurement.list.2')}</li>
          <li>{t('structure.procurement.list.3')}</li>
          <li>{t('structure.procurement.list.4')}</li>
          <li>{t('structure.procurement.list.5')}</li>
        </ul>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.legal.title')}</div>
        <p>{t('structure.legal.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.finance.title')}</div>
        <p>{t('structure.finance.text')}</p>
        <ul className={styles.report_ul}>
          <li>{t('structure.finance.list.0')}</li>
          <li>{t('structure.finance.list.1')}</li>
          <li>{t('structure.finance.list.2')}</li>
          <li>{t('structure.finance.list.3')}</li>
          <li>{t('structure.finance.list.4')}</li>
          <li>{t('structure.finance.list.5')}</li>
          <li>{t('structure.finance.list.6')}</li>
        </ul>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.security.title')}</div>
        <p>{t('structure.security.text')}</p>
      </Block>

      <Block style={{ marginBottom: '-30px' }}>
        <div className="title">{t('structure.audit.title')}</div>
        <p>{t('structure.audit.text')}</p>
      </Block>

      <Footer />
    </>
  );
}
