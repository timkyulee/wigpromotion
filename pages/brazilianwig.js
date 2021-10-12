import React from 'react'
import Cbrazilianwig from '../components2/Cbrazilianwig';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';
function brazilianwig() {
    return (
        <div className={styles.container}>
             <main className={styles.main}>
            <Navbar2/>
            <Cbrazilianwig /> 
            </main>
        </div>
    )
}

export default brazilianwig
