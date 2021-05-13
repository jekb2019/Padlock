import { useEffect, useRef } from 'react';
import { LockService } from '../../service/lockService';
import NumberPad from '../number-pad/number-pad';
import styles from './padlock.module.css';

interface PadlockProps {
    isLocked: (boolean | null);
    service: (LockService | null);
    updateCurrentPasscode(passcode: string): void;
}

const Padlock = (props: PadlockProps) => {

    // shank UI Ref
    const shankRef = useRef<HTMLDivElement>(null);

    // shank style
    const shankLockedStyle = 'translateY(35px)';
    const shankUnlockedStyle = 'translateY(0px)';

    // toggle shank UI whenever the padlock is locked/unlocked
    useEffect(() => {
        toggleShankUI();
    }, [props.isLocked])


    // update shank UI
    const toggleShankUI = () => {        
        if(shankRef.current != null)  {
            if(props.isLocked) {
                shankRef.current.style.transform = shankLockedStyle;
            } else {
                shankRef.current.style.transform = shankUnlockedStyle;
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