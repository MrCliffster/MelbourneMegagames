import Link from 'next/link'
import Image from 'next/image'
import discord from '../public/socials/discord.svg'
import facebook from '../public/socials/facebook.svg'
import instagram from '../public/socials/instagram.svg'
import twitter from '../public/socials/twitter.svg'
import styles from "../styles/Footer.module.css"
import MailingListSignup from './MailingListSignup'

export default function Footer() {
    return (
        <nav className={styles.footer}>
            <MailingListSignup />
            <div className={styles.ackCountry}>
                <p>We acknowledge the Wurundjeri and Boon Wurrung people of the Kulin nation as the tradition owners of the lands on which we work and we pay our respects to their elders past and present.</p>
                <p>Megagames are immersive storytelling events and we hope to pay respect to the long traditions of storytelling that have existed on this land for thousands of years.</p>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.socials}>
                    <a href='https://discord.gg/rCvb8uApK4'>
                        <Image src={discord} alt={'Discord logo'} />
                    </a>
                    <a href='https://www.facebook.com/MelbourneMegagames'>
                        <Image src={facebook} alt={'Facebook logo'} />
                    </a>
                    <a href='https://instagram.com/melbournemegagames'>
                        <Image src={instagram} alt={'Instagram logo'} />
                    </a>
                    <a href='https://twitter.com/melbmegagames'>
                        <Image src={twitter} alt={"Twitter logo"} />
                    </a>
                </div>
                <p>Code of Conduct</p>
                <p>Privacy Policy</p>
                <p>Copyright © 2022 Melbourne Megagames</p>
            </div>
        </nav>
    )
}