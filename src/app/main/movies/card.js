import React from "react";
import { motion } from "framer-motion";

const Card = ({ movie, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.1 },
            }}
            key={movie.imdbID}
            className="card"
        >
            <img
                width={320}
                height={500}
                src={movie.Poster}
                alt={movie.Title}
            />
            <h3> {movie.Title} </h3>
            <p> {`${movie.Type} - ${movie.Year}`} </p>
        </motion.div>
    );
};

export default Card;
