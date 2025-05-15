import Navbar from '../../components/navbar/Navbar.tsx';
import Hero from '../../components/hero/Hero.tsx';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';
import styles from './History.module.css';
import Footer from '../../components/footer/Footer.tsx';
import Block from '../../components/block/Block.tsx';
import { useTranslation } from 'react-i18next';
import React from 'react';

export default function History() {
  const { t } = useTranslation();

  const breadcrumbItems = [
    { label: t('navbar.aboutus'), url: ' ' },
    { label: t('breadcrumb.history') },
  ];

  const historyList = [
    { year: '2025', key: 'y2025' },
    { year: '2024', key: 'y2024' },
    { year: '2023', key: 'y2023' },
    { year: '2022', key: 'y2022' },
    { year: '2021', key: 'y2021' },
    { year: '2019 - 2020', key: 'y2019_2020' },
    { year: '2016 - 2018', key: 'y2016_2018' },
    { year: '2015', key: 'y2015' },
    { year: '2010 - 2013', key: 'y2010_2013' },
    { year: '2008', key: 'y2008' },
    { year: '2007', key: 'y2007' },
    { year: '2001 - 2004', key: 'y2001_2004' },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb items={breadcrumbItems} max_width={1180} />
      <Hero title={t('breadcrumb.history')} />
      <Block>
        <div className="title">{t('history.lansare')}</div>
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
                    d="M16 3V7M8 3V7M4 11H20M11 15H12V18M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
                    stroke="#D2E3FC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>1993</span>
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
                    d="M17.6 3H6.8C5.80589 3 5 3.80589 5 4.8V19.2C5 20.1941 5.80589 21 6.8 21H17.6C18.5941 21 19.4 20.1941 19.4 19.2V4.8C19.4 3.80589 18.5941 3 17.6 3Z"
                    stroke="#D2E3FC"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.50059 21V17.4H14.9006V21M8.60059 6.59998H8.60959M15.8006 6.59998H15.8096M12.2006 6.59998H12.2096M12.2006 10.2H12.2096M12.2006 13.8H12.2096M15.8006 10.2H15.8096M15.8006 13.8H15.8096M8.60059 10.2H8.60959M8.60059 13.8H8.60959"
                    stroke="#D2E3FC"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span>1999</span>
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
              <span>{t('history.beginnings')}</span>
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
        </div>
      </Block>

      <Block>
        <div className="title">
          {t('history.launch_title_1')} <br />
          {t('history.launch_title_2')}
        </div>
        <div className={styles.history_list}>
          {historyList.map(({ year, key }) => (
            <div key={year} className={styles.history_list_item}>
              <div className={styles.history_list_item_svg}>
                <svg
                  width="34"
                  height="28"
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M0 13.8333L33 13.8333"
                      stroke="#D2E3FC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="34" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>
                <div className={styles.history_list_item_b}>{year}</div>
                {/*{t(`history.timeline.${key}`)}*/}
                <TranslatedWithTags text={t(`history.timeline.${key}`)} />
              </span>
            </div>
          ))}
        </div>
      </Block>

      <Footer />
    </>
  );
}

function TranslatedWithTags({ text }: { text: string }) {
  const processText = (input: string) => {
    const parts = [];
    const boldRegex = /\\b (.+?) \\b/g;

    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(input)) !== null) {
      const matchStart = match.index;
      const matchEnd = boldRegex.lastIndex;

      // Push plain text before match
      if (matchStart > lastIndex) {
        parts.push(input.slice(lastIndex, matchStart));
      }

      // Push bolded text
      parts.push(<b key={matchStart}>{match[1]}</b>);
      lastIndex = matchEnd;
    }

    // Push remaining text
    if (lastIndex < input.length) {
      parts.push(input.slice(lastIndex));
    }

    return parts;
  };

  return (
    <>
      {text.split('\\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {processText(line)}
          {i !== arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
