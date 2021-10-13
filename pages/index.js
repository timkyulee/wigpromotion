
import Head from 'next/dist/shared/lib/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar2';
import GalleryAll from '../components/GalleryAll';
import { NextSeo} from 'next-seo';

export default function Home() {
  
 
  return (
    <div >
       <NextSeo
      title="Destiny Wig Promotion 2021 Fall"
      description="Brazilian Lace Wig,Braid Wig,Human Hair Wig,Pony Tail,Lace Wig ."
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://destinywig.info',
        title: 'Destiny Wig Promotion 2021 Fall',
        description: 'Brazilian Lace Wig,Braid Wig,Human Hair Wig,Pony Tail,Lace Wig',
        images: [
          {
            url: 'https://sopranohair.com/wig/metaimage3.jpg',
            width: 250,
            height: 333,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://sopranohair.com/wig/metaimage3.jpg',
            width: 250,
            height: 333,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://sopranohair.com/wig/metaimga3.jpg' },
          { url: 'https://sopranohair.com/wig/metaimga3.jpg' },
        ],
        site_name: 'DestinyWig.info',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
       {/* <Head>
        
        <meta property="og:title" content="Destiny Wig Promotion"></meta>
        <meta property="og:description" content="Destiny Wig Promotion 2021 Fall"/>
        <meta property="og:image" content="https://sopranohair.com/wig/metaimga.jpg"></meta>
        <meta property="og:url" content="https://destinywig.info"></meta>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
       
      </Head> */}
      <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <GalleryAll />
       
      </main>
      </div>
    </div>
  )
}
