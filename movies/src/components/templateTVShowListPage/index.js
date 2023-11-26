import React, {useState} from "react";
import { getLanguages } from "../../api/tmdb-api";
import Header from "../headerMovieList";
import FilterCard from "../filterTVShowsCard";
import TVShowList from "../tvShowList";
import Grid from "@mui/material/Grid";
import { useQuery } from "react-query";
import Spinner from "../spinner";

function compare(a, b) {
    if ( a.english_name < b.english_name ){
        return -1;
      }
      if ( a.english_name > b.english_name ){
        return 1;
      }
      return 0;
}

function TVShowListPageTemplate({shows, title}) {
    const {data, error, isLoading, isError} = useQuery("tv_languages", getLanguages);
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState(0);
    const [languageFilter, setLanguageFilter] = useState('all');

    if(isLoading) {
        return <Spinner />;
    }

    if(isError) {
        return <h1>{error.message}</h1>;
    }

    const languageList = data;
    languageList.sort(compare);
    
    const genreId = Number(genreFilter);

    let displayedShows = shows
        .filter((s) => {
            return s.name && s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        })
        .filter((s) => {
            return genreId > 0 ? s.genre_ids.includes(genreId) : true;
        })
        .filter((s) => {
            if(languageFilter === "all") {
                return true;
            } else {
                return s.original_language && s.original_language.search(languageFilter) !== -1;
            }
        });
    
    const handleChange = (type, value) => {
        if(type === "name") setNameFilter(value);
        else if(type === "genre") setGenreFilter(value);
        else if(type === "language") setLanguageFilter(value);
    };

    return (
        <Grid container sx={{padding:'20px'}}>
            <Grid item xs={12}>
                <Header title={title} />
            </Grid>
            <Grid item container spacing={5}>
                <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
                    <FilterCard
                        onUserInput={handleChange}
                        titleFilter={nameFilter}
                        genreFilter={genreFilter}
                        languageFilter={languageFilter}
                    />
                </Grid>
                <TVShowList shows={displayedShows} />
            </Grid>
        </Grid>
    );
}
export default TVShowListPageTemplate;