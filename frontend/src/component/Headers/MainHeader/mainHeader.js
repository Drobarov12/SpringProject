import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../MIHAJLOV auto repair-logo.png"

const mainHeader = () => {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/"}>
                Михајлов
            </Link>
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/"}>

            </Link>
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/"}>

            </Link>
            <Link className={"navbar-brand col-sm-3 col-md-2 mr-0"} to={"/"}>

            </Link>

            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <Link className={"nav-link"} to={"/login"}>Најави се</Link>
                </li>
            </ul>
        </nav>
    );
}

export default mainHeader;