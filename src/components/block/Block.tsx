import React from 'react';
import styles from './Block.module.css';

interface HeroProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Block: React.FC<HeroProps> = ({ children, style, className }) => {
  const BlockStyle: React.CSSProperties = {
    ...style,
  };
  return (
    <div className={styles.block}>
      <div className={`${styles.block_inside} ${className}`} style={BlockStyle}>
        {children}
      </div>
    </div>
  );
};

export default Block;
