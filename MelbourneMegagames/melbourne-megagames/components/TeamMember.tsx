import { TeamMemberProps } from "../types/types";
import Image from 'next/image'
import styles from "../styles/TeamMember.module.css"

export default function TeamMember(props: TeamMemberProps) {
    let content;
    if (props.isImageLeft) {
        content = <>
            <Image
                src={props.photoSrc}
                alt={"Team member photo"}
                width={313}
                height={313}
                className={styles.teamImage}
            />
            <p className={styles.teamDesc}>{props.description}</p>
        </>
    } else {
        content = <>
            <p className={styles.teamDesc}>{props.description}</p>
            <Image
                src={props.photoSrc}
                alt={"Team member photo"}
                width={313}
                height={313}
                className={styles.teamImage}
            />
        </>
    }
    return (
        <div className={styles.teamMember}>
            {content}
        </div>
    )
}