export type FAQProps = {
    key: string;
    question: string;
    answer: string;
}

export type TeamMemberProps = {
    description: string;
    photoSrc: string;
    isImageLeft: boolean;
}

export type CommunityPanelProps = {
    title: string;
    photoSrc: string;
    description: string;
    isImageLeft: boolean;
    socials: Social[]
}

enum SocialType {
    Discord,
    Facebook,
    Website,
    Instagram,
    Twitter
}

type Social = {
    link: string;
    type: SocialType
}