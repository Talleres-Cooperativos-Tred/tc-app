import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRM } from "./store/actions";

const RickMorty = () => {
    const dispatch = useDispatch();
    const RMStore = useSelector(store => store.RM);

    useEffect(() => {
        if (RMStore.loaded === false) {
            dispatch(loadRM(1));
        }

        if (RMStore.loadingError === true) {
            alert("Ha ocurrido un error cargando los datos");
        }
    }, [dispatch, RMStore.loadingError, RMStore.loaded]);

    return (
        <div>
            <h2>Rick & Mory</h2>
            <span>Personajes de rick y morty</span>
            <div>
                <ol>
                    {RMStore.data.map((character, index) => {
                        return (
                            <motion.li
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: index * 0.1 },
                                }}
                                key={character.name}
                            >
                                {character.name}
                            </motion.li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default RickMorty;
