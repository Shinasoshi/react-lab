import './App.css';
import "milligram";
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const [movies, setMovies] = useState([
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"},
    ]);

    function addMovie(event) {
        event.preventDefault();
        if (title.length < 5) {
            return alert('Tytuł jest za krótki');
        }
        setMovies([...movies, {title, year}])
        // props.onMovieSubmit({title, year});
        setTitle('');
        setYear('');
    }

    return <form onSubmit={addMovie}>
        <div className="container">
            <h2>Titles/Years</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>

            <h2>Add movie</h2>
            <div>
                <label>Tytuł</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            <div>
                <label>Rok nagrania</label>
                <input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>
            </div>
            <button>Add a movie</button>
        </div>
    </form>;
}

export default App;
