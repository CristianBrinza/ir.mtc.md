import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './MisionVision.module.css';
import Footer from '../../components/footer/Footer.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';

export default function MisionVision() {
  const breadcrumbItems = [
    { label: 'About us', url: ' ' },
    { label: 'Mision & Vision' },
  ];
  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title="Mision & Vision" />
      <Block>
        <div className="title">Viziunea Moldtelecom</div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Să devenim liderul incontestabil al pieței de telecomunicații din
          Moldova, prin inovație tehnologică, servicii de calitate superioară și
          o imagine modernă care inspiră încredere.
          <br />
          <br />
          Ne propunem să transformăm Moldtelecom într-un brand de referință,
          caracterizat prin autenticitate, comunicare transparentă și o relație
          solidă cu clienții noștri, contribuind semnificativ la digitalizarea
          și dezvoltarea societății moldovenești.
          <br />
          <br />
          <b> Poziționare internațională:</b> <br />
          Plasarea Moldovei printre țările cu tehnologii moderne și accesibile
          pentru toți cetățenii.
        </div>
      </Block>
      <Block>
        <div className="title">Misiunea Moldtelecom</div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          Conectăm oamenii prin servicii de telecomunicații de înaltă calitate,
          oferind soluții inovatoare, sigure și accesibile, care îmbunătățesc
          viața de zi cu zi și sprijină dezvoltarea digitală a Moldovei.
          <br />
          <br />
          Ne angajăm să furnizăm experiențe autentice, de încredere și ușor de
          accesat, consolidând poziția noastră în următoarele direcții
          strategice:
        </div>
        <div className={styles.blocks_in_line}>
          <div className={styles.blocks_in_line_card}>
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11497_2975)">
                <path
                  d="M38.2126 18.6053H31.978V11.009C33.2679 10.9135 34.3428 10.7224 35.2028 10.4357C36.1105 10.1013 36.851 9.69524 37.4243 9.21749C37.9976 8.69196 38.4515 8.11866 38.7859 7.49758C39.1681 6.82873 39.4787 6.11211 39.7175 5.34771H49.7503V52H38.2126V18.6053Z"
                  fill="#D2E3FC"
                />
                <path
                  d="M31.9807 29.9548L31.279 33.8144H34.1399L33.6271 36.8912H30.7392L30.0374 40.6968H26.6097L27.2845 36.8912H24.5045L23.8298 40.6968H20.3751L21.0498 36.8912H18.2159L18.7557 33.8144H21.6166L22.3184 29.9548H19.4305L19.9972 26.878H22.8582L23.5329 23.1264H26.9606L26.2859 26.878H29.0928L29.7406 23.1264H33.1952L32.5475 26.878H35.4084L34.8416 29.9548H31.9807ZM24.9364 33.9493H27.9322L28.661 29.7929H25.6651L24.9364 33.9493Z"
                  fill="#D2E3FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_11497_2975">
                  <rect width="80" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.blocks_in_line_card_title}>
              Experiență superioară
            </div>
            <div className={styles.blocks_in_line_card_subtitle}>
              Decizii luate pe baza opiniilor clienților
            </div>
          </div>
          <div className={styles.blocks_in_line_card}>
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.4002 19.6895C37.6702 15.6188 38.8044 13.5835 40.5011 13.5835C42.1978 13.5835 43.3319 15.6188 45.6019 19.6895L46.1896 20.743C46.8346 21.9004 47.1571 22.4791 47.6588 22.8607C48.1604 23.2424 48.7875 23.3839 50.0417 23.667L51.1812 23.925C55.5887 24.923 57.7907 25.421 58.3156 27.107C58.8388 28.7912 57.3374 30.5488 54.3327 34.0622L53.5552 34.9706C52.7023 35.9686 52.2741 36.4685 52.0824 37.0848C51.8907 37.7029 51.9552 38.3694 52.0842 39.7006L52.2024 40.9136C52.6557 45.6024 52.8833 47.9459 51.5109 48.9868C50.1384 50.0278 48.0744 49.0782 43.95 47.179L42.8804 46.6881C41.7087 46.147 41.1228 45.8783 40.5011 45.8783C39.8794 45.8783 39.2935 46.147 38.1217 46.6881L37.0539 47.179C32.9277 49.0782 30.8637 50.0278 29.4931 48.9886C28.1189 47.9459 28.3464 45.6024 28.7997 40.9136L28.9179 39.7024C29.0469 38.3694 29.1114 37.7029 28.9179 37.0866C28.728 36.4685 28.2998 35.9686 27.447 34.9724L26.6694 34.0622C23.6648 30.5506 22.1634 28.793 22.6865 27.107C23.2097 25.421 25.4152 24.9212 29.8227 23.925L30.9622 23.667C32.2146 23.3839 32.8399 23.2424 33.3434 22.8607C33.8468 22.4791 34.1675 21.9004 34.8125 20.743L35.4002 19.6895Z"
                stroke="#D2E3FC"
                stroke-width="4"
              />
            </svg>

            <div className={styles.blocks_in_line_card_title}>
              Prima Alegere
            </div>
            <div className={styles.blocks_in_line_card_subtitle}>
              Nr. 1 pentru servicii de telecomunicatii
            </div>
          </div>
          <div className={styles.blocks_in_line_card}>
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11497_2980)">
                <path
                  d="M40.5035 13.289L40.478 13.272L38.2312 11.7618C36.6889 10.7245 34.8491 10.2213 32.9936 10.3293C31.1381 10.4373 29.3691 11.1505 27.9575 12.3597L22.441 17.0885C22.0557 17.418 21.5653 17.5989 21.0583 17.5985H14.791C14.2274 17.5985 13.6869 17.8224 13.2884 18.2209C12.8899 18.6194 12.666 19.1599 12.666 19.7235V36.8085C12.666 37.9815 13.618 38.9335 14.791 38.9335H20.707C21.0088 38.9333 21.3071 38.9974 21.5821 39.1215C21.8572 39.2456 22.1026 39.4268 22.3022 39.6532L28.9293 47.1898C29.961 48.3624 31.3872 49.1154 32.9374 49.306C34.4875 49.4967 36.0536 49.1116 37.3387 48.224L39.2767 46.8838L41.3564 47.5922C42.6415 48.028 44.0321 48.0423 45.326 47.6331C46.6198 47.2239 47.7494 46.4125 48.5502 45.317L49.8818 43.498L50.8055 43.6227C52.0848 43.795 53.3862 43.575 54.5377 42.9917C55.6891 42.4083 56.6364 41.4892 57.2542 40.3558L57.393 40.1008H67.2077C67.7713 40.1008 68.3118 39.877 68.7103 39.4784C69.1088 39.0799 69.3327 38.5394 69.3327 37.9758V19.7263C69.3327 19.1628 69.1088 18.6222 68.7103 18.2237C68.3118 17.8252 67.7713 17.6013 67.2077 17.6013H60.9432C60.4335 17.6015 59.9408 17.4185 59.5548 17.0857L54.7693 12.9518C52.7732 11.227 50.2068 10.3064 47.5694 10.3693C44.9321 10.4321 42.4124 11.4739 40.5007 13.2918M35.854 15.2893L37.4464 16.3603L31.893 21.9448C31.2945 22.5467 30.8222 23.2621 30.5039 24.049C30.1856 24.8358 30.0276 25.6783 30.0392 26.5271C30.0508 27.3758 30.2318 28.2137 30.5715 28.9915C30.9113 29.7694 31.4029 30.4715 32.0177 31.0568L32.2103 31.2382C34.5053 33.4227 38.0527 33.5927 40.5432 31.6348L46.4337 27.0108L53.9619 34.25C54.2982 34.573 54.5189 34.9976 54.5901 35.4584C54.6613 35.9192 54.5789 36.3906 54.3557 36.8L54.2848 36.9247L54.2452 36.9983L53.5227 38.3215C53.3167 38.6988 53.0012 39.0047 52.6178 39.199C52.2344 39.3932 51.801 39.4666 51.375 39.4095L49.1962 39.1177C48.8176 39.0667 48.4322 39.1188 48.0807 39.2684C47.7292 39.4179 47.4245 39.6595 47.1987 39.9677L45.119 42.8067C44.8523 43.1718 44.476 43.4423 44.0449 43.5789C43.6138 43.7155 43.1504 43.711 42.722 43.566L39.6337 42.5177C39.3195 42.4108 38.9847 42.3789 38.6561 42.4247C38.3274 42.4704 38.014 42.5925 37.741 42.7812L34.9247 44.7277C34.4961 45.024 33.9735 45.1525 33.4564 45.0887C32.9392 45.025 32.4635 44.7735 32.1197 44.382L25.4925 36.8453C24.8938 36.1655 24.1571 35.621 23.3314 35.2482C22.5057 34.8755 21.6101 34.6829 20.7042 34.6835H16.916V21.8485H21.0555C22.5768 21.8488 24.048 21.3052 25.2035 20.3157L30.7228 15.5868C31.4285 14.982 32.3129 14.6252 33.2406 14.5709C34.1684 14.5167 35.0884 14.768 35.8597 15.2865M58.8663 35.8537C58.8766 34.9831 58.7084 34.1197 58.3722 33.3166C58.0359 32.5136 57.5388 31.7879 56.9113 31.1843L49.7685 24.3163C50.0891 23.9076 50.2489 23.3957 50.2177 22.8772C50.1865 22.3587 49.9664 21.8695 49.5991 21.5022C49.2318 21.135 48.7427 20.9149 48.2242 20.8837C47.7057 20.8525 47.1937 21.0123 46.785 21.3328L45.3514 22.4577L45.1813 22.5908L37.9223 28.2943C37.5205 28.6101 37.0183 28.7704 36.5078 28.746C35.9973 28.7215 35.5127 28.5139 35.1428 28.1612L34.9502 27.977C34.7452 27.782 34.5812 27.548 34.4679 27.2887C34.3546 27.0295 34.2942 26.7502 34.2902 26.4673C34.2862 26.1844 34.3388 25.9035 34.4449 25.6412C34.5509 25.3789 34.7082 25.1404 34.9077 24.9397L43.3085 16.4963C44.4462 15.3526 45.9752 14.6827 47.5873 14.6217C49.1994 14.5607 50.7747 15.1131 51.9955 16.1677L56.7753 20.2987C57.9343 21.2994 59.4148 21.8495 60.946 21.8485H65.0827V35.8537H58.8663Z"
                  fill="#D2E3FC"
                />
              </g>
              <defs>
                <clipPath id="clip0_11497_2980">
                  <rect width="80" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.blocks_in_line_card_title}>
              Impact Social
            </div>
            <div className={styles.blocks_in_line_card_subtitle}>
              Contribuție la bunăstarea și digitalizarea societății
            </div>
          </div>
        </div>
      </Block>
      <Footer />
    </>
  );
}
