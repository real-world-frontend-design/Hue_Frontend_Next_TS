import React, { useState } from "react";
import styles from '../../styles/Navbar.module.css';
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {

    const [isCollapsed, setCollapsed] = useState(false);

    const showSideBar = () => setCollapsed(!isCollapsed);

    return (
        <div>
            <button
                onClick={showSideBar} 
            >
                <AiOutlineBars />
            </button>
            {isCollapsed ? (
            <nav className={styles.sidenav}>
                <button>
                <AiOutlineBars onClick={showSideBar}/>
                </button>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            ) : null}   
        </div>
    );
};

export default Navbar;
