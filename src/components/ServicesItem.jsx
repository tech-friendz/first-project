import React from 'react';
import styles from '../css/services.module.css';

function ServicesItem({ image, title, description, isReversed }) {
    return (
        <div className={`${styles.service} ${isReversed ? styles.reversed : ''}`}>
            <div className={styles['image-container']}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles['title-overlay']}>
                    {title}
                    <hr className={styles.serviceSectionDivider} />
                </div>
            </div>
            <div className={styles['text-container']}>
                <div className={styles.text}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesItem;
