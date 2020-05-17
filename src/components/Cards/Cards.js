import React from "react"
import styles from "./Cards.module.css";
import { Card, CardMedia, Button, Typography, CardContent, Grid, CardActions } from "@material-ui/core"
const Cards = ({ data }) => {
    const truncate = (text) => {
        return text.length > 28 ? text.substring(0, 28) + "..." : text;
    }
    return (
        <div className={styles.container}>
            <Grid item component={Card} xs={12} md={12} className={styles.card} >
                <CardMedia
                    className={styles.image}
                    component="img"
                    image={data.image}
                />
                <CardContent>
                    <Typography color="h5" gutterBottom>{truncate(data.label)}</Typography>
                    <Typography color="textSecondary" variant="body2">Source: {data.source}</Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" size="small" >View More</Button>
                </CardActions>
            </Grid>
        </div>
    );
}

export default Cards;