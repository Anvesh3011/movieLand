import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import search from "./search.svg";
// 89c0758
// https://www.omdbapi.com/?i=tt3896198&apikey=b89c0758
const API_URL = "https://www.omdbapi.com/?apikey=b89c0758";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searcMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };
  //   const movie1 = {
  //     Title: "The Avengers",
  //     Year: "2012",
  //     imdbID: "tt0848228",
  //     Type: "movie",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  //   };

  useEffect(() => {
    searcMovie("shutter island");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="serch for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={search}
          alt="search"
          onClick={() => {
            searcMovie(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No Movies Found</h1>
        </div>
      )}
    </div>
  );
};
export default App;
