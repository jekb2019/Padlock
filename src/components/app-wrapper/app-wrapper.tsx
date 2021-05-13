import React from 'react';
import ControlPanel from '../control-panel/control-panel';
import Padlock from '../padlock/padlock';
import styles from './app-wrapper.module.css';

const AppWrapper = () => {
    return(
        <div className={styles.wrapper}>
            <Padlock/>
            <ControlPanel/>
        </div>
    );
};

export default AppWrapper;