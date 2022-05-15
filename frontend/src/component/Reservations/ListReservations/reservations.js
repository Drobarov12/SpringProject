import React from "react";
import Reservation from "../TermReservation/reservation";
import LeftHeader from "../../Headers/LeftHeader/leftHeader"
import {Link} from "react-router-dom";

const reservations = (props) => {
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <LeftHeader/>
                <main className={"col-md-9 ml-sm-auto col-lg-10 px-4"}>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            <main>
                                <h2>Резервации</h2>
                                <div className={"table-responsive"}></div>
                                <table className={"table table-striped"}>
                                    <thead>
                                    <tr>
                                        <th scope="col">Username</th>
                                        <th scope="col">Име</th>
                                        <th scope="col">Презиме</th>
                                        <th scope="col">Телефон</th>
                                        <th scope="col">Марка</th>
                                        <th scope="col">Модел</th>
                                        <th scope="col">Вид</th>
                                        <th scope="col">Опис</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.reservations.map((term) => {
                                        return (
                                            <Reservation term={term}
                                                         onDeleteRes={props.onDeleteRes}
                                                         onEditRes={props.onEditRes}/>
                                        );
                                    })}

                                    </tbody>
                                </table>

                            </main>
                            <div className={"text-center"}>
                                <Link className={"btn btn-primary m-3 w-25"} to={"/reservations/add"}>Додади</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default reservations;