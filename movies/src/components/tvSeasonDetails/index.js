import React from "react";
import { Paper } from "@mui/material";
import { Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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

const TVSeasonDetails = (props) => {
    const season = props.season;
    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                Season {season.season_number}
            </Typography>
            <Paper component="ul" sx={{...root}}>
                <Chip icon={<CalendarMonthIcon />} label={`First episode: ${season.air_date}`} sx={{...chip}} />
                <Chip icon={<CalendarMonthIcon />} label={`Episodes: ${season.episodes.length}`} sx={{...chip}} />
                <Chip icon={<CalendarMonthIcon />} label={`Average rating: ${season.vote_average}`} sx={{...chip}} />
            </Paper>
        </>
    );
};
export default TVSeasonDetails;