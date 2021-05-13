import React, { useEffect } from 'react';
import { LockService } from '../../service/lockService';
import NumberPad from '../number-pad/number-pad';
import styles from './padlock.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
    updateCurrentPasscode(passcode: string): void;
}

const Padlock = (props: PadlockProps) => {

    useEffect(() => {
        console.log("Padlock: islocked changed!!" + props.isLocked);

        
    }, [props.isLocked])

    const toggleShank = () => {
        
    }

    return(
        <div className={styles.padlock}>
            <div className={styles.shank}>
            </div>
            <div className={styles.body}>
                <NumberPad isLocked ={props.isLocked} service={props.service} updateCurrentPasscode={props.updateCurrentPasscode}/>
            </div>
        </div>
    )
}

export default Padlock;