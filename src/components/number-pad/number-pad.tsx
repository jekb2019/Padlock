import { useRef, useState } from 'react';
import { LockService } from '../../service/lockService';
import styles from './number-pad.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
    updateCurrentPasscode(passcode: string): void;
}

const NumberPad = (props: PadlockProps) => {

    // input refs
    const firstDigitRef = useRef<HTMLInputElement>(null);
    const secondDigitRef = useRef<HTMLInputElement>(null);
    const thridDigitRef = useRef<HTMLInputElement>(null);

    // update current passcode and pass it up to the AppWrapper Component
    const updateCurrentPasscode = () => {
        const code: string = firstDigitRef.current?.value! + secondDigitRef.current?.value! + thridDigitRef.current?.value!;
        props.updateCurrentPasscode(code);
    }
    
    return(
        <div className={styles.pad}>
            <input ref={firstDigitRef} onChange={updateCurrentPasscode} className={styles.num} defaultValue='0' placeholder="0" min={0} max={9} type="number" />
            <input ref={secondDigitRef} onChange={updateCurrentPasscode} className={styles.num} defaultValue='0' placeholder="0" min={0} max={9} type="number" />
            <input ref={thridDigitRef} onChange={updateCurrentPasscode} className={styles.num} defaultValue='0' placeholder="0" min={0} max={9} type="number" />
        </div>
    );
}

export default NumberPad;