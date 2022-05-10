import React from "react";
import UsersTerm from "../UserTerm/userTerm"

const users = (props) =>{
    return(
        <main>
        <div className={"container-fluid"}>
            <h2>Users</h2>
            <table className={"table table-striped"}>
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">TypeOfUser</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map((user) =>{
                    return(
                        <UsersTerm term={user} onDelete={props.onDelete} onEdit={props.onEdit}/>
                    )
                })}
                </tbody>

            </table>
        </div>
        </main>
    );
}

export default users;