import React from 'react';
import styles from './Block.module.css';

interface HeroProps {
  children: React.ReactNode;
}

const Block: React.FC<HeroProps> = ({ children }) => {
  return (
    <div className={styles.block}>
      <div className={styles.block_inside}>{children}</div>
    </div>
  );
};

export default Block;
