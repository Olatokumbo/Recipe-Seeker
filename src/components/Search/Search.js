import React from "react"
import styles from "./Search.module.css";
import { TextField, Button, Grid } from "@material-ui/core"

const Search = ({SearchQuery}) => {
    const searchForm = (e) => {
        e.preventDefault();
        let search = e.target.elements.search.value;
        SearchQuery(search);

    }
    return (
        <div className={styles.container}>
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={4}>
                    <form className={styles.form} onSubmit={searchForm}>
                        <TextField name="search" id='Search' variant="outlined" label='Search Recipe' required className={styles.search} />
                        <Button type="submit" variant="contained" color="primary" className={styles.button}>SEARCH</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default Search;