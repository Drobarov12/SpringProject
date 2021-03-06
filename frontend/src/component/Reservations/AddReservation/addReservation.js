import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const addReservation = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        name: "",
        surname: "",
        telephone: "",
        carBrand: "",
        carModel: "",
        serviceType: "",
        description: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const name = formData.name;
        const surname = formData.surname;
        const telephone = formData.telephone;
        const carBrand = formData.carBrand;
        const carModel = formData.carModel;
        const serviceType = formData.serviceType;
        const description = formData.description;

        props.onAddReservation(username, name, surname, telephone, carBrand, carModel, serviceType, description);
        navigate("../reservations");
    }

    return (
        <div className="login">
            <div className={"container w-50"}>
                <div className={"shadow p-3 mb-5 bg-white rounded"}>
                    <form onSubmit={onFormSubmit}>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"username"}
                                   name={"username"}
                                   required
                                   placeholder={"Username"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"name"}
                                   name={"name"}
                                   required
                                   placeholder={"??????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"surname"}
                                   name={"surname"}
                                   required
                                   placeholder={"??????????????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"telephone"}
                                   name={"telephone"}
                                   required
                                   placeholder={"??????????????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"carBrand"}
                                   name={"carBrand"}
                                   required
                                   placeholder={"?????????? ???? ??????????????????????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"carModel"}
                                   name={"carModel"}
                                   required
                                   placeholder={"?????????? ???? ??????????????????????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <label className={"mx-2"}>?????? ???? ???????????? </label>
                            <select name="serviceType" onChange={handleChange}>
                                {props.s.map((term) =>
                                    <option value={term}>{term}</option>
                                )}
                            </select>


                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <input type={"textarea"}
                                   className={"form-control"}
                                   id={"description"}
                                   name={"description"}
                                   required
                                   placeholder={"???????? ???? ??????????????????"}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <br/>
                        <div className={"text-center"}>
                            <Link to={"/reservations"} className={"btn btn-secondary btn-sm "}>
                                ??????????
                            </Link>
                        <button type={"submit"} id={"submit"} className={"btn btn-primary w-50 m-2"}>
                            ????????????
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default addReservation;