import React from "react";
import UsersTerm from "../UserTerm/userTerm"
import '../usersCss.css'
import LeftHeader from "../../Headers/LeftHeader/leftHeader";

const users = (props) => {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <LeftHeader/>

                <main className={"col-md-9 ml-sm-auto col-lg-10 px-4"}>
                    <div className={"container"}>
                        <h2>Корисници</h2>
                        <div className={"d-flex flex-wrap justify-content-start"}>


                            {props.users.map((user) => {
                                return (
                                    <UsersTerm term={user}
                                               onDelete={props.onDelete}
                                               onEdit={props.onEdit}
                                               onChangeRole={props.onChangeRole}/>
                                )
                            })}


                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default users;