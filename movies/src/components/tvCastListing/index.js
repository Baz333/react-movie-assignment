import React from "react";
import {Link} from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';

export default function castListingCard({show}) {

    return(
        <Card sx={{width:200}}>
            <CardMedia
                sx={{height: 300}}
                image={
                    show.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="p">
                            {show.name}{" "}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="p">
                            {show.character} ({show.episode_count} episodes)
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {show.first_air_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {show.vote_average} {"  "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={`/tvshows/${show.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}