import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SlideshowIcon from '@mui/icons-material/Slideshow';
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


const TVShowDetails = ({show}) => {

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>
            <Typography variant="h6" component="p">
                {show.overview}
            </Typography>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Genres" sx={{...chip}} color="primary" />
                </li>
                {show.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
            <Paper component="ul" sx={{...root}}>
                {show.episode_run_time > 0 && <Chip icon={<AccessTimeIcon />} label={`${show.episode_run_time} min.`} />}
                <Chip icon={<CalendarMonthIcon />} label={`First aired: ${show.first_air_date}`} />
                <Chip icon={<VideoLibraryIcon />} label={`Seasons: ${show.number_of_seasons}`} />
                <Chip icon={<SlideshowIcon />} label={`Episodes: ${show.number_of_episodes}`} />
            </Paper>
            <Paper
                component="ul"
                sx={{...root}}
            >
                <li>
                    <Chip label="Languages" sx={{...chip}} color="primary" />
                </li>
                {show.spoken_languages.map((l) => (
                    <li key={l.english_name}>
                        <Chip label={l.english_name} sx={{...chip}} />
                    </li>
                ))}
            </Paper>
        </>
    );
};
export default TVShowDetails;