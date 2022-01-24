import { FAQProps } from "../types/types";
import FAQ from "../components/FAQ";
import styles from '../styles/Home.module.css'
import { getAllFaqs } from "../lib/api";

export default function Faqs({ faqs }: { faqs: FAQProps[] }) {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Frequently Asked Questions
                </h1>

                <p className={styles.description}>These are answers to frequently asked questions of us, so check out if we&apos;ve answered something you have been dying to ask. Anything you can&apos;t find the answer to? Contact us here.</p>

                <div>
                    {faqs.map(element => {
                        return (<FAQ question={element.question} answer={element.answer} key={element.key} />)
                    })}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const faqs = getAllFaqs()

    return {
        props: { faqs }
    }
}