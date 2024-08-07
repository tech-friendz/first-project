import React from 'react';
import styles from '../css/elipseBackground.module.css';

function ElipseBackground() {
    return (
        <div className={styles.elipsWrapper}>
            <div className={styles.elipsBg}></div>
            <div className={styles.elipsOverlay}></div>
        </div>
    );
}

export default ElipseBackground;
