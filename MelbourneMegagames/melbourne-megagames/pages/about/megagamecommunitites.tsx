import TeamMember from '../../components/TeamMember'
import styles from '../../styles/MegagameCommunities.module.css'

export default function MegagameCommunities() {
    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Megagame Communities
                </h1>

                <p className={styles.description}>Community is a huge part of what we do here, and we wouldn&apos;t be where we are without the support and generosity shown to us by some of the people and groups on this page.</p>

                <div>
                    <h2>Australian Megagaming Groups</h2>
                    <TeamMember description={'Nellie is a person who founded and directs Melbourne Megagames with Tristan'} photoSrc={'/../public/teamImages/nellie.png'} isImageLeft={true} />
                    <TeamMember description={'Tristan is a person who founded and directs Melbourne Megagames with Nellie'} photoSrc={'/../public/teamImages/tristan.png'} isImageLeft={false} />
                    <TeamMember description={'Iolande'} photoSrc={'/../public/teamImages/iolande.png'} isImageLeft={true} />
                    <TeamMember description={'Leon'} photoSrc={'/../public/teamImages/leon.png'} isImageLeft={false} />
                </div>
            </main>
        </div>
    )
}
