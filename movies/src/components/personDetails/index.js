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
import { getPersonMovieCredits } from "../../api/tmdb-api";
import Spinner from '../spinner';
import CastListing from "../castListing";

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

const PersonDetails = ({person}) => {

    const personGender = genders.find(g => g.value === person.gender);
    const {data, error, isLoading, isError} = useQuery(
        ["person_movie_credits", {id: person.id}],
        getPersonMovieCredits
    );

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const cast = data.cast;

    const castList = [];

    for(let i = 0; i < cast.length; i++) {
        castList.push(
            <CastListing movie={cast[i]} />
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
            {castList.length > 0 && <Typography variant="h5" component="h3">
                Movies
            </Typography>}
            {castList.length > 0 && <Paper
                component="ul"
                sx={{...root}}
            >
                {castList}
            </Paper>}
        </>
    );
};
export default PersonDetails;