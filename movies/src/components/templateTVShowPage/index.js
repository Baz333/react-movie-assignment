import React from "react";
import TVShowHeader from "../tvShowHeader";
import Grid from "@mui/material/Grid";

const TemplateTVShowPage = ({show, children}) => {
    return(
        <>
            <TVShowHeader show={show} />
            <Grid container spacing={5} sx={{padding: "15px"}}>
                <Grid item xs={5}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                            alt={show.poster_path}
                        />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    {children}
                </Grid>
            </Grid>
        </>
    );
};

export default TemplateTVShowPage;