import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Welcome to CleverBooks</h1>
      <p className={styles.subtitle}>Your trusted source for educational materials.</p>
      <button className={styles.cta}>Get Started</button>
    </div>
  );
};

export default Hero;