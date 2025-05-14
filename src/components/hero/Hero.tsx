import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  title?: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_text}>{title}</div>
    </div>
  );
};

export default Hero;
