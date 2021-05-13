import React from 'react';
import { LockService } from '../../service/lockService';
import styles from './control-panel.module.css';

interface PadlockProps {
    service: (LockService | null);
    unlock(): void;
    isLocked: boolean;
}

const ControlPanel = (props: PadlockProps) => {

    // Show Hint for password
    const showHint = () => {
        window.alert("Password is #123");
    }
    
    return (
        <div className={styles.panel}>
            <button onClick={() => {props.unlock()}} className={styles.btn}>{
                props.isLocked ? 'Unlock' : 'Lock'
            }</button>
            <button onClick={showHint} className={styles.btn}><i className="far fa-question-circle"></i></button>
        </div>
    );
}

export default ControlPanel;