import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom"
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';

export default function PeopleCard(person) {
    console.log("peopleCard");
    console.log(person);
    return(
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title={
                    <Typography variant="h5" component="p">
                        {person.person.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                sx={{height: 500}}
                image={
                    person.person.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${person.person.profile_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="p">
                            <TrendingUpIcon fontSize="large" />
                            {"  "} {person.person.popularity} {"  "}
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