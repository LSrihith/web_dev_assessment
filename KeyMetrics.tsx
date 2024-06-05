import React from 'react';
import styles from './KeyMetrics.module.css';
import { calculateSum } from './utils.js';

const KeyMetrics: React.FC = () => {
  const metrics = [1000, 500, 300];
  const total = calculateSum(metrics);

  return (
    <div className={styles.metrics}>
      <h2 className={styles.heading}>Key Metrics</h2>
      <div className={styles.metricList}>
        <div className={styles.metric}>
          <p>1000+ Books Sold</p>
        </div>
        <div className={styles.metric}>
          <p>500+ Happy Customers</p>
        </div>
        <div className={styles.metric}>
          <p>300+ Reviews</p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total: {total}</p>
      </div>
    </div>
  );
};

export default KeyMetrics;