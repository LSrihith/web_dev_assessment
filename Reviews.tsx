import React from 'react';
import styles from './Reviews.module.css';

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.heading}>What Our Users Say</h2>
      <div className={styles.reviewList}>
        <div className={styles.review}>
          <p>"CleverBooks has been a game-changer for my study routine!"</p>
          <p>- User 1</p>
        </div>
        <div className={styles.review}>
          <p>"A must-have resource for all students."</p>
          <p>- User 2</p>
        </div>
        <div className={styles.review}>
          <p>"Incredibly helpful and well-organized materials."</p>
          <p>- User 3</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;