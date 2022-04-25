import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import navigationConfig from "../../../config/navigationConfig";
import "./navbar.css";

const Navbar = () => {
    const avatarStore = useSelector(store => store.avatar);
    const[count,setCount]=useState(0);
    const[open,setOpen] = useState(false);
    const[repeat,setRepeat] = useState(false);
    let cubebox = "cube";
    let cubetop = "";
    let timer;

    function action(){
        setCount(count+1);
        setRepeat((count % 2 !== 0));
        setOpen(!open);
    }

    if(repeat === false){
        if(count !== 0){
            cubebox = "cubeOpen";
            cubetop = "cubeTopDown";
        }
    }else{
        cubebox = "cubeClose";
        cubetop = "cubeTopUp";
    }
    console.log(cubebox);
    
    return (
        <nav className="navbar__container">
            <div className="navbar">
                {avatarStore.avatarUrl.length === 0 ? (
                    ""
                ) : (
                    <img
                        className="photos"
                        src={avatarStore.avatarUrl}
                        alt="freeav"
                    />
                )}
                <div className={cubetop}/>
                <div className={cubebox}
                onClick={() => action()}/>
            </div>
            <div className="collapsible">
                <Collapsible
                    open={open}
                    transitionTime={200}
                    onTriggerClosing={() => setOpen(false)}
                >
                    {navigationConfig.map((element, i) => {
                        return (
                            <Link
                                key={i}
                                onClick={() => action()}
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
