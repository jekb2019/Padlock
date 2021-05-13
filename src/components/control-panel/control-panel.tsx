import React from 'react';
import styles from './control-panel.module.css';

const ControlPanel = () => {

    // Show Hint for password
    const showHint = () => {
        window.alert("Password is #123");
    }
    
    return (
        <div className={styles.panel}>
            <button className={styles.btn}>Unlock</button>
            <button onClick={showHint} className={styles.btn}><i className="far fa-question-circle"></i></button>
        </div>
    );
}

export default ControlPanel;