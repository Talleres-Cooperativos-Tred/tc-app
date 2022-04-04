import React, { useState } from "react";
import "./avatarGen.css";

const AvatarGen = () => {
    const [input, setInput] = useState("");
    const [text, setText] = useState("tomy");
    const [avatarType, setAvatarType] = useState(1);

    const handleClick = () => {
        setText(input);
    };

    return (
        <div className="avatar__container">
            <h1>Create you Avatar!</h1>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button onClick={handleClick}>Give my avatar</button>
            <img
                src={`https://robohash.org/${text}?set=set${avatarType}`}
                alt={text}
            />
            <div className="radio__container">
                <input onClick={() => setAvatarType(1)} type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
            </div>
        </div>
    );
};

export default AvatarGen;
