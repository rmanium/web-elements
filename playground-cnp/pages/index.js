import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Example from '../components/Example';
import ScrollAnimation from '../components/ScrollAnimation';

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
      <ScrollAnimation />
      {/* </div> */}
      {/* </main> */}
    </div>
  );
}
