import React from 'react'
import Crule from '../components2/Crule';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';
function rule() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Crule /> 
            </main>
        </div>
    )
}


export default rule;
