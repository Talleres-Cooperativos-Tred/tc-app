import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "./store/actions";
import "./movies.css";
import Card from "./card";

const Movies = () => {
    const dispatch = useDispatch();
    const moviesStore = useSelector(store => store.movies);
    let typingTimer;
    const [error, setError] = useState("");

    useEffect(() => {
        if (moviesStore.loaded === false) {
            dispatch(loadMovies());
        }
        if (moviesStore.loadingError) {
            setError("Ha ocurrido un error buscando los datos");
        }

        //eslint-disable-next-line
    }, [moviesStore.loadingError, moviesStore.loaded]);

    const handleKeyUp = e => {
        const searchText = e.target.value;

        clearTimeout(typingTimer);

        typingTimer = setTimeout(() => {
            dispatch(loadMovies(searchText));
        }, 1000);
    };

    return (
        <div className="movies__component">
            <h1>Movies component</h1>
            <div className="search__form">
                <input type="text" onKeyUp={e => handleKeyUp(e)} />
                {/* <button type="submit">
                    <span className="material-icons md-48">search</span>
                </button> */}
            </div>
            <span
                style={{
                    color: "red",
                }}
            >
                {error.length === 0 ? "" : error}
            </span>
            <div className="card__container">
                {moviesStore.data.map((movie, i) => {
                    return <Card movie={movie} key={i} index={i} />;
                })}
            </div>
        </div>
    );
};

export default Movies;
