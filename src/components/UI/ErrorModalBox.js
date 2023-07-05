import Card from "./Card";
import styles from "./ErrorModalBox.module.css"
import Button from "./Button";

const ErrorModalBox = props => {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModalBox;