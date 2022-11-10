import React from "react";
import Searchbar from "./Searchbar";
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header className="header">
            <div className="header_logo">           
                <NavLink exact to="/" >Muziki</NavLink>
            </div>
            <Searchbar />
            <h2><NavLink exact to="/" >Home</NavLink></h2>
        </header>
    );
}

export default Header;