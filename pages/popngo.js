import React from 'react'
import Cpopngo from '../components2/Cpopngo';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';
function popngo() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Cpopngo /> 
            </main>
        </div>
    )
}


export default popngo
