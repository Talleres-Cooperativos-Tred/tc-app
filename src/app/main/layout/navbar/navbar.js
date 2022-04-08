import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navigationConfig from "../../../config/navigationConfig";
import "./navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const avatarStore = useSelector(store => store.avatar);
    return (
        <nav className="navbar__container">
            <div className="navbar">
                <img
                    className="photos"
                    src="https://api.multiavatar.com/Binx Bond.png"
                    alt="freeav"
                />
                <div className="burger" onClick={() => setOpen(!open)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="collapsible">
                <Collapsible
                    open={open}
                    transitionTime={200}
                    onTriggerClosing={() => setOpen(false)}
                >
                    {navigationConfig.map(element => {
                        return (
                            <Link
                                onClick={() => setOpen(false)}
                                to={element.route}
                                className="nav_element"
                            >
                                {element.title}
                            </Link>
                        );
                    })}
                </Collapsible>
            </div>
        </nav>
    );
};

export default Navbar;
