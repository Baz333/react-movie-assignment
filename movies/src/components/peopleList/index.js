import React from "react";
import Person from "../peopleCard";
import Grid from "@mui/material/Grid";

const PeopleList = (people) => {
    let showCards = people.people.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Person key={p.id} person={p} />
        </Grid>
    ));
    return showCards;
};
export default PeopleList;