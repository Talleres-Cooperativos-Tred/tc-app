import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar__container">
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
                    <Link to="/avatar" className="nav_element">
                        Avatar generator
                    </Link>
                    <Link to="/movies" className="nav_element">
                        Movies
                    </Link>
                    <Link to="/element2" className="nav_element">
                        Hola
                    </Link>
                </Collapsible>
            </div>
        </div>
    );
};

export default Navbar;
