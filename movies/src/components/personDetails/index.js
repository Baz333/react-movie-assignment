import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from "@mui/material/Typography";

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
    console.log(person);

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
            </Paper>
        </>
    );
};
export default PersonDetails;