import React from "react";
import {Link} from "react-router-dom";

const reservation = (props) => {
    return (
        <tr>
            <td>{props.term.username}</td>
            <td>{props.term.name}</td>
            <td>{props.term.surname}</td>
            <td>{props.term.telephone}</td>
            <td>{props.term.carBrand}</td>
            <td>{props.term.carModel}</td>
            <td>{props.term.serviceType}</td>
            <td>{props.term.description}</td>
            <td>
                <a title={"Delete"} className={"btn btn-danger btm-sm"}
                   onClick={() => props.onDeleteRes(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-warning"}
                      onClick={() => props.onEditRes(props.term.id)}
                      to={"/reservations/edit"}>
                    Edit
                </Link>
            </td>
        </tr>
    );
}
export default reservation;