import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./avatarGen.css";
import { setAvatar } from "./store/actions";

const AvatarGen = () => {
    const [input, setInput] = useState("");
    const [text, setText] = useState("tomy");
    const [avatarType, setAvatarType] = useState(1);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        setText(input);
        if (input.length === 0) {
            setText("tomy");
        }
    };

    const avatarUrl = `https://robohash.org/${text}?set=set${avatarType}`;

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

            <img src={avatarUrl} alt={text} />
            <button
                onClick={() => dispatch(setAvatar(avatarUrl))}
                className="fut__button"
            >
                Colocar de perfil
            </button>
            <div className="radio__container">
                <input
                    type="radio"
                    value="1"
                    defaultChecked
                    name="name"
                    onClick={e => setAvatarType(e.target.value)}
                />
                <input
                    name="name"
                    onClick={e => setAvatarType(e.target.value)}
                    value="2"
                    type="radio"
                />
                <input
                    name="name"
                    onClick={e => setAvatarType(e.target.value)}
                    value="3"
                    type="radio"
                />
                <input
                    name="name"
                    onClick={e => setAvatarType(e.target.value)}
                    value="4"
                    type="radio"
                />
            </div>
        </div>
    );
};

export default AvatarGen;
