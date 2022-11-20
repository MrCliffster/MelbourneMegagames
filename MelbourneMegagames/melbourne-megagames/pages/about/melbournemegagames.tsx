import TeamMember from '../../components/TeamMember'
import styles from '../../styles/Home.module.css'

export default function MelbourneMegagames() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Melbourne Megagames
                </h1>

                <p className={styles.description}>Welcome to Melbourne Megagames! We design and run large scale, immersive social games, which combine aspects of negotiation, politics, strategy, and role-playing.</p>

                <div>
                    <h2>Core Team</h2>
                    <TeamMember description={'Nellie is a person who founded and directs Melbourne Megagames with Tristan'} photoSrc={'/../public/teamImages/nellie.png'} isImageLeft={true} />
                    <TeamMember description={'Tristan is a person who founded and directs Melbourne Megagames with Nellie'} photoSrc={'/../public/teamImages/tristan.png'} isImageLeft={false} />
                    <TeamMember description={'Iolande'} photoSrc={'/../public/teamImages/iolande.png'} isImageLeft={true} />
                    <TeamMember description={'Leon'} photoSrc={'/../public/teamImages/leon.png'} isImageLeft={false} />
                </div>
            </main>
        </div>
    )
}
