import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../MIHAJLOV auto repair-logo.png"

const leftHeader = ()=>{
    return(
        <nav className={"col-md-2 d-none d-md-block bg-secondary sidebar"}>
        <div className="sidebar-sticky">
            <Link  to={"/"}>
                <img src={logo} alt={"logo"} className={"logo"}/>
            </Link>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-white" to={"/reservations"}>
                        Резервации
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to={"/users"}>
                        Корисници
                    </Link>
                </li>
            </ul>

        </div>
        </nav>
    );
}

export default leftHeader;