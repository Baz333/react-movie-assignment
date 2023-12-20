import React, {useState} from "react";
import {useQuery} from "react-query";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { getMovieCast } from "../../api/tmdb-api";
import Spinner from '../spinner';
import CastListing from "../cast";
import Grid from "@mui/material/Grid";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = {margin: 0.5};

const MovieDetails = ({movie}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {data, error, isLoading, isError} = useQuery(
        ["movie_cast", {id: movie.id}],
        getMovieCast
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const castMovies = data.cast;
    
    const castList = [];

    for(let i = 0; i < castMovies.length; i++) {
        castList.push(
            <Grid key={castMovies[i].id} item xs={12} sm={6} md={4} lg={3}>
                <CastListing key={castMovies[i].id} person={castMovies[i]} />
            </Grid>
        )
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Genres" sx={{...chip}} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{...root}}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`} />
                <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`} />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Production Countries" sx={{...chip}} color="primary" />
                </li>
                {movie.production_countries.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
            <Typography variant="h5" component="h3">
                Cast
            </Typography>
            <Paper
                component="ul"
                sx={{...root}}
            >
                {castList}
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    position: "fixed",
                    bottom: "1em",
                    right: "1em"
                }}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews movie={movie} />
            </Drawer>
        </>
    );
};
export default MovieDetails;