import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loader from "./components/Loader";
import AddMovie from "./components/AddMovie";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [retryInterval, setRetryInterval] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-database-afa21-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong here!!");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText,
        });
      }

      // const getData = data.map((movie) => {
      //   return {
      //     id: movie.episode_id,
      //     title: movie.title,
      //     releaseDate: movie.release_date,
      //     openingText: movie.opening_crawl,
      //   };
      // });

      setMovies(loadedMovies);
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

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-database-afa21-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        header: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const onDeleteHandler = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  let content = <p>No more movies!</p>;
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <Loader />;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} onDelete={onDeleteHandler} />;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie addMovie={addMovieHandler} />
      </section>
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
