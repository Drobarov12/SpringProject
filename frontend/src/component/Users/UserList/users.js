import React from "react";
import UsersTerm from "../UserTerm/userTerm"
import '../../../Css/usersCss.css'

const users = (props) => {
    return (
        <main>
            <div className={"container"}>
                <h2>Users</h2>
                <div className={"container"}>
                    <div className={"row"}>

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
            </div>
        </main>
    );
}

export default users;