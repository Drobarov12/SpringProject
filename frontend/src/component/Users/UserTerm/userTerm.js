import React from "react";
import { Link } from 'react-router-dom'

const userTerm = (props) =>{
    return(
        <tr>
            <td>{props.term.username}</td>
            <td>{props.term.name}</td>
            <td>{props.term.surname}</td>
            <td>{props.term.telephone}</td>
            <td>{props.term.userType}</td>
            <td className={"col text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.username)}>
                    Delete
                </a>

                <Link className={"btn btn-warning"}
                   onClick={() => props.onEdit(props.term.username)}
                    to={"/editUser"}>
                    Edit
                </Link>
            </td>
        </tr>
    );
}

export default userTerm;