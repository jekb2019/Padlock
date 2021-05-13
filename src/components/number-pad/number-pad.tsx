import React, { useRef, useState } from 'react';
import { LockService } from '../../service/lockService';
import styles from './number-pad.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
}

const NumberPad = (props: PadlockProps) => {

    const firstDigitRef = useRef<HTMLInputElement>(null);
    const secondDigitRef = useRef<HTMLInputElement>(null);
    const thridDigitRef = useRef<HTMLInputElement>(null);

    const [currentPasscode, setCurrentPasscode] = useState('000');

    const updateCurrentPasscode = () => {
        // get current pass code
    }

    return(
        <div className={styles.pad}>
            <input ref={firstDigitRef} className={styles.num} placeholder="0" min={0} max={9} type="number" />
            <input ref={secondDigitRef} className={styles.num} placeholder="0" min={0} max={9} type="number" />
            <input ref={thridDigitRef} className={styles.num} placeholder="0" min={0} max={9} type="number" />
        </div>
    );
}

export default NumberPad;