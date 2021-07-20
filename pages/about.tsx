import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import Navbar  from '../components/commons/NavBar';
import Feed from "../components/Feed";

export default function about() {
    return (
        <div>
            <Navbar/>
            <div className={styles.main}>
                <Feed/>     
            </div>
        </div>
    );
}