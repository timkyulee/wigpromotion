
import Head from 'next/dist/shared/lib/head';
import { Fragment } from 'react';


function MyApp({ Component, pageProps }) {
  
  return <Fragment>
    
    <Head>
        <title>DestinyWig Promotion</title>
         {/* <!-- open graph description --> */}
        <meta name="og:title" content="Destiny Wig Promotion"></meta>
        <meta property="og:description" content="Destiny Wig Promotion 2021 Fall"/>
        <meta property="og:image" content="https://sopranohair.com/wig/metaimage.jpg"></meta>
        <meta property="og:url" content="https://destinywig.info"></meta>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        {/* <!-- open graph END --> */}
      </Head>
  <Component {...pageProps} />
  
  </Fragment>
}

export default MyApp
