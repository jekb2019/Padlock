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
    console.log(isLocked);
    
    

    return(
        <div className={styles.wrapper}>
            <Padlock isLocked ={isLocked} service={props.service}/>
            <ControlPanel/>
        </div>
    );
};

export default AppWrapper;