import React from "react";
import { motion } from "framer-motion";

const Card = props => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: props.index * 0.1 },
            }}
            key={props.movie.imdbID}
            className="card"
        >
            <img
                width={320}
                height={500}
                src={props.movie.Poster}
                alt={props.movie.Title}
            />
            <h3> {props.movie.Title} </h3>
            <p> {`${props.movie.Type} - ${props.movie.Year}`} </p>
        </motion.div>
    );
};

export default Card;
