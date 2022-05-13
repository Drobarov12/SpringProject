import React from "react";
import {Link} from "react-router-dom";

const mainHeader = () => {
    return (

        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/"}>KikoFix</Link>
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/reservations"}>Reservations</Link>
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/users"}>Users</Link>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <Link className={"nav-link"} to={"/registerUser"}>Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default mainHeader;