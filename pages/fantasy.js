import React from 'react'
import GalleryF from '../components/GalleryF';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

function fantasy() {
    return (
        <div className={styles.main}>
            <Navbar />
            <GalleryF />
        </div>
    )
}

export default fantasy
