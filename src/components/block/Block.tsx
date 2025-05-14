import React from 'react';
import styles from './Block.module.css';

interface HeroProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Block: React.FC<HeroProps> = ({ children, style }) => {
  const BlockStyle: React.CSSProperties = {
    ...style,
  };
  return (
    <div className={styles.block}>
      <div className={styles.block_inside} style={BlockStyle}>
        {children}
      </div>
    </div>
  );
};

export default Block;
