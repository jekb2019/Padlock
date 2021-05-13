import React from 'react';
import styles from './number-pad.module.css';

const NumberPad = () => {
    return(
        <div className={styles.pad}>
            <input className={styles.num} placeholder="0" min={0} max={9} type="number" />
            <input className={styles.num} placeholder="0" min={0} max={9} type="number" />
            <input className={styles.num} placeholder="0" min={0} max={9} type="number" />
        </div>
    );
}

export default NumberPad;