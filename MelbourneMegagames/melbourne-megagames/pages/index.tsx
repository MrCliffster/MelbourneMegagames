import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          We are Melbourne Megagames
        </h1>

        <p className={styles.description}>We design and run large scale, immersive social games, which combine aspects of negotiation, politics, strategy, and role playing. Our goal is to deliver a diverse range of high-quality games. Our events usually run over the course of a single day, with up to 100 participants.</p>

        <div className={styles.grid}>
          <Link href="/contact-us">
            <a className={styles.card}>
              <h2>Contact us &rarr;</h2>
              <p>Get in touch with Melbourne Megagames here.</p>
            </a>
          </Link>

          <Link href="/faqs">
            <a className={styles.card}>
              <h2>FAQs &rarr;</h2>
              <p>Find answers to a bunch of your questions here!</p>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
