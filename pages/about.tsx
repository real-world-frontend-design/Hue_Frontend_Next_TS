import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import Navbar  from '../components/commons/NavBar';

export default function about() {
    return (
        <div>
            <Navbar/>
            <div className={styles.main}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <h1>About</h1>
            </div>
        </div>
    );
}