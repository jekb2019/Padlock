import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header/>
    </div>
  );
}

export default App;
