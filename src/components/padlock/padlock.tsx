import React from 'react';
import { LockService } from '../../service/lockService';
import NumberPad from '../number-pad/number-pad';
import styles from './padlock.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
}

const Padlock = (props: PadlockProps) => {
    return(
        <div className={styles.padlock}>
            <div className={styles.shank}>
            </div>
            <div className={styles.body}>
                <NumberPad isLocked ={props.isLocked} service={props.service}/>
            </div>
        </div>
    )
}

export default Padlock;