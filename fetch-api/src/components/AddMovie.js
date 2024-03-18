import React, { useState } from "react";
import classes from "./AddMovie.module.css";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [opText, setOpText] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const movie = {
      title: title,
      openingText: opText,
      releaseDate: date,
    };
    props.addMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          value={opText}
          onChange={(e) => setOpText(e.target.value)}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
