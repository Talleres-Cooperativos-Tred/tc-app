import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const getMeal = async () => {
        const res = await axios.get(url);
        console.log(res);
    };

    useEffect(() => {
        getMeal();
        // eslint-disable-next-line
    }, []);

    return <div>{id}</div>;
};

export default RecipeDetail;
