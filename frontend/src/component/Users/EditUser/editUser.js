import React from "react";
import {useNavigate} from 'react-router-dom';

const editUser = (props) => {
    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        name: "",
        surname: "",
        password: "",
        telephone: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username !== "" ? formData.username : props.user.username;
        const name = formData.name !== "" ? formData.name : props.user.name;
        const surname = formData.surname !== "" ? formData.surname : props.user.surname;
        const password = formData.password !== "" ? formData.password : props.user.password;
        const telephone = formData.telephone !== "" ? formData.telephone : props.user.telephone;

        props.onEditUser(username, name, surname, password, telephone);
        navigate("../users");
    }

    return (
        <div className="login">
            <div className={"container text-center w-50 "}>
                <div className={"shadow p-3 mb-5 bg-white rounded"}>
                    <form onSubmit={onFormSubmit}>
                        <div className={"form-group"}>
                            <input type="text"
                                   className={"form-control"}
                                   id={"username"}
                                   name={"username"}
                                   disabled={true}
                                   placeholder={props.user.username}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <label>Име</label>
                            <input type="text"
                                   className={"form-control"}
                                   id={"name"}
                                   name={"name"}
                                   placeholder={props.user.name}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <label>Презиме</label>
                            <input type="text"
                                   className={"form-control"}
                                   id={"surname"}
                                   name={"surname"}
                                   placeholder={props.user.surname}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <label>Пасворд</label>
                            <input type="text"
                                   className={"form-control"}
                                   id={"password"}
                                   name={"password"}
                                   placeholder={props.user.password}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <div className={"form-group"}>
                            <label>Телефон</label>
                            <input type="text"
                                   className={"form-control"}
                                   id={"telephone"}
                                   name={"telephone"}
                                   placeholder={props.user.telephone}
                                   onChange={handleChange}
                            />
                        </div>
                        <br/>
                        <br/>
                        <div className={"text-center"}>
                            <Link to={"/users"} className={"btn btn-secondary mx-2"}>Назад</Link>
                            <button type={"submit"} id={"submit"} className={"btn btn-primary m-3 w-25"}>
                                Промени
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default editUser;