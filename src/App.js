import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './seacrh.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=87321534';

const App =() => {

    const [movies, setMovies]= useState([])

    const [searchTerm, setsearchTerm]= useState('');

    const searchMovie= async (title) =>{
        const response =await fetch (`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
    } 

    useEffect(() => {
        searchMovie('Spiderman');
    }, []);

    return(
    <div className='app'>
        <h1>MovieWorld</h1>

        <div className='search'>
            <input placeholder='Seach for Movies' value={searchTerm} onChange={(e) => setsearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)}/>
        </div>

        {
        movies?.length > 0
            ?(
            <div className='container'>
            {movies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
            </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }

        
    </div>
    );
}

 export default App;