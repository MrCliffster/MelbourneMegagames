import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../public/arkHeroImage.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <Image
            alt="Melbourne Megagames hero image"
            src={heroImage}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <h1 className={styles.title}>
          We are Melbourne Megagames
        </h1>

        <p className={styles.description}>We design and run large scale, immersive social games, which combine aspects of negotiation, politics, strategy, and role playing. Our goal is to deliver a diverse range of high-quality games. Our events usually run over the course of a single day, with up to 100 participants.</p>

        <div className={styles.grid}>
          <Link href="/contact-us" className={styles.card}>
            <h2>Contact us &rarr;</h2>
            <p>Get in touch with Melbourne Megagames here.</p>
          </Link>

          <Link href="/faqs" className={styles.card}>
            <h2>FAQs &rarr;</h2>
            <p>Find answers to a bunch of your questions here!</p>
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
    </div>
  )
}
