import React, { useState } from 'react';
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
    
    console.log(currentPasscode);
    

    // Unlock padlock
    const unlockPadlock = () => {
        if(isLocked) {
            const status = unlockPadlockFromService(currentPasscode);
            if(status) {
                setIsLocked(false);
                console.log("Wrapper: padlock unlocked");
            } else {
                console.log("Wrapper: padlock unlock failed");
                
            }
        } else {
            setIsLocked(true);
            console.log("padlock locked");
        }
    }

    const unlockPadlockFromService = (passcode: string) => {
        return props.service!.unlock(passcode);
    }

    const updateCurrentPasscode = (passcode: string) => {
        console.log("current passcode: " + passcode);
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