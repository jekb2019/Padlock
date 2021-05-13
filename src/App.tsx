import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/header';
import AppWrapper from './components/app-wrapper/app-wrapper';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <AppWrapper/>
    </div>
  );
}

export default App;
