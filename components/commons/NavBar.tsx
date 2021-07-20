import React, { useState } from "react";
import styles from '../../styles/Navbar.module.css';
import { AiOutlineBars, AiFillHome, AiFillBell } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Avatar } from '@material-ui/core';

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
                <button onClick={showSideBar}>
                <Avatar/>
                </button>
                <a href="#"><AiFillHome/> Home</a>
                <a href="#"> <AiFillBell/> Notifications</a>
                <a href="#"><BsFillPersonFill/> Profile</a>
            </nav>
            ) : null}   
        </div>
    );
};

export default Navbar;
