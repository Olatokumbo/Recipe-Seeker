import React from "react"
import styles from "./Results.module.css";
import {Cards} from "../";
import {Grid} from "@material-ui/core";
const Results = ({recipes}) =>{
    return(
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
        {recipes.map((data, i) =>(<Cards key={i} data={data.recipe} />))}
        </Grid>
        </div>
    );
}

export default Results;