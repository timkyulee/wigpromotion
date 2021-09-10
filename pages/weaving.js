import React from 'react'
import GalleryW from '../components/GalleryW';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
function weaving() {
    return (
        <div className={styles.main}>
           <Navbar/>
           <GalleryW />
        </div>
    )
}

export default weaving
