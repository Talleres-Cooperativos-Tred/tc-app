import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./avatarGen.css";
import { setAvatarName } from "./store/actions";

const AvatarGen = () => {
    const dispatch = useDispatch();
    const { avatarName } = useSelector(store => store.avatar);
    console.log(avatarName);
    const [input, setInput] = useState("");
    const [avatarType, setAvatarType] = useState(1);
    const [fullUrl, setFullUrl] = useState(
        `https://robohash.org/${avatarName}?set=set${avatarType}`
    );
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setAvatarName(input));
    };
    return (
        <div className="avatar__container">
            <h1>Create your Avatar!</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    placeholder="Type something..."
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Give my avatar</button>
            </form>

            <img src={fullUrl} alt={avatarName} />
            <div className="radio__container">
                <input type="radio" value="1" defaultChecked name="name" />
                <input name="name" value="2" type="radio" />
                <input name="name" value="3" type="radio" />
                <input name="name" value="4" type="radio" />
            </div>
        </div>
    );
};

export default AvatarGen;
