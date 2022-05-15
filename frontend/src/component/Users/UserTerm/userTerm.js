import React from "react";
import {Link} from 'react-router-dom'

const userTerm = (props) => {
    return (
        <div className={"col-3 m-3 card shadow p-3  bg-white"}>
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
                        Промени
                    </Link>
                    <a title={"ChangeRole"} className={"btn btn-info"}
                       onClick={() => props.onChangeRole(props.term.username)}>
                        Промени улога
                    </a>
                    <a title={"Delete"} className={"btn btn-danger btn-lg"}
                       onClick={() => props.onDelete(props.term.username)}>
                        Избриши
                    </a>

                </div>

            </div>
        </div>
    );
}

export default userTerm;