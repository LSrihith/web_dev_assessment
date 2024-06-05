import React from 'react';
import styles from './ProblemsSolved.module.css';

const ProblemsSolved: React.FC = () => {
  return (
    <div className={styles.problems}>
      <h2 className={styles.heading}>Problems We Solve</h2>
      <div className={styles.problemList}>
        <div className={styles.problem}>
          <h3>Problem 1</h3>
          <p>Explanation of the first problem CleverBooks solves.</p>
        </div>
        <div className={styles.problem}>
          <h3>Problem 2</h3>
          <p>Explanation of the second problem CleverBooks solves.</p>
        </div>
        <div className={styles.problem}>
          <h3>Problem 3</h3>
          <p>Explanation of the third problem CleverBooks solves.</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSolved;