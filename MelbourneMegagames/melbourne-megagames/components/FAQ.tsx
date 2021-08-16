import { FAQProps } from "../types/types";

export default function FAQ({ question, answer }: FAQProps) {
    return (
        <div>
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    )
}