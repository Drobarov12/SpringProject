import React from "react";

const reservation = (props) => {
    return (
        <tr>
            <td>{props.term.id}</td>
            <td>{props.term.username}</td>
            <td>{props.term.name}</td>
            <td>{props.term.surname}</td>
            <td>{props.term.telephone}</td>
            <td>{props.term.carBrand}</td>
            <td>{props.term.carModel}</td>
            <td>{props.term.serviceType}</td>
            <td>{props.term.description}</td>
        </tr>
    );
}
export default reservation;