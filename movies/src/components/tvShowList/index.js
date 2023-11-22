import React from "react";
import TVShow from "../tvShowCard";
import Grid from "@mui/material/Grid";

const TVShowList = (shows) => {
    let showCards = shows.shows.map((s) => (
        <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TVShow key={s.id} show={s} />
        </Grid>
    ));
    return showCards;
};
export default TVShowList;