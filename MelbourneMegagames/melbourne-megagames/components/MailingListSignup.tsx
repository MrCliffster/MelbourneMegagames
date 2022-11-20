import styles from "../styles/MailingListSignup.module.css"

export default function MailingListSignup() {
    return (
        <div className={styles.signupForm}>
            <input placeholder="First name" />
            <input placeholder="Last name" />
            <input placeholder="Email" />
            <button>Sign up now</button>
        </div>
    )
}