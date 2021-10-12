import React from 'react'
import Clacewig from '../components2/Clacewig';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';
function lacewig() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Clacewig /> 
            </main>
        </div>
    )
}


export default lacewig
