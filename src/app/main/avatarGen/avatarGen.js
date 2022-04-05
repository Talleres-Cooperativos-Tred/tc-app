import React, { useState } from "react";
import "./avatarGen.css";

const AvatarGen = () => {
    const [input, setInput] = useState("");
    const [text, setText] = useState("tomy");
    const [avatarType, setAvatarType] = useState(1);

    const handleSubmit = e => {
        e.preventDefault();
        setText(input);
        if (input.length === 0) {
            setText("tomy");
        }
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

            <img
                src={`https://robohash.org/${text}?set=set${avatarType}`}
                alt={text}
            />
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
