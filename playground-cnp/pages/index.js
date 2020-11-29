import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Example from '../components/Example';
// import ParallaxAnimation from '../components/ParallaxAnimation';
import ScrollStoryboard from '../components/ScrollStoryboard';
// import PositionSticky from '../components/PositionSticky';

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

      {/* <div> */}
      <ScrollStoryboard />
      {/* </div> */}
      {/* </main> */}
    </div>
  );
}
