import { useState } from 'react';
import { LockService } from '../../service/lockService';
import ControlPanel from '../control-panel/control-panel';
import Padlock from '../padlock/padlock';
import styles from './app-wrapper.module.css';


interface ServiceProps {
  service: (LockService | null);
}

const AppWrapper = (props:ServiceProps) => {

    const [isLocked, setIsLocked] = useState<boolean>(props.service!.getIsLocked);
    const [currentPasscode, setCurrentPasscode] = useState<string>(props.service?.getCurrentPasscode!);
    

    // Lock/Unlock Padlock by changing component state
    const unlockPadlock = () => {
        if(isLocked) {
            const status = unlockPadlockFromService(currentPasscode);
            if(status) {
                setIsLocked(false);
            }
        } else {
            setIsLocked(true);
            lockPadlockFromService();
        }
    }

    // Change the "isLocked" state inside the service instance to "locked"
    const unlockPadlockFromService = (passcode: string) => {
        return props.service!.unlock(passcode);
    }

    // Change the "isLocked" state inside the service instance to "unlocked"
    const lockPadlockFromService = () => {
        props.service!.lock();
    }

    // Update currentPasscode state
    const updateCurrentPasscode = (passcode: string) => {
        setCurrentPasscode(passcode);        
    }

    return(
        <div className={styles.wrapper}>
            <Padlock isLocked ={isLocked} service={props.service} updateCurrentPasscode={updateCurrentPasscode}/>
            <ControlPanel service={props.service} unlock={unlockPadlock} isLocked={isLocked}/>
        </div>
    );
};

export default AppWrapper;