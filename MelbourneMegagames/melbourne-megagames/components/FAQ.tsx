import { useState } from "react";
import { FAQProps } from "../types/types";
import styles from "../styles/FAQ.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FAQ({ question, answer }: FAQProps) {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <div>
            <div>
                <button onClick={toggle} className={styles.questionButton}>
                    {question}
                    <span className={styles.faqChevron}>
                        <FontAwesomeIcon icon={showMe ? "chevron-down" : "chevron-left"} />
                    </span>
                </button>

            </div>
            <div className={styles.collapsible + ' ' + (showMe ? styles.expanded : '')}>
                <p>{answer}</p>
            </div>
        </div>
    )
}