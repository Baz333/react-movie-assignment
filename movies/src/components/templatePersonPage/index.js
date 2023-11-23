import React from "react";
import PersonHeader from "../personHeader";
import Grid from "@mui/material/Grid";

const TemplatePersonPage = ({person, children}) => {
    return(
        <>
            <PersonHeader person={person} />
            <Grid container spacing={5} sx={{padding: "15px"}}>
                <Grid item xs={5}>
                    <div sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                            alt={person.profile_path}
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

export default TemplatePersonPage;