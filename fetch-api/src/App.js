import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [retryInterval, setRetryInterval] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong here!!");
      }
      const data = await response.json();

      const getData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        };
      });

      setMovies(getData);
    } catch (error) {
      setError(error.message);
      //Retry after 5 seconds
      setRetryInterval(setTimeout(fetchMoviesHandler, 5000));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const cancelRetry = () => {
    if (retryInterval) {
      clearTimeout(retryInterval);
      setRetryInterval(null);
    }
  };

  let content = <p>No more movies!</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Loader />;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={cancelRetry}>Cancel Retry</button>
      </section>
      <section>
        {/* {isLoading && <Loader />}
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No more movies!</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
