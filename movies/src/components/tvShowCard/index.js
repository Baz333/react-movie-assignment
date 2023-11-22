import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';

export default function TVShowCard(show) {
    return(
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title={
                    <Typography variant="h5" component="p">
                        {show.show.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                sx={{height: 500}}
                image={
                    show.show.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${show.show.poster_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {show.show.first_air_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {show.show.vote_average} {"  "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={`/`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}