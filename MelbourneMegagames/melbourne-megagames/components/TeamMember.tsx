import { TeamMemberProps } from "../types/types";
import Image from 'next/image'

export default function TeamMember(props: TeamMemberProps) {
    let content;
    if (props.isImageLeft) {
        content = <>
            <Image src={props.photoSrc} alt={"Team member photo"} />
            <p>{props.description}</p>
        </>
    } else {
        content = <>
            <p>{props.description}</p>
            <Image src={props.photoSrc} alt={"Team member photo"} />
        </>
    }
    return (
        <div>
            {content}
        </div>
    )
}