import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import Block from '../../components/block/Block.tsx';
import Footer from '../../components/footer/Footer.tsx';
import styles from './Directors.module.css';

export default function Directors() {
  const breadcrumbItems = [
    { label: 'Corporate governance', url: ' ' },
    { label: 'Directors & Administration' },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Directors & Administration" />

      <Block>
        <div
          className="text"
          style={{ maxWidth: '1050px', marginBottom: '-50px' }}
        >
          At Moldtelecom S.A., our leadership team is committed to corporate
          governance principles, strategic growth, and operational excellence.
          The Board of Directors and Executive Management work together to
          ensure the company delivers long-term value for shareholders,
          customers, and stakeholders.
        </div>
      </Block>
      <Block>
        <div className="title" style={{ maxWidth: '1050px' }}>
          Board of Directors
        </div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          The Board of Directors oversees the company’s strategic direction and
          is responsible for supervising the executive team. With a diverse
          background in telecommunications, finance, and public policy, our
          board ensures accountability, transparency, and compliance with legal
          and ethical standards.
        </div>
        <div className={`title_2 ${styles.directors_title}`}>
          General Director
        </div>
        <div className={styles.directors_list}>
          <div className={styles.directors_card}>
            <img
              src="/images/67530732.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Viorel Motorniuc</div>
            <div className={styles.directors_position}>
              <b>(CEO) General Director</b>
            </div>
          </div>
        </div>
        <div className={`title_2 ${styles.directors_title}`}>Directors</div>
        <div className={styles.directors_list}>
          <div className={styles.directors_card}>
            <img
              src="/images/67539731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Rodica Hurmuzache</div>
            <div className={styles.directors_position}>
              <b> Marketing Direction Director</b>{' '}
              <span>
                <br /> Comercial Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Alexandru Guzun</div>
            <div className={styles.directors_position}>
              <b> Procurement & Facilities Director</b>{' '}
              <span>
                <br /> Comercial Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Irina Novicov</div>
            <div className={styles.directors_position}>
              <b> HR Director</b>{' '}
              <span>
                <br /> HR Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Ana Gore</div>
            <div className={styles.directors_position}>
              <b> B2B Direction Director</b>{' '}
              <span>
                <br /> Comercial Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Alexandru Cojocari</div>
            <div className={styles.directors_position}>
              <b> Legal & Regulatory Director</b>{' '}
              <span>
                <br /> Legal Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Cornel Sochirca</div>
            <div className={styles.directors_position}>
              <b> Security Director</b>{' '}
              <span>
                <br /> Security Department
              </span>
            </div>
          </div>
          <div className={styles.directors_card}>
            <img
              src="/images/47533731.png"
              alt="Moldtelecom"
              className={styles.directors_img}
            />
            <div className={styles.directors_name}>Alexandru Barbalat</div>
            <div className={styles.directors_position}>
              <b> IT Director</b>{' '}
              <span>
                <br /> IT Department
              </span>
            </div>
          </div>
        </div>
      </Block>

      <Block style={{ borderLeft: '1px solid #d2d2d2', marginTop: '-80px' }}>
        <div className="title_2" style={{ maxWidth: '1050px' }}>
          Leadership Vision
        </div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Moldtelecom’s leadership is driven by a clear vision: to deliver
          innovation and reliability in every service we offer. Our management
          team leads with purpose, adapting to market dynamics while remaining
          grounded in long-term value creation for all stakeholders.
        </div>
      </Block>
      <Block style={{ borderLeft: '1px solid #d2d2d2', marginTop: '-80px' }}>
        <div className="title_2" style={{ maxWidth: '1050px' }}>
          Strategic Oversight
        </div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Through structured board meetings, performance reviews, and strategic
          planning sessions, Moldtelecom’s directors ensure effective oversight
          of the company’s operations. We are dedicated to upholding a
          governance framework that strengthens accountability and maintains
          stakeholder confidence.
        </div>
      </Block>
      <Block
        style={{
          borderLeft: '1px solid #d2d2d2',
          marginTop: '-80px',
          marginBottom: '20px',
        }}
      >
        <div className="title_2" style={{ maxWidth: '1050px' }}>
          Transparent Communication
        </div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Moldtelecom is committed to open and proactive communication with
          investors, regulators, and the public. We regularly publish financial
          reports, updates, and governance disclosures, ensuring that all
          stakeholders are informed and empowered to evaluate our performance
          and policies.
        </div>
      </Block>

      <Footer />
    </>
  );
}
