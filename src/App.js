import './App.css';
import "milligram";
import {useState} from "react";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";

function App() {
    const [movies, setMovies] = useState([
        {title: "Wall-E", year: 1990},
        {title: "Pulp Fiction", year: 1970},
        {title: "Matrix", year: 2000},
        {title: "1670", year: 2024},
    ]);

    return (
        <div className="container">
            <h1>My favourite movies to watch</h1>
            <MoviesList movies={movies}></MoviesList>
            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>;
        </div>
    )
}

export default App;
