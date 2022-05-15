import React from "react";
import {Link} from "react-router-dom";
import "./login.css"

const login = () => {
    return (
        <div className="login">
            <div className="container text-center w-25 ">
                <div className={"shadow p-3 mb-5 bg-white rounded haight"}>
                    <h2>Најави се</h2>
                    <div className={"form-group"}>
                        <input type="text"
                               id={"username"}
                               name={"username"}
                               required
                               placeholder={"Username"}/>
                    </div>
                    <br/>
                    <div className={"form-group"}>
                        <input type="password"
                               id={"password"}
                               name={"password"}
                               required
                               placeholder={"Password"}/>
                    </div>
                    <br/>
                    <br/>
                    <div className={"text-center"}>
                        <Link className={"btn btn-secondary btn-sm m-2"}
                              to={"/registerUser"}>
                            Регистрирај се
                        </Link>
                        <button type={"submit"} id={"submit"} className={"btn btn-primary btn-sm m-2"}>
                            Најави се
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default login;