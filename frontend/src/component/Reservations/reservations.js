import React from "react";
import Reservation from "./reservation";
import LeftHeader from "../Headers/LeftHeader/leftHeader"

const reservations=(props)=>{
    return(
        <div className={"container-fluid"} >
            <div className={"row"}>
                <main>
                    <h2>Rezervations</h2>
                    <div className={"table-responsive"}></div>
                        <table className={"table table-striped"}>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Telephone</th>
                                    <th scope="col">Car Brand</th>
                                    <th scope="col">Car Model</th>
                                    <th scope="col">Service type</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.reservations.map((term)=>{
                                return(
                                    <Reservation term={term}/>
                                );
                            })}

                            </tbody>
                        </table>
                </main>
            </div>
        </div>
    );
}

export default reservations;