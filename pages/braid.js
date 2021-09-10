import React from 'react'
import GalleryB from '../components/GalleryB';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

function braid() {
    return (
        <div className={styles.main}>
            <Navbar />
            <GalleryB />
        </div>
    )
}

export default braid

