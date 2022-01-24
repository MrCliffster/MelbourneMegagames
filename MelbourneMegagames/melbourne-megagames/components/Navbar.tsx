import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div>
                <section className={styles.HeaderLogo}>
                    <Link href="/">
                        <a>
                            <Image
                                alt="Melbourne Megagames logo"
                                src={logo} />
                        </a>
                    </Link>
                </section>
            </div>
        </nav>
    )
}