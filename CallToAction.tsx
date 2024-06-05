import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => {
  return (
    <div className={styles.cta}>
      <h2 className={styles.heading}>Get Started with CleverBooks</h2>
      <p className={styles.description}>Join thousands of students who have improved their learning with CleverBooks.</p>
      <button className={styles.ctaButton}>Sign Up Now</button>
    </div>
  );
};

export default CallToAction;