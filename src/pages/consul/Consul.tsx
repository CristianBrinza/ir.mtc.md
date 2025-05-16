import { useTranslation } from 'react-i18next';
import styles from './Consul.module.css';
import Footer from '../../components/footer/Footer.tsx';
import Navbar from '../../components/navbar/Navbar.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Block from '../../components/block/Block.tsx';

export default function Consul() {
  const { t } = useTranslation();
  const breadcrumbItems = [{ label: t('consul.title') }];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('consul.title')} />

      <Block>
        <div className="title">{t('consul.council_title')}</div>
        <ul className={styles.report_ul}>
          <li>
            {t('consul.president')} - <b>Valerian BOBU</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Ala POPAS</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Natalia PATRAȘCU</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Nicolai MÎNDRA</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Alina CERTAN</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Ion MIHALACHI</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Dumitru VICOL</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Vitalie STELEA</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Elena MANOLE</b>
          </li>
          <li>
            {t('consul.state_rep')} - <b>Viorica BOLUN</b>
          </li>
        </ul>
      </Block>

      <Block>
        <div className="title">{t('consul.censors_title')}</div>
        <ul className={styles.report_ul}>
          <li>
            {t('consul.council_member')} - <b>Nelli ERMURACHI</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Stela PADUCA</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Victoria BLĂNUȚĂ</b>
          </li>
        </ul>
      </Block>

      <Block>
        <div className="title">{t('consul.audit_title')}</div>
        <ul className={styles.report_ul}>
          <li>
            {t('consul.council_member')} - <b>Tatiana GORCEAC</b> (
            {t('consul.audit_president')})
          </li>
          <li>
            {t('consul.council_member')} - <b>Andrei BALAN</b>
          </li>
          <li>
            {t('consul.council_member')} - <b>Rodica NICOARĂ</b>
          </li>
        </ul>
      </Block>
      <Block>&nbsp;</Block>

      <Footer />
    </>
  );
}
