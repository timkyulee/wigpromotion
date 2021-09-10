import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import GalleryAll from '../components/GalleryAll';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BijouxPeoplesChoice</title>
        <meta name="description" content="Bijoux Peoples Choice" />
        <link rel="icon" href="https://sopranohair.com/t/pe/" />
      </Head>
      
      <main className={styles.main}>

        <Navbar />
       
        <GalleryAll />
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
