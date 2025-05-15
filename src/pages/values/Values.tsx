import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Block from '../../components/block/Block.tsx';
import styles from './Values.module.css';
import Footer from '../../components/footer/Footer.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import { useTranslation } from 'react-i18next';

export default function Values() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('navbar.aboutus'), url: ' ' },
    { label: t('navbar.our_values') },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('values.title')} />
      <Block>
        <div className="text" style={{ maxWidth: '1050px' }}>
          {t('values.intro1')}
          <br />
          <br />
          {t('values.intro2')}
        </div>
      </Block>
      <Block>
        <div
          className="title"
          style={{ maxWidth: '1050px', marginTop: '-40px' }}
        >
          {t('values.pillar_title')}
        </div>
        <div className="text" style={{ maxWidth: '1050px' }}>
          {t('values.pillar_intro')}
        </div>

        <div className={styles.values_list}>
          <div className={styles.values_list_item}>
            <div className={styles.values_list_title}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3C7.0295 3 3 7.0295 3 12C3 16.9705 7.0295 21 12 21C16.9705 21 21 16.9705 21 12"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 7.5C11.11 7.5 10.24 7.76392 9.49994 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18869 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12M12 12L15.15 8.847"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.1499 5.713V8.85H18.3124L20.9999 6.15H17.8514V3L15.1499 5.713Z"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>{t('values.client_focus.title')}</span>
            </div>
            <div className={styles.values_list_content}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <span>{t('values.client_focus.text')}</span>
            </div>
          </div>
          <div className={styles.values_list_item}>
            <div className={styles.values_list_title}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5ZM12 15L9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13C14.7367 13.7984 13.3967 14.4684 12 15Z"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12H4C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>{t('values.innovation.title')}</span>
            </div>
            <div className={styles.values_list_content}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <span>{t('values.innovation.text')}</span>
            </div>
          </div>
          <div className={styles.values_list_item}>
            <div className={styles.values_list_title}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17C11.4696 17 10.9609 16.7893 10.5858 16.4142C10.2107 16.0391 10 15.5304 10 15C10 13.89 10.89 13 12 13C12.5304 13 13.0391 13.2107 13.4142 13.5858C13.7893 13.9609 14 14.4696 14 15C14 15.5304 13.7893 16.0391 13.4142 16.4142C13.0391 16.7893 12.5304 17 12 17ZM18 20V10H6V20H18ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 8.89 4.89 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z"
                    fill="#D2E3FC"
                  />
                </svg>
              </div>
              <span>{t('values.trust.title')}</span>
            </div>
            <div className={styles.values_list_content}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <span>
                {' '}
                <span>{t('values.trust.text')}</span>
              </span>
            </div>
          </div>
          <div className={styles.values_list_item}>
            <div className={styles.values_list_title}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.825 7.04967L11.816 7.04367L11.023 6.51067C10.4787 6.14456 9.82933 5.96696 9.17444 6.00507C8.51955 6.04318 7.8952 6.29489 7.397 6.72167L5.45 8.39067C5.31401 8.50696 5.14093 8.5708 4.962 8.57067H2.75C2.55109 8.57067 2.36032 8.64969 2.21967 8.79034C2.07902 8.93099 2 9.12176 2 9.32067V15.3507C2 15.7647 2.336 16.1007 2.75 16.1007H4.838C4.9445 16.1006 5.04979 16.1232 5.14686 16.167C5.24394 16.2108 5.33057 16.2748 5.401 16.3547L7.74 19.0147C8.10412 19.4285 8.60749 19.6943 9.15459 19.7616C9.70169 19.8288 10.2545 19.693 10.708 19.3797L11.392 18.9067L12.126 19.1567C12.5796 19.3105 13.0704 19.3155 13.5271 19.1711C13.9837 19.0267 14.3824 18.7403 14.665 18.3537L15.135 17.7117L15.461 17.7557C15.9125 17.8165 16.3718 17.7388 16.7782 17.533C17.1846 17.3271 17.519 17.0027 17.737 16.6027L17.786 16.5127H21.25C21.4489 16.5127 21.6397 16.4337 21.7803 16.293C21.921 16.1523 22 15.9616 22 15.7627V9.32167C22 9.12276 21.921 8.93199 21.7803 8.79134C21.6397 8.65069 21.4489 8.57167 21.25 8.57167H19.039C18.8591 8.57172 18.6852 8.50713 18.549 8.38967L16.86 6.93067C16.1555 6.3219 15.2497 5.997 14.3189 6.01918C13.388 6.04136 12.4987 6.40903 11.824 7.05067M10.184 7.75567L10.746 8.13367L8.786 10.1047C8.57477 10.3171 8.40808 10.5696 8.29573 10.8473C8.18337 11.125 8.12761 11.4224 8.13171 11.7219C8.1358 12.0215 8.19968 12.3172 8.31959 12.5917C8.4395 12.8663 8.61303 13.1141 8.83 13.3207L8.898 13.3847C9.708 14.1557 10.96 14.2157 11.839 13.5247L13.918 11.8927L16.575 14.4477C16.6937 14.5617 16.7716 14.7115 16.7967 14.8742C16.8219 15.0368 16.7928 15.2032 16.714 15.3477L16.689 15.3917L16.675 15.4177L16.42 15.8847C16.3473 16.0178 16.236 16.1258 16.1006 16.1944C15.9653 16.2629 15.8124 16.2888 15.662 16.2687L14.893 16.1657C14.7594 16.1477 14.6234 16.1661 14.4993 16.2189C14.3752 16.2716 14.2677 16.3569 14.188 16.4657L13.454 17.4677C13.3598 17.5965 13.227 17.692 13.0749 17.7402C12.9227 17.7884 12.7592 17.7868 12.608 17.7357L11.518 17.3657C11.4071 17.3279 11.289 17.3167 11.173 17.3328C11.057 17.349 10.9464 17.3921 10.85 17.4587L9.856 18.1457C9.70473 18.2502 9.5203 18.2956 9.33778 18.2731C9.15526 18.2506 8.98736 18.1618 8.866 18.0237L6.527 15.3637C6.31569 15.1237 6.05567 14.9315 5.76425 14.8C5.47284 14.6684 5.15674 14.6005 4.837 14.6007H3.5V10.0707H4.961C5.49792 10.0708 6.01718 9.8789 6.425 9.52967L8.373 7.86067C8.62204 7.64721 8.93419 7.52126 9.26163 7.50211C9.58908 7.48297 9.91378 7.57168 10.186 7.75467M18.306 15.0137C18.3096 14.7064 18.2503 14.4017 18.1316 14.1182C18.0129 13.8348 17.8374 13.5787 17.616 13.3657L15.095 10.9417C15.2081 10.7974 15.2645 10.6167 15.2535 10.4337C15.2425 10.2507 15.1648 10.0781 15.0352 9.94846C14.9056 9.81883 14.7329 9.74116 14.5499 9.73015C14.3669 9.71913 14.1863 9.77552 14.042 9.88867L13.536 10.2857L13.476 10.3327L10.914 12.3457C10.7722 12.4571 10.5949 12.5137 10.4147 12.5051C10.2346 12.4964 10.0635 12.4232 9.933 12.2987L9.865 12.2337C9.79265 12.1648 9.73479 12.0822 9.69479 11.9907C9.65479 11.8992 9.63346 11.8007 9.63207 11.7008C9.63067 11.601 9.64923 11.5018 9.68665 11.4093C9.72407 11.3167 9.77961 11.2325 9.85 11.1617L12.815 8.18167C13.2165 7.77799 13.7562 7.54155 14.3252 7.52002C14.8941 7.49849 15.4501 7.69348 15.881 8.06567L17.568 9.52367C17.9771 9.87687 18.4996 10.071 19.04 10.0707H20.5V15.0137H18.306Z"
                    fill="#D2E3FC"
                  />
                </svg>
              </div>
              <span>{t('values.respect.title')}</span>
            </div>
            <div className={styles.values_list_content}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <span>{t('values.respect.text')}</span>
            </div>
          </div>
          <div className={styles.values_list_item}>
            <div className={styles.values_list_title}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11468_428)">
                    <path
                      d="M4.85 19.2333C4.0375 18.4208 3.40086 17.4819 2.94009 16.4166C2.47931 15.3513 2.24928 14.2499 2.25 13.1124C2.25072 11.9749 2.46739 10.8512 2.9 9.74111C3.33261 8.63106 4.03678 7.58817 5.0125 6.61245C5.64445 5.9805 6.42553 5.43883 7.35575 4.98745C8.28597 4.53606 9.38736 4.17964 10.6599 3.9182C11.9325 3.65675 13.3859 3.49859 15.0203 3.4437C16.6547 3.38881 18.4827 3.452 20.5042 3.63328C20.6486 5.54717 20.6938 7.30758 20.6396 8.91453C20.5854 10.5215 20.4363 11.9706 20.1922 13.2619C19.9481 14.5533 19.605 15.6814 19.163 16.6463C18.721 17.6112 18.175 18.4193 17.525 19.0708C16.5681 20.0277 15.5526 20.7276 14.4787 21.1703C13.4047 21.613 12.3077 21.834 11.1875 21.8333C10.0139 21.8333 8.86736 21.6029 7.74792 21.1421C6.62847 20.6813 5.6625 20.0451 4.85 19.2333ZM7.88333 18.7999C8.40695 19.1069 8.94428 19.3283 9.49533 19.464C10.0464 19.5998 10.6104 19.6673 11.1875 19.6666C12.0181 19.6666 12.8396 19.4998 13.6521 19.1661C14.4646 18.8324 15.241 18.2951 15.9813 17.5541C16.3063 17.2291 16.6359 16.773 16.9703 16.1859C17.3047 15.5987 17.5936 14.8317 17.837 13.8849C18.0804 12.938 18.2653 11.7915 18.3917 10.4453C18.5181 9.09906 18.5361 7.49645 18.4458 5.63745C17.5611 5.60134 16.5637 5.58797 15.4537 5.59736C14.3436 5.60675 13.2375 5.69234 12.1354 5.85411C11.0333 6.01589 9.98609 6.2777 8.99375 6.63953C8.00142 7.00136 7.18892 7.49789 6.55625 8.12911C5.74375 8.94161 5.18403 9.74508 4.87709 10.5395C4.57014 11.334 4.41667 12.1013 4.41667 12.8416C4.41667 13.9069 4.61997 14.8414 5.02659 15.6453C5.4332 16.4491 5.78961 17.0132 6.09584 17.3374C6.85417 15.893 7.85625 14.5071 9.10208 13.1796C10.3479 11.8522 11.8014 10.7645 13.4625 9.91661C12.1625 11.0541 11.0297 12.3408 10.0641 13.7765C9.09847 15.2123 8.37156 16.8868 7.88333 18.7999Z"
                      fill="#D2E3FC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11468_428">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>{t('values.sustainability.title')}</span>
            </div>
            <div className={styles.values_list_content}>
              <div className={styles.values_list_svg}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
              <span>{t('values.sustainability.text')}</span>
            </div>
          </div>
        </div>
      </Block>
      <div className={styles.values_full_block}>
        <div className={styles.values_full_block_inside}>
          <div className="title">{t('values.about_title')}</div>
          <div className="text">
            <b>{t('values.about_motto')}</b>
            <br />
            <br />
            {t('values.about_p1')}
            <br />
            <br />
            {t('values.about_p2')}
            <br />
            <br />
            {t('values.about_p3')}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
