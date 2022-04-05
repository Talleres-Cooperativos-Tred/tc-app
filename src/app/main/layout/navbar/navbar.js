import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar__container">
            <div className="navbar">
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
                    <Link
                        onClick={() => setOpen(false)}
                        to="/tc/avatar"
                        className="nav_element"
                    >
                        Avatar generator
                    </Link>
                    <Link
                        onClick={() => setOpen(false)}
                        to="/tc/movies"
                        className="nav_element"
                    >
                        Movies
                    </Link>
                </Collapsible>
            </div>
        </nav>
    );
};

export default Navbar;
