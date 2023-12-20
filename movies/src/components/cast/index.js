import React from "react";
import {Link} from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';

export default function castListingCard({person}) { 
    return(
        <Card sx={{width:200}}>
            <CardMedia
                sx={{height: 300}}
                image={
                    person.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                        : img
                }
            />
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5" component="p">
                            {person.name}{" "}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <br />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="p">
                            {person.character}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Link to={`/people/${person.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}