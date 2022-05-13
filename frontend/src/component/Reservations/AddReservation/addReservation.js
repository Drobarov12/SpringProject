import React from 'react';
import {useNavigate} from 'react-router-dom';

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

        <div className={"row mt-5"}>
            <div className={"col-md-5"}>
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
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               id={"name"}
                               name={"name"}
                               required
                               placeholder={"Name"}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               id={"surname"}
                               name={"surname"}
                               required
                               placeholder={"Surname"}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               id={"telephone"}
                               name={"telephone"}
                               required
                               placeholder={"Telephone"}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               id={"carBrand"}
                               name={"carBrand"}
                               required
                               placeholder={"Car Brand"}
                               onChange={handleChange}
                        />
                    </div>

                    <div className={"form-group"}>
                        <input type="text"
                               className={"form-control"}
                               id={"carModel"}
                               name={"carModel"}
                               required
                               placeholder={"Car Model"}
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label>Service Type</label>
                        <select name={"serviceType"} onChange={handleChange}>
                            {props.s.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>

                    </div>
                    <div className={"form-group"}>
                        <input type={"textarea"}
                               className={"form-control"}
                               id={"description"}
                               name={"description"}
                               required
                               placeholder={"Description of the problem"}
                               onChange={handleChange}
                        />
                    </div>

                    <button type={"submit"} id={"submit"} className={"btn btn-primary"}>
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
}

export default addReservation;