import React from "react";
import {Link} from "react-router-dom";

const leftHeader = ()=>{
    return(
        <nav className={"col-md-2 d-none d-md-block bg-light sidebar"}>
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">

                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Orders
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">

                        Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">

                        Customers
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">

                        Reports
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">

                        Integrations
                    </a>
                </li>
            </ul>

        </div>
        </nav>
    );
}

export default leftHeader;