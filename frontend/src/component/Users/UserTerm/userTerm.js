import React from "react";
import {Link} from 'react-router-dom'

const userTerm = (props) => {
    return (
        <div className={"col-4 card my-2 "}>
            <div className={"card-body"}>
                <h5 className={"card-header"}>{props.term.username}</h5>
                <h6>{props.term.name}</h6>
                <h6>{props.term.surname}</h6>
                <h6>{props.term.telephone}</h6>
                <h6>{props.term.userType}</h6>
                <div className={"text-center"}>
                    <Link className={"btn btn-warning"}
                          onClick={() => props.onEdit(props.term.username)}
                          to={"/users/edit"}>
                        Edit
                    </Link>
                    <a title={"Delete"} className={"btn btn-danger btn-lg"}
                       onClick={() => props.onDelete(props.term.username)}>
                        Delete
                    </a>
                    <a title={"ChangeRole"} className={"btn btn-info"}
                       onClick={() => props.onChangeRole(props.term.username)}>
                        ChangeRole
                    </a>
                </div>

            </div>
        </div>
    );
}

export default userTerm;