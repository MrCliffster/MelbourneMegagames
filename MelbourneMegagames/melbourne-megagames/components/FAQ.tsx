import { useState } from "react";
import { FAQProps } from "../types/types";
import styles from "../styles/FAQ.module.css"

export default function FAQ({ question, answer }: FAQProps) {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <div>
            <button onClick={toggle} className={styles.questionbutton}>{question}</button>
            <div className={styles.collapsible + ' ' + (showMe ? styles.expanded : '')}>
                <p>{answer}</p>
            </div>
        </div>
    )
}