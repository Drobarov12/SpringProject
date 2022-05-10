import React from "react";

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
            </td>
        </tr>
    );
}

export default userTerm;