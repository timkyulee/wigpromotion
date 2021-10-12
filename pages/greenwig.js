import React from 'react';
import Cgreenwig from '../components2/Cgreenwig';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';

function greenwig() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Cgreenwig /> 
            </main>
        </div>
    )
}

export default greenwig
