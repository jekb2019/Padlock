import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Digital Padlock</h1>
            <p className={styles.description}>This content has been locked</p>
        </div>
    )};

export default Header;