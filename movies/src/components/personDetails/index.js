import React from "react";
import {useQuery} from "react-query";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from "@mui/material/Typography";
import { getPersonMovieCredits, getPersonTVCredits } from "../../api/tmdb-api";
import Spinner from '../spinner';
import MovieCastListing from "../movieCastListing";
import TVCastListing from "../tvCastListing";
import Grid from "@mui/material/Grid";
import { func } from "prop-types";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = {margin: 0.5};

const genders = [
    {
        value: 0,
        gender: 'Undefined',
        icon: <DoNotDisturbAltIcon />
    },{
        value: 1,
        gender: 'Female',
        icon: <FemaleIcon />
    },{
        value: 2,
        gender: 'Male',
        icon: <MaleIcon />
    },{
        value: 3,
        gender: 'Non-binary',
        icon: <DoNotDisturbAltIcon />
    }
]

function compare(a, b) {
    if ( a.popularity < b.popularity ){
        return 1;
      }
      if ( a.popularity > b.popularity ){
        return -1;
      }
      return 0;
}

const PersonDetails = ({person}) => {

    const personGender = genders.find(g => g.value === person.gender);
    const {data: moviesData, error: moviesError, isLoading: moviesIsLoading, isError: moviesIsError} = useQuery(
        ["person_movie_credits", {id: person.id}],
        getPersonMovieCredits
    );
    const {data: tvData, error: tvError, isLoading: tvIsLoading, isError: tvIsError} = useQuery(
        ["person_tv_credits", {id: person.id}],
        getPersonTVCredits
    );

    if(moviesIsLoading || tvIsLoading) {
        return <Spinner />;
    }

    if(moviesIsError) {
        return <h1>{moviesError.message}</h1>;
    } else if(tvIsError) {
        return <h1>{tvError.message}</h1>
    }

    const castMovies = moviesData.cast;
    const castTV = tvData.cast;
    castMovies.sort(compare);
    castTV.sort(compare);
    
    const movieCastList = [];
    const tvCastList = [];

    for(let i = 0; i < castMovies.length; i++) {
        movieCastList.push(
            <Grid key={castMovies[i].id} item xs={12} sm={6} md={4} lg={3}>
                <MovieCastListing key={castMovies[i].id} movie={castMovies[i]} />
            </Grid>
        )
    }

    for(let i = 0; i < castTV.length; i++) {
        tvCastList.push(
            <Grid key={castTV[i].id} item xs={12} sm={6} md={4} lg={3}>
                <TVCastListing key={castTV[i].id} show={castTV[i]} />
            </Grid>
        )
    }

    return (
        <>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>
            <Typography variant="h6" component="p">
                {person.biography}
            </Typography>
            <Paper component="ul" sx={{...root}}>
                <Chip icon={<TrendingUpIcon />} label={`Popularity: ${person.popularity}`} sx={{...chip}} />
                <Chip icon={personGender.icon} label={`Gender: ${personGender.gender}`} sx={{...chip}}  />
                <Chip icon={<CalendarMonthIcon />} label={`Date of birth: ${person.birthday}`} sx={{...chip}} />
                <Chip icon={<PlaceIcon />} label={`Birthplace: ${person.place_of_birth}`} sx={{...chip}} />
            </Paper><br />
            {movieCastList.length > 0 && <Typography variant="h5" component="h3">
                Movies
            </Typography>}
            {movieCastList.length > 0 && <Paper
                component="ul"
                sx={{...root}}
            >
                {movieCastList}
            </Paper>}<br />

            {tvCastList.length > 0 && <Typography variant="h5" component="h3">
                TV Shows
            </Typography>}
            {tvCastList.length > 0 && <Paper
                component="ul"
                sx={{...root}}
            >
                {tvCastList}
            </Paper>}
        </>
    );
};
export default PersonDetails;