import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/MelbourneMegagamesLogo.svg'
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div>
                <section className={styles.HeaderLogo}>
                    <Link href="/">
                        <Image
                            alt="Melbourne Megagames logo"
                            src={logo}
                            height={201}
                            width={164}
                        />
                    </Link>
                    <Link href={"/about/faqs"}>FAQs</Link>
                    <Link href={"/about/melbournemegagames"}>Melbourne Megagames</Link>
                </section>
            </div>
        </nav>
    )
}