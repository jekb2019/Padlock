import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/header';
import AppWrapper from './components/app-wrapper/app-wrapper';
import { LockService } from './service/lockService';

interface ServiceProps {
  service: (LockService | null);
}

function App(props: ServiceProps) {
  return (
    <div className={styles.app}>
      <Header/>
      <AppWrapper service={props.service}/>
    </div>
  );
}

export default App;
