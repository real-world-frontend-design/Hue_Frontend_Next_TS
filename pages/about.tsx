import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function about() {
    return (
        <div>
            <div className={styles.sidenav}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className={styles.main}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>About</h1>
            </div>
        </div>
    );
}