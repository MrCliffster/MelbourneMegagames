import TeamMember from '../../components/TeamMember'
import styles from '../../styles/Home.module.css'

export default function MelbourneMegagames() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <span className={styles.title}>
                    Melbourne Megagames
                </span>

                <div className={styles.description}>
                    <p >Welcome to Melbourne Megagames! We design and run large scale, immersive social games, which combine aspects of negotiation, politics, strategy, and role-playing.</p>
                    <p>What&apos;s a megagame you ask? It&apos;s uh, just a really big game…</p>
                    <p>…that blends aspects of boardgames, LARPs, wargaming, & role-play. Think of megagames as interactive stories, where you can live out your dream of being a 17th century pirate… or nuke the moon to prevent an alien invasion… or accidentally kill Hitler with the holy grail! There are no limits to the chaos and joy that a megagame brings.</p>
                    <p>Founded in 2019, we aim to make megagames fun and accessible. Our events usually run over the course of a single day, with up to 100 participants.</p>
                </div>
                <div>
                    <span className={styles.title}>Core Team</span>
                    <TeamMember description={'Nellie is a person who founded and directs Melbourne Megagames with Tristan'} photoSrc={'/../public/teamImages/nellie.png'} isImageLeft={true} />
                    <TeamMember description={'Tristan is a person who founded and directs Melbourne Megagames with Nellie'} photoSrc={'/../public/teamImages/tristan.png'} isImageLeft={false} />
                    <TeamMember description={'Iolande'} photoSrc={'/../public/teamImages/iolande.png'} isImageLeft={true} />
                    <TeamMember description={'Leon'} photoSrc={'/../public/teamImages/leon.png'} isImageLeft={false} />
                </div>
            </main>
        </div >
    )
}
