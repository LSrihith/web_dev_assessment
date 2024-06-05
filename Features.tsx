import React, { useState } from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { title: "Feature 1", content: "Details about feature 1." },
    { title: "Feature 2", content: "Details about feature 2." },
    { title: "Feature 3", content: "Details about feature 3." },
  ];

  return (
    <div className={styles.features}>
      <h2 className={styles.heading}>Our Features</h2>
      <div className={styles.tabs}>
        {features.map((feature, index) => (
          <button
            key={index}
            className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {feature.title}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        {features[activeTab].content}
      </div>
    </div>
  );
};

export default Features;