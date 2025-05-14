import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Awards.module.css';
import Footer from '../../components/footer/Footer.tsx';

export default function Awards() {
  const breadcrumbItems = [
    { label: 'About us', url: ' ' },
    { label: 'Awards' },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Our Awards" />
      <Block>
        <div className={styles.awards_card}>
          <img
            src="/images/27530732.png"
            alt="Moldteleocom"
            className={styles.awards_card_img}
          />
          <div
            className="title"
            style={{ maxWidth: '1050px', margin: '10px 0 10px' }}
          >
            „Marca Comercială a Anului 2022”
          </div>
          <div className="text">
            În anul 2020 Moltelecom a avut o evoluție pozitivă în contextul
            pieții de comunicații electronice din Republica Moldova.
          </div>
          <div className={styles.awards_card_small_text}>
            Moldtelecom a finalizat cu succes ambele etape din planul de
            extindere a rețelei LTE Advanced:
            <ul>
              <li>
                Singurul operator care a înregistrat o creștere de venituri și
                cotă de piață în tr.3 2020 comparativ cu tr.3 2019, la telefonie
                mobilă
              </li>
              <li>Menține poziția de lider pe piața de internet fix</li>
              <li>
                Lider pe piață la capitolul venituri din serviciile de IPTV
              </li>
              <li>
                Aplicația MyMoldtelecom a ajuns la 46470 de utilizatori, cu 114%
                în creștere
              </li>
            </ul>
            În ce privește veniturile, aferente serviciilor de telefonie mobilă,
            acestea au crescut cu 1,5 %, iar cota de piață s-a majorat cu 0,6
            puncte procentuale, fiind și la acest capitol singurul operator care
            a înregistrat o creștere de venituri și cotă de piață în Q3, 2020
            comparativ cu Q3, 2019.
          </div>
        </div>
        <div className={styles.awards_card}>
          <img
            src="/images/97530732.png"
            alt="Moldteleocom"
            className={styles.awards_card_img}
          />
          <div
            className="title"
            style={{ maxWidth: '1050px', margin: '10px 0 10px' }}
          >
            „Marca Comercială a Anului 2022”
          </div>
          <div className="text">
            Moldtelecom își menține poziția de lider pe piață la capitolul
            venituri în contextul IPTV
          </div>
          <div className={styles.awards_card_small_text}>
            Serviciile de internet fix sunt prestate în peste 1200 de localități
            din țară, iar aproximativ 65% din ele sunt deja acoperite cu fibră
            optică. În primele 8 luni ale anului curent compania și-a lărgit
            prezența cu fibră în peste 80 localități. Astfel, peste 15 mii de
            clienți au avut posibilitate de conectare, iar până la sfârșitul
            anului curent alte 170 de localități în total și aproximativ 40 mii
            de clienți vor putea beneficia de servicii de Internet fix cu viteză
            de până la 1 Gbps. Moldtelecom este driver-ul vieții digitale din
            țară. În cei peste 27 ani de experiență, compania a dezvoltat cea
            mai avansată rețea de fibră optică, cu o lungime totală de peste 18
            mii km, fiind de 10 ori mai rapidă decât oricare alta din țară și
            care în următorii 3 ani va fi disponibilă pe întreg teritoriul
            țării.
          </div>
        </div>
        <div className={styles.awards_card}>
          <img
            src="/images/97530702.png"
            alt="Moldteleocom"
            className={styles.awards_card_img}
          />
          <div
            className="title"
            style={{ maxWidth: '1050px', margin: '10px 0 10px' }}
          >
            Poziția de lider în portabilitate 2023
          </div>
          <div className="text">
            Pentru al doilea an consecutiv, Moldtelecom este lider în numărul de
            abonați de telefonie mobilă care au decis să porteze.
          </div>
          <div className={styles.awards_card_small_text}>
            Potrivit datelor prezentate de Agenţia Naţională pentru Reglementare
            în Comunicaţii Electronice şi Tehnologia Informaţiei (ANRCETI),
            91075 de numere de telefonie mobilă și fixă au portat în alte rețele
            în anul 2022, în creștere cu peste 5% comparativ cu 2021.
            Majoritatea numerelor mobile (37,2%) au fost primite în rețeaua sa
            de către compania Moldtelecom.
          </div>
        </div>
      </Block>
      <Footer />
    </>
  );
}
