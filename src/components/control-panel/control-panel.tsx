import React from 'react';
import styles from './control-panel.module.css';

const ControlPanel = () => (
        <div className={styles.panel}>
            <button className={styles.btn}>Unlock</button>
            <button className={styles.btn}><i className="far fa-question-circle"></i></button>
        </div>
    );

export default ControlPanel;