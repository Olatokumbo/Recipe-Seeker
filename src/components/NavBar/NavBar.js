import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className={styles.container}>
            <AppBar>
                <Toolbar>
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                    <Typography variant="h5">Recipe Seeker</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;