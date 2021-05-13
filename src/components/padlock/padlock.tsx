import React, { useEffect, useRef } from 'react';
import { LockService } from '../../service/lockService';
import NumberPad from '../number-pad/number-pad';
import styles from './padlock.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
    updateCurrentPasscode(passcode: string): void;
}

const Padlock = (props: PadlockProps) => {

    const shankRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("Padlock: islocked changed!!" + props.isLocked);
        toggleShankUI();
        
    }, [props.isLocked])

    const toggleShankUI = () => {
        console.log("ui updater");
        
        if(shankRef.current != null)  {
            if(props.isLocked) {
                shankRef.current.style.transform = "translateY(35px)";
                

            } else {
                shankRef.current.style.transform = "translateY(0px)";
            }
        }
    }

    return(
        <div className={styles.padlock}>
            <div ref={shankRef} className={styles.shank}>
            </div>
            <div className={styles.body}>
                <NumberPad isLocked ={props.isLocked} service={props.service} updateCurrentPasscode={props.updateCurrentPasscode}/>
            </div>
        </div>
    )
}

export default Padlock;