import React from "react";
import {getTVGenres, getLanguages} from "../../api/tmdb-api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
};

function compare(a, b) {
    if ( a.english_name < b.english_name ){
        return -1;
      }
      if ( a.english_name > b.english_name ){
        return 1;
      }
      return 0;
}

export default function FilterTVShowsCard(props) {

    const {data: genreData, error: genreError, isLoading: genreIsLoading, isError: genreIsError} = useQuery("genres", getTVGenres);
    const {data: languageData, error: languageError, isLoading: languageIsLoading, isError: languageIsError} = useQuery("languages", getLanguages);


    if(genreIsLoading || languageIsLoading) {
        return <Spinner />;
    }

    if(genreIsError) {
        return <h1>{genreError.message}</h1>;
    } else if(languageIsError) {
        return <h1>{languageError.message}</h1>
    }

    const genres = genreData.genres;
    if(genres[0].name !== "All") {
        genres.unshift({id:"0", name:"All"});
    }
    const languages = languageData;
    languages.sort(compare);

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    }

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value)
    }

    const handleGenreChange = (e) => {
        handleChange(e, "genre", e.target.value)
    }

    const handleLanguageChange = (e) => {
        handleChange(e, "language", e.target.value)
    }

    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: "rgb(204, 204, 0)"
            }}
            variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon fontSize="large" />
                    Filter the movies.
                </Typography>
                <TextField
                    sx={{...formControl}}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    value={props.titleFilter}
                    onChange={handleTextChange}
                />
                <FormControl sx={{...formControl}}>
                    <InputLabel id="genre-label">Genre</InputLabel>
                    <Select
                        labelId="genre-label"
                        id="genre-select"
                        defaultValue=""
                        value={props.genreFilter}
                        onChange={handleGenreChange}
                    >
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl sx={{...formControl}}>
                    <InputLabel id="language-label">Language</InputLabel>
                    <Select
                        labelId="language-label"
                        id="language-select"
                        defaultValue=""
                        value={props.languageFilter}
                        onChange={handleLanguageChange}
                    >
                        <MenuItem key="all" value="all">
                            All languages
                        </MenuItem>
                        {languages.map((language) => {
                            return (
                                <MenuItem key={language.iso_639_1} value={language.iso_639_1}>
                                    {language.english_name}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </CardContent>
            <CardMedia
                sx={{height: 300}}
                image={img}
                title="Filter"
            />
            <CardContent>
                <Typography variant="h5" component="h1">
                    <SearchIcon fontSize="large" />
                    Filter the movies.
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );

}