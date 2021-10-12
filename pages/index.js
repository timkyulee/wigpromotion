

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar2';
import GalleryAll from '../components/GalleryAll';


export default function Home() {
  
 
  return (
    <div className={styles.container}>
      
      
      <main className={styles.main}>
     
        <Navbar />
       
        <GalleryAll />
       
      </main>
 
    </div>
  )
}
