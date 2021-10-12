import React from 'react'
import Chumanhairwig from '../components2/Chumanhairwig';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';
function humanwig() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Chumanhairwig /> 
            </main>
        </div>
    )
}

export default humanwig
