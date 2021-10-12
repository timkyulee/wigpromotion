import React from 'react'
import Cdome from '../components2/Cdome';
import Navbar2 from '../components/Navbar2';
import styles from '../styles/Home.module.css';

function dome() {
    
        return (
            <div className={styles.container}>
                 <main className={styles.main}>
                <Navbar2/>
                <Cdome /> 
                </main>
            </div>
        )
    }
    

export default dome
