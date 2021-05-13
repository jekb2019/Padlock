import React from 'react';
import NumberPad from '../number-pad/number-pad';
import styles from './padlock.module.css';

interface LockStateProps {
    isLocked: (boolean | null);
}

const Padlock = (props: LockStateProps) => {
    return(
        <div className={styles.padlock}>
            <div className={styles.shank}>
            </div>
            <div className={styles.body}>
                <NumberPad/>
            </div>
        </div>
    )
}

export default Padlock;