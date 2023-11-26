import React from "react";
import Grid from "@mui/material/Grid";
import TVSeasonHeader from "../tvSeasonHeader";

const TemplateTVSeasonPage = ({season, children}) => {
    return(
        <>
            <TVSeasonHeader season={season} />
            <Grid container spacing={5} sx={{padding: "15px"}}>
                <Grid item xs={5}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}>
                        {season.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`} alt={season.poster_path} /> : <img src="../../images/film-poster-placeholder.png" alt="Missing" />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVSeasonPage;