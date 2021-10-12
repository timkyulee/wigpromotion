import React from 'react'
import Cdrawstring from '../components2/Cdrawstring';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';

function drawstring() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Cdrawstring /> 
            </main>
        </div>
    )
}

export default drawstring
